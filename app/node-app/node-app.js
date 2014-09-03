var express = require('express');
var ctrl = require('./ctrl.js');
var api = express();

api.put('/write', ctrl.update);

module.exports = api;