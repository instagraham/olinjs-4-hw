var models = require('../models')

exports.create = function(req, res) {
  user = req.session.user
  user.twits.push(req.body.twit)
  models.User.find({}).exec(function(err, cats){
  if (err)
    return console.log("error", err);
  models.User.update({name:user.name},
        {$push:{twits:req.body.twit}}, function(err) {
    if (err)
      return console.log("error", err);
    })
  })
  res.redirect('/')
}

function rendertwits(req, next) {
  var user = req.session.user
  var twits = []
  models.User.find({}).exec(function(err,twitters){
  	if (err)
  		return console.log("error",err)
  	for (var i = 0; i < twitters.length; i++) {
  		if (twitters[i].twits.length != 0) {
  		  for (var j = 0; j < twitters[i].twits.length; j++) {
  			twits.push([twitters[i].name, twitters[i].twits[j]])
        }
  		}
  	}
  twits.reverse();
  next(twits);
  });
}

exports.rendertwits = rendertwits

exports.refresh = function(req, res) {
	rendertwits(req, function(twits) {
      res.render('_twits', 
      			{ title: 'Express', tweets:twits});
  })
}