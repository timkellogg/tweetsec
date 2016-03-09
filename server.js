var express = require('express'),
    path = require('path'),
    app = express(),
    port = process.env.PORT || 5000,
    Credentials = require('./secrets').Credentials,
    Twit = require('twit'),
    Bot = require('./lib/tweetsec.js'),
    username = '@howsmypassword',
    appDir = path.dirname(require.main.filename);

var TwitterClient = new Twit({
  consumer_key: Credentials.consumerKey,
  consumer_secret: Credentials.consumerSecret,
  access_token: Credentials.accessToken,
  access_token_secret: Credentials.accessTokenSecret,
});

var stream = TwitterClient.stream('statuses/filter', { track: username });

stream.on('tweet', function(res) {

  var userId = res.user.id;

  var userName = res.user.name;

  var tweet = res.text.replace(username, '');

  var assessment = Bot.assessPassword(tweet);

  Bot.tweetResponse(assessment);

  // TwitterClient.post('') to user with matching id the password response 

});

app.listen(port, function() {
  console.log('node up on ' + port);
});
