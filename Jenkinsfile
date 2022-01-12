properties([
  buildDiscarder(logRotator(numToKeepStr: '3')),
  disableConcurrentBuilds(),
])

pipeline {
  agent {
      kubernetes {
         label "jade"
         yaml """
apiVersion: v1
kind: Pod
metadata:
  labels:
    jenkins: jenkins-pipeline
spec:
  securityContext:
    runAsUser: 0
    fsGroup: 0
  volumes:
  - name: docker-sock
    hostPath:
      path: /var/run/docker.sock
  containers:
  - name: jnlp
    image: harbor.instg.pscloudhub.com/tools/jnlp-slave:pscode
  - name: node12
    image: node:12.18.2-alpine
    command:
    - cat
    tty: true
  - name: docker
    image: docker
    command:
    - cat
    tty: true
    volumeMounts:
    - mountPath: /var/run/docker.sock
      name: docker-sock
  - name: kube-tools
    image: harbor.instg.pscloudhub.com/tools/kube-tools:1.14.2
    imagePullPolicy: Always
    command:
    - cat
    tty: true
  - name: sonar-scanner-tools
    image: harbor.instg.pscloudhub.com/tools/sonar-scanner-tools
    imagePullPolicy: Always
    command:
    - cat
    tty: true
  - name: lighthouse
    image: justinribeiro/lighthouse
    command:
    - cat
    tty: true
    securityContext:
      capabilities:
        add:
          - SYS_ADMIN
  - name: pa11y-ci
    image: digitalist/pa11y-ci:latest
    command:
    - cat
    tty: true
"""
          }
  }

  environment {
    IMAGE_TAG = UUID.randomUUID().toString().take(6)
    DOCKER_REGISTRY_URL = "harbor.instg.pscloudhub.com"
    DOCKER_REGISTRY = "${DOCKER_REGISTRY_URL}/iris/"
    NAMESPACE = "grocery-dev"
    FRONTEND_URL = "https://jade.instg.pscloudhub.com/"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build') {
      steps {
        container('node12') {
          echo "Installing dependencies ..."
          sh "yarn install"
        }
      }
    }

    // stage('Sonar Scan') {
    //   steps {
    //     container('sonar-scanner-tools'){
    //       withSonarQubeEnv("sonar") {
    //         sh """ sonar-scanner \\
    //           -Dsonar.projectKey="jade-v2" \\
    //           -Dsonar.projectName="jade-v2" \\
    //           -Dproject.settings=sonar-project.properties \\
    //           -Dsonar.sourceEncoding=UTF-8
    //         """
    //       }
    //     }
    //   }
    // }

    stage('Unit Tests') {
      steps {
        container('node12') {

          echo "Running tests ..."
          // sh 'yarn nx run-many --target=test --all'
        }
      }
    }

    stage('Static Analysis') {
      steps {
        container('node12') {
          echo "Linting files ..."
          // sh 'yarn nx run-many --target=lint --all'
        }
      }
    }

    stage('Prod build') {
      steps {
        container('node12') {
          echo "Building ..."
          sh 'yarn nx run-many --target=build --all --prod'
        }
      }
    }

    stage('Docker: Build and Publish') {
      steps {
        container('docker') {
          echo "Build and push docker images"
          sh "docker build --no-cache -f ./apps/frontend/Dockerfile -t iris/jade-frontend:${IMAGE_TAG} ."
          sh "docker build --no-cache -f ./apps/graphql/content/Dockerfile -t iris/jade-graphql-content:${IMAGE_TAG} ."
          sh "docker build --no-cache -f ./apps/graphql/gateway/Dockerfile -t iris/jade-graphql-gateway:${IMAGE_TAG} ."
          sh "docker build --no-cache -f ./apps/graphql/products/Dockerfile -t iris/jade-graphql-products:${IMAGE_TAG} ."

          echo "Tagging docker images"
          sh "docker tag iris/jade-frontend:${IMAGE_TAG} ${DOCKER_REGISTRY}jade-frontend:${IMAGE_TAG}"
          sh "docker tag iris/jade-graphql-content:${IMAGE_TAG} ${DOCKER_REGISTRY}jade-graphql-content:${IMAGE_TAG}"
          sh "docker tag iris/jade-graphql-gateway:${IMAGE_TAG} ${DOCKER_REGISTRY}jade-graphql-gateway:${IMAGE_TAG}"
          sh "docker tag iris/jade-graphql-products:${IMAGE_TAG} ${DOCKER_REGISTRY}jade-graphql-products:${IMAGE_TAG}"

          withCredentials([usernamePassword(credentialsId: "iris-goharbor", passwordVariable: "registryPASS", usernameVariable: "registryUSER")]) {
            sh "docker login --username=${registryUSER} --password=${registryPASS} ${DOCKER_REGISTRY_URL}"

            sh "docker push ${DOCKER_REGISTRY}jade-frontend:${IMAGE_TAG}"
            sh "docker push ${DOCKER_REGISTRY}jade-graphql-content:${IMAGE_TAG}"
            sh "docker push ${DOCKER_REGISTRY}jade-graphql-gateway:${IMAGE_TAG}"
            sh "docker push ${DOCKER_REGISTRY}jade-graphql-products:${IMAGE_TAG}"
          }
        }
      }
    }

    stage('Deployment') {
      steps {
        container('kube-tools') {
          echo "Starting deployment in K8s cluster"
          sh 'kubectl apply -f ./apps/frontend/k8s'
          sh 'kubectl apply -f ./apps/graphql/content/k8s'
          sh 'kubectl apply -f ./apps/graphql/products/k8s'
          sh 'kubectl apply -f ./apps/graphql/gateway/k8s'

          sh "sleep 10"

          echo "Updating Images ..."
          sh "kubectl set image deployment/jade-frontend jade-frontend=${DOCKER_REGISTRY}jade-frontend:${IMAGE_TAG} --namespace ${NAMESPACE}"
          sh "kubectl set image deployment/jade-graphql-content jade-graphql-content=${DOCKER_REGISTRY}jade-graphql-content:${IMAGE_TAG} --namespace ${NAMESPACE}"
          sh "kubectl set image deployment/jade-graphql-products jade-graphql-products=${DOCKER_REGISTRY}jade-graphql-products:${IMAGE_TAG} --namespace ${NAMESPACE}"

          echo "Waiting 20 seconds ..."
          sh "sleep 20"

          sh "kubectl set image deployment/jade-graphql-gateway jade-graphql-gateway=${DOCKER_REGISTRY}jade-graphql-gateway:${IMAGE_TAG} --namespace ${NAMESPACE}"

        }
      }
    }

    stage('Performance Test') {
      steps {
        container('lighthouse') {
          echo "Preparing for performance test ..."
          sh "sleep 20"

          echo "Running lighthouse ..."
          sh """
            lighthouse --chrome-flags="--headless --disable-gpu --no-sandbox" ${FRONTEND_URL} --output-path ./lighthouse-report.html
          """
        }
      }

      post {
        always {
          publishHTML (target: [
            allowMissing: false,
            alwaysLinkToLastBuild: false,
            keepAll: true,
            reportDir: '/home/jenkins/agent/workspace/jade/jade-all/',
            reportFiles: 'lighthouse-report.html',
            reportName: "Jade Performance"
          ])
        }
      }
    }

    stage('Accessibility Test') {
      steps {
        container('pa11y-ci') {
          echo "Preparing for accessibility test ..."
          sh "sleep 5"

          echo "Running pa11y ..."
          sh """
            pa11y-ci -c ./pa11y/config.json
          """
        }
      }
    }
  }
}

