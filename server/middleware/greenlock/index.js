module.exports = require('greenlock-express').create({
  version: 'draft-11',
  configDir: '/etc/letsencrypt', // 또는 ~/letsencrypt/etc
  server: process.env.NODE_ENV
    ? 'https://acme-v02.api.letsencrypt.org/directory'
    : 'https://acme-staging.api.letsencrypt.org/directory',
  approveDomains: (opts, certs, cb) => {
    if (certs) {
      opts.domains = ['yourdomain.com', 'www.yourdomain.com']
    } else {
      opts.email = 'your@email.com'
      opts.agreeTos = true
    }
    cb(null, { options: opts, certs })
  },
  renewWithin: 81 * 24 * 60 * 60 * 1000,
  renewBy: 80 * 24 * 60 * 60 * 1000
})
