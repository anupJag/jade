# Micro-Apps Strategy

## Document Objective
This document covers the high level approach/thought process of breaking the current application into micro-apps. This covers the goals, approach and what type of changes we would face to break the monolith app into multiple smaller apps

## Factors affecting decision to split a monolithic application into different micro apps:
  * Apps can be built and deployed in isolation (Decoupling)
  * Speed up development and developer workflow.
  * Speed up build and deployment cycles
  * Speed up testing and quality gates cycles
  * Compose with another application and api to make better experience
  * Unique concern of user experience

## Challenges
  1. User session mechanism between apps
  2. Navigation between apps
  3. Build and deployment mechanism
  4. Data/state sharing between apps

## Assumptions
  * Internal navigation within the app will be SPA-like. App to App transition will involve full page reloads.
  * All applications will follow well defined url patterns.

## Identification of independently deployable apps

### Separation Criteria
  1. domain and type of data consumption
  2. User Journey

#### I. Content APP - Content driven and dependent on CMS Data.
  * Homepage
  * Category Landing Pages
  * Static Pages like Terms and Conditions
  * About Us
  * Contact Us

#### II. Browse and Search APP - These pages need data from catalog and search services. By combining these pages in the same app we are able to share state between PLP to PDP or Search to PDP transaction and can improve performance.
  * PLP (L2, L3)
  * PDP (All Variations)
  * Search

#### III. Cart and Checkout APP - Stateful Pages, Checkout Journey
  * Cart
  * Checkout
  * Payment
  * Order Confirmation
  * Track Order

Q. What is the correct place for cart, CatalogApp or CheckoutApp as Cart Items data can be shared or Persist between mini-cart or PDP page. - *Should be part of Cart and Checkout*

Q. What is the correct place for TrackOrder AccountApp or CheckoutApp as a non-login user can also track his order. Should be part of AccountApp but *TBD in Scrum of Scrum*

#### IV. Accounts APP - Stateful Pages
  * Profile
  * Login
  * SignUp
  * Orders
  * Wishlist
  * NotifyMe
  * Add/Edit Address

#### V. Store APP
  * Locator/ Nearby Store - Can be its own?

### Folder Structure
```shell
.
├── apps
│  ├── accounts
│  ├── accounts-e2e
│  ├── browse-search
│  ├── browse-search-e2e
│  ├── cart-checkout
│  ├── cart-checkout-e2e
│  ├── content
│  ├── content-e2e
│  ├── store
│  ├── store-e2e
│  └── ...
├── .storybook
├── docs
└── ...
```

Q Should e2e testing should be done individually or there should be one e2e for all micro-apps ? - *Should be done at app*

Q. Should it be better to keep documentation and all major architecture design decision with in code repo using docusaurus i.e. Single Source of Truth ? - *Readme can contain*

### Identification of common components across apps
* Header
  * Top Navigation
  * Logo and Branding
  * Main Navigation
  * Search
* Footer
  * Footer Navigation
  * BackToTop
  * Signup for Newsletter
  * Country-Currency
* withAuth HOC or Hooks
* withCookie HOC or Cookie State Sync
* withRouter HOC or route state sync
* I18n or label component
* Handling of Scroll and window resize.

Q. Need to decide on State Management. So that we can create and expose factory Functions like in configureStore in case of redux.

### Folder Structure
```shell
.
├── libs
│  ├── ui
│  │  ├── atoms
│  │  │  ├── src
│  │  │  │  ├── lib
│  │  │  │  │  ├── grid
│  │  │  │  │  ├── heading
│  │  │  │  │  ├── link
│  │  │  │  │  └── ...
│  │  │  │  └── index.ts
│  │  │  ├── .eslintrc
│  │  │  └── tsconfig.json
│  │  ├── molecules
│  │  │  ├── src
│  │  │  │  ├── lib
│  │  │  │  │  ├── country-currency
│  │  │  │  │  ├── subscribe
│  │  │  │  │  ├── item-list
│  │  │  │  │  └── ...
│  │  │  │  └── index.ts
│  │  │  ├── .eslintrc
│  │  │  └── tsconfig.json
│  │  ├── header
│  │  │  ├── src
│  │  │  │  ├── lib
│  │  │  │  │  ├── header.spec.tsx
│  │  │  │  │  └── header.tsx
│  │  │  │  └── index.ts
│  │  │  ├── .eslintrc
│  │  │  └── tsconfig.json
│  │  └── ...
│  ├── utils
│  ├── hoc
│  ├── hooks
│  ├── styles
│  │  ├── themes
│  │  └── global
│  ├── graphql
│  └── ...
└── ...
```

