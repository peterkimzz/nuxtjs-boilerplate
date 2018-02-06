const mongoose = require('mongoose')
const config	 = require('../config')
mongoose.Promise = global.Promise

exports.mongoose = mongoose

exports.connect = () => {
  
	mongoose.connection.on('error', error => {
		console.log('Error occured.', error)
	})

	mongoose.connection.once('open', () => {
		console.log('Mongoose connected.')
  })
  
  mongoose.connect(config.MONGODB.uri)

	return mongoose
}
