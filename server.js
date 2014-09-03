var express = require('express');
var bodyParser = require('body-parser')

var www = express.static('app');
var api = require('./app/node-app/node-app.js');

express()
  .use(bodyParser.urlencoded())
  .use(bodyParser.json())
  .use('/api', api)
  .use('/', www)
  .listen(process.env.PORT || 8888);