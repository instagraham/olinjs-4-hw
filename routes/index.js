var models = require('../models')
var twits = require('./twits')
/*
 * GET home page.
 */

exports.index = function(req, res){
	console.log(req.session.name)
  twits.rendertwits(req, function(twits) {
      res.render('index', 
    { title: 'Express', tweets:twits, user:req.session.name});
  })
};