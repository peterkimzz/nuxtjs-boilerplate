module.exports = (session) => {
  const { host, port, secret } = require('./.config') 
  const connectRedis = require('connect-redis')
  const RedisStore = connectRedis(session)

  return {
    resave: false,
    saveUninitialized: false,
    secret: secret,
    name: 'redisStore',
    cookie: {
      httpOnly: true,
      secure: false,
    },
    store: new RedisStore({
      host: host,
      port: port,
      logErrors: true
    })
  }
}
