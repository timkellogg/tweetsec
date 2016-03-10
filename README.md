# Tweetsec

##### _A Node.js Twitter Bot that Evaluates Passwords_

#### By **Tim Kellogg**

## Description

_Tweetsec is a Twitter Bot build with Node.js that listens for tweets made to @howsmypassword. It evaluates the password and if the password is weak, will provide an alternative password that is rated strong._

_It is built to be fast and responsive to tweets. It uses a persistent stream that will reconnect to Twitter whenever it loses connection. It also is fully non-blocking so it can theoretically handle many tweets at the same time (even if that is very unlikely!)._

## Try it out!

Tweet at @howsmypassword to check your password strength!

##  Setup

* `git clone` this file
* `cd` into the root of the app
* `npm install` to install node packages
* `npm install -g nodemon` to install reloading node server
* `npm start` to start nodemon server
* setup a twitter development account and get OAuth credentials 
* create a `./secrets.js` file:

``
exports.Credentials = {
  consumerKey: KEY,
  consumerSecret: SECRET,
  accessToken: TOKEN,
  accessTokenSecret: 'TOKEN SECRET,
};
``

### Technologies Used

* Language: JavaScript
* Stack: Express/Node
* Database: N/A
* ORM: N/A
* Middleware: N/A
* Testing: N/A
* Server: Express (server.js)
* Other Dependencies: twit, path
* Front-End: N/A

### Features to Add

* Refine algorithm for getting passwords to be more memorable

### Legal

Copyright (c) 2016 **_Tim Kellogg_**

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
