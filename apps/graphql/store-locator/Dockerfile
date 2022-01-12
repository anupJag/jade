FROM node:14.4.0-alpine

RUN mkdir -p /app/graphql/store-locator

WORKDIR /app/graphql/store-locator

COPY ./dist/apps/graphql/store-locator .
# Copying package.json and installing entire dependencies
# As of now Nx is not bundling dependencies in the bundled files
COPY package.json .
COPY yarn.lock .

RUN yarn

EXPOSE 3000

CMD [ "node", "main.js" ]
