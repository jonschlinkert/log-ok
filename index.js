'use strict';

var check = require('success-symbol');
var green = require('ansi-green');

module.exports = function() {
  console.log.bind(console, green(check)).apply(console, arguments);
};