Here atoms, molecules, header, styles, utils, hoc and hooks are independent nx libraries.
All organism will be independent nx libraries inside ui.

Q. All third-party libraries and components should be kept behind a facade layer. - *Should be done to be added in tech-debt*

### Navigation between apps approach:
Each micro app is an independent NextJs application that will work on its own port and will be a standalone application. All common components like header which contains main navigation and footer will reside in the Nx lib folder that will be imported and shared by each app.

#### Development and navigation between micro apps:
**Server Side**<br/>
In dev env since multiple apps will be running on different ports say CnC will be running on port :3001 and Browse & Search is on port:3002 then in-order to hard transition between different apps without changing relative urls we will be using a reverse-proxy server having rules configured on the basis of URL pattern which will resolve request and serve the content on one same domain or Port.

In prod env each app will be deployed on a separate XT pod. This will require mechanisms from Ingress or Akamai layer to redirect traffic to appropriate XT pods based on the requested URL.

**Client Side** <br/>
For Soft transition on the client side we will be writing a HOC. This HOC will execute a context function which we set at each app level; this function will accept a URL and match it with a regex pattern for the current app if matched then We will render NextJS Link else we will render an normal anchor tag with all the required parameters.

No additional mechanism needed for client side in prod env this hoc will work for both.

### URL Structure
In order for the above approach to work we must follow a well defined url structure.

| Page                  | URL Pattern                              |
|-----------------------|------------------------------------------|
| Home                  | /
| Category landing page | /category/:cat-id
| Search                | /s/:search-term-slug
| PDP                   | /p/:product-slug/:sku-slug
| Cart                  | /cart
| Checkout              | /checkout
| Payment               | /checkout/payment
| Order Confirmation    | /order-confirmation
| SignIn                | /signin
| Register              | /register
| Orders                | /account/orders
| Profile               | /account/profile
| Store Locator         | /store-locator

### Build and deployment mechanism
**CI** - We will use nx affected command to run lint, tests and coverage on changed and affected projects in the PR.

**CD** - Each application has an independent CD process and prod build will be generated through following command `yarn nx <App>:build --prod`

In case of auto build and deployments we can use nx affected cmd for build as well

#### Assets Caching and Deployment
In order to handle the Assets Caching and deployment for multiple apps. A Nextjs configuration assetsPrefix: /app-name value will be configured for each nextjs app which will result in following build output
```shell
.
├── dist
│  ├── cnc-assets
│  │  ├── public
│  │  ├── _next
│  │  │  ├── public
│  │  │  ├── server
│  │  │  ├── statics
│  │  │  └── manifest.json
│  │  └── package.json
│  ├── browse-assets
│  │  ├── _next
│  │  │  ├── public
│  │  │  ├── server
│  │  │  ├── statics
│  │  │  └── manifest.json
│  │  ├── public
│  │  └── package.json
│  └── ...
└── ...
```


For each app production deployment an appropriate docker image will be created by copying corresponding folder and npm install to generate node_modules required for the server.

The image is then deployed to the corresponding pod and npm start cmd is used as pod startup command.

For asset caching we can copy and replace each app build folder in the cdn caching bucket, non required folder and files like server and package.json can be removed before copying them to the cdn bucket.

Necessary rewrite rules will be defined to point to the correct asset path in case required at ingress/nginx/akamai level.

### Persisting user session between multiple apps
TBD

### Next Steps:
  1. Pros and Cons for sharing global state between apps at server level.

## Queries on Nx
  1. How can I specify different version numbers to the different apps? Usually I give a version number in package.json, but with Nx there is only one package.json for all of my apps and libs.
  2. How to maintain and track app dependency individually. say one micro app wants to use a NPM package which others don’t need in that case since package JSON is one how this will be handled.
  3. How to create an independent package i.e. npm modules which can be hosted in public/private npm registry and utilize semantic versioning. <br/>
  Use Case: I have a shared component date-picker which is used by two different apps. And now I have some requirements in one of the apps which require breaking change for the date-picker component. In this case I have to create a copy of date-picker for that app. This can be easily tackled with semantic versioning.
  4. How to retain the module name if say my folder structure changed in the future.<br/>
  Use Case: Say I have some component in following folder structure libs/ui-atoms/button where I define ui-atoms as my component library than import rule will be like
  ```javascript
  import button from ‘@myOrg/ui-atoms/button’
  ```
  Now if I change the folder structure like libs/ui/atoms/button I have to refactor all the import rules too.
  ```javascript
  import button from ‘@myOrg/ui/atoms/button’
  ```

### Key Decision
