import * as axios from 'axios'

const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || 3000

let options = {}

// The server-side needs a full url to works
if (process.server) {
  options.baseURL = `http://${HOST}:${PORT}`
}

export default axios.create(options)

// export default function({ $axios, redirect }) {
//   $axios.onRequest(config => {
//     // console.log('Making request to ' + config.url)
//     // console.log(config)
//   })

//   $axios.onError(error => {
//     console.log('axios error', error)
//     // const code = parseInt(error.response && error.response.status)
//     // if (code === 400) {
//     //   redirect('/400')
//     // }
//   })
// }
