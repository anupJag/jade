# JADE - Jumpstart Application Development for E-commerce

Jade is an eCommerce Accelerator for Groceries. The primary components are a Frontend storefront built using Next.js and TypeScript and a GraphQl backend.

The project is scafolded using NX [https://nx.dev/react/getting-started/why-nx]

## [Micro-Apps and Folder Stracture](/docs/micro-app-strategy.md)

The project is setup as a monorepo. and the various apps reside in the apps folder. We are dividing our app into smaller micro-apps
The libs folder is meant for any shared modules or libraries.

For details please check [Micro-Apps Strategy](/docs/micro-app-strategy.md)

## Jira Project


## Setting it up Locally

> You will need a `.env` file in the web and gql repos which is not committed with code on purpose. Please reach out to any one of the existing team members to get a copy of the `.env` file


run `yarn install`
  
install `yarn global add @nrwl/cli` to run multiple apps parallelly

### Running the app

run `yarn run serve:api`  
  
run `yarn start`  
  
Wait until both starts  
  
open `http://localhost:4200/` (For Content App)  
open `http://localhost:4201/` (For Browse & Search App)  
open `http://localhost:4202/` (For Cart/Checkout App)  
open `http://localhost:4203/` (For Accounts App)

> **Please Note**
>
> - Old product model wont work now. DB needs to be emptied for `products` collection and the new product model data need to be seeded into the DB.
> - Currently the seeding occurs when there are no products in `products` collection and you refresh the `homepage` for `content` or `browse & search app`.
> - Wait for sometime(5-10 secs :alarm_clock:) for the seeds to kick in and then refresh the page again. This will plug the products to the app.
> - Number of product seeds can be configured in `/libs/utils/src/seed/products.js`\*
> - If you are facing issues with the Mongo connection, please edit the .local.env file for MONGO_URL var to use your local mongo instance (for eg: `mongodb://localhost:27017`). :fire: :fire: Please do not commit the file :fire: :fire:

## mongoDB connection

some of graphql apps (eg. products, order, user) are communicating with mongoDB in clould.

mongoURL and DB names are configured in `.local.env` files.

Network access are enabled for all by whitelisting IP as `0.0.0.0/0`.

If you want to add ip address / any other confiuration in mongo clould. Log on here [ https://account.mongodb.com/account/login ] with below Gmail details,

> Please provide Gmail id : `xtstarterkit@gmail.com` and password will be updated.

## Jenkins URL: https://jenkins.in.pscloudhub.com/
