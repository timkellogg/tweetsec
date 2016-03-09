var express = require('express'),
    path = require('path'),
    app = express(),
    port = process.env.PORT || 5000,
    Credentials = require('./secrets').Credentials,
    Twit = require('twit'),
    Bot = require('./lib/tweetsec.js'),
    username = '@howsmypassword';

var TwitterClient = new Twit({
  consumer_key: Credentials.consumerKey,
  consumer_secret: Credentials.consumerSecret,
  access_token: Credentials.accessToken,
  access_token_secret: Credentials.accessTokenSecret,
});

var stream = TwitterClient.stream('statuses/filter', { track: username });

stream.on('tweet', function(res) {

  var userId = res.user.id;

  var screenName = '@' + res.user.screen_name;

  var tweet = res.text.replace(username, '');

  Bot.assessPassword(tweet)
    .then(function(assessment) {
      return Bot.buildResponse(assessment, screenName);
    })
    .then(function(response) {

      TwitterClient.post('statuses/update', { status: screenName + ':' + response }, function(err, data, response) {
        if (err) {
          console.error(err);
        } else {
          console.log('successfully sent!');
        }
      });

    });

});

app.listen(port, function() {
  console.log('node up on ' + port);
});
