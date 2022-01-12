FROM node:14.4.0-alpine

RUN mkdir -p /app/graphql/products

WORKDIR /app/graphql/products

COPY ./dist/apps/graphql/products .
# Copying package.json and installing entire dependencies
# As of now Nx is not bundling dependencies in the bundled files
COPY package.json .
COPY yarn.lock .

RUN yarn

EXPOSE 3000

CMD [ "node", "main.js" ]
