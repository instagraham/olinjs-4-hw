var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI||'localhost', "twits")

var schema = mongoose.Schema({
	name: String,
	pass: String,
	twits: 'array'
})

exports.User = mongoose.model('user', schema);