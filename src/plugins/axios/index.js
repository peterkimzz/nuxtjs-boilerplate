export default ({ $axios, redirect }) => {
  const isProd = process.env.NODE_ENV === 'production'

  $axios.onRequest(config => {
    config.baseURL = isProd
      ? 'https://api.YOUR_DOMAIN.com'
      : 'http://localhost:3000'
    config.withCredentials = true

    return config
  })

  $axios.onError(err => {
    if (!isProd) {
      console.error('axios error interceptors\n', err)
    }
    return Promise.reject(err)
  })
}
