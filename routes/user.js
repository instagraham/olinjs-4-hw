
var models = require('../models')
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.login = function(req, res){
  res.render('user', {title:'login'})
}

exports.create = function(req, res) {
  models.User.find().exec(function(err, cats){
  	if (err)
      return console.log("error", err);
    for (var i = 0; i < cats.length; i++) {
    	if (cats[i].name == req.body.username &&
        cats[i].pass == req.body.password) {
        req.session.user = cats[i]
    	  return res.redirect('/');
      }
    }
    
    var bob = new models.User({
	    name:req.body.username,
		  pass:req.body.password})
  	  twits:[]
	  bob.save(function (err) {
      if (err)
        console.log("Problem saving bob", err);
      req.session.user = bob
      res.redirect('/');
  	   })
    })
}

exports.logout = function(req,res) {
  req.session.user = []
  console.log(req)
  res.redirect('/login')
}