export default ({ $axios }) => {
  const isProd = process.env.NODE_ENV === 'production'
  const isDev = process.env.NODE_ENV === 'development'

  $axios.onRequest(config => {
    config.baseURL = isProd
      ? 'https://api.YOUR_DOMAIN.com'
      : 'http://localhost:3000'
    config.withCredentials = true

    return config
  })

  $axios.onResponse(res => {
    if (isDev) {
      console.log(res.data.data)
    }

    return res.data.data
  })

  $axios.onError(err => {
    if (isDev) {
      console.error('axios error interceptors\n', err.response.data.data)
    }

    if (!err.response) {
      return Promise.reject(err)
    }

    return Promise.reject(err.response.data.data)
  })
}
