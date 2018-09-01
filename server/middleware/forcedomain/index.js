module.exports = app => {
  const forceDomain = require('forcedomain')
  const options = {
    hostname: process.env.PUBLIC_LINK || 'www.peterkimzz.com',
    protocol: 'https',
    excludeRule: /\.amazonaws.com$/ // localhost is excluded by default
  }

  app.use(forceDomain(options))
}
