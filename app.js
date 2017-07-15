// var ig = require('instagram-node').instagram();
var http = require('http');
var express = require('express');
var api = require('instagram-node').instagram();
var app = express();
const config = require('./config.js');
const request = require('request')
 

app.set('port', process.env.PORT || 3000);


api.use({
  client_id: config.client_id,
  client_secret: config.client_secret
});

//I need to point my user here to authorize then take the code given
'https://api.instagram.com/oauth/authorize/?client_id=25f0c6b482e64b59aa48c1f7952ce840&redirect_uri=http://localhost:3000/handleauth&response_type=code' 


var redirect_uri = 'http://localhost:3000/handleauth';
 
exports.authorize_user = function(req, res) {
  res.redirect(api.get_authorization_url(redirect_uri, { scope: ['likes'], state: 'a state' }));
  // console.log(res.redirect(api.get_authorization_url(redirect_uri, { scope: ['likes'], state: 'a state' })))
};

let access = ''
 
exports.handleauth = function(req, res) {
  api.authorize_user(req.query.code, redirect_uri, function(err, result) {
    if (err) {
      console.log(err);
      res.send("Didn't work");
    } else {
      console.log('Yay! Access token is ' + result.access_token);
      res.send('You made it!!');
      let access = result.access_token
      request(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${access}`, function(err, response, body) {
      	if (!err){
      		console.log(body)
      	}
      	else {
      		console.log(err)
      });
      // request(`https://api.instagram.com/v1/tags/{tag-name}/media/recent?access_token=${access}`, function(err, response, body) {
      //  if (!err){
      //    console.log(body)
      //  }
      //  else {
      //    console.log(err)
      // 	}
      // });
    }
  });
};
 
// This is where you would initially send users to authorize 
app.get('/authorize_user', exports.authorize_user);
// This is your redirect URI 
app.get('/handleauth', exports.handleauth);
 
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

