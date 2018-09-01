module.exports = session => {
  const RedisStore = require('connect-redis')(session)
  const { REDIS_HOST, REDIS_PORT, REDIS_SECRET } = process.env

  return {
    resave: false,
    saveUninitialized: false,
    secret: REDIS_SECRET || 'YOUR_SERCERT_KEY',
    name: 'redisStore',
    cookie: { httpOnly: true, secure: false },
    store: new RedisStore({
      host: REDIS_HOST || 'http://127.0.0.1',
      port: REDIS_PORT || 6379,
      logErrors: true
    })
  }
}
