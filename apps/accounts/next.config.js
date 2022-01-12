module.exports = {
  assetPrefix: '/account-assets',
  publicRuntimeConfig: {
    OPTIMIZELY_KEY: process.env.OPTIMIZELY_KEY,
    CAPTCHA_SITE_KEY: process.env.CAPTCHA_SITE_KEY,
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  },
};
