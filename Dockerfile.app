ARG BASE_IMG
FROM $BASE_IMG as BUILDER
WORKDIR /usr/src/app

FROM node:14.4.0-alpine

ARG APP_PATH
ARG APP_PATH
WORKDIR /usr/src/app
COPY --from=BUILDER /usr/src/app/dist/apps/${APP_PATH} .

#TODO : OVERIDE PACKAGE JSON :: REMOVE BELOW LAYER WHEN DIST BUNDLE IS FIXED
COPY --from=BUILDER /usr/src/app/proxypackage/package.json package.json

RUN yarn install --prod --frozen-lockfile

EXPOSE 3000

CMD ["yarn", "start"]
