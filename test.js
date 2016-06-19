'use strict';

require('mocha');
var assert = require('assert');
var check = require('success-symbol');
var green = require('ansi-green');
var ok = require('./');

describe('log-ok', function() {
  it('should export a function', function() {
    assert.equal(typeof ok, 'function');
  });

  it('should export an object', function() {
    var log = console.log;
    var count = 0;

    console.log = function(str, msg) {
      assert.equal(str, green(check));
      console.log = log;
      count++;
    };

    ok('foo');
    assert.equal(count, 1);
  });

  it('should respect leading whitespace', function() {
    var log = console.log;
    var count = 0;

    console.log = function(str, msg) {
      assert.equal(str, '    ' + green(check));
      console.log = log;
      count++;
    };

    ok('    foo');
    assert.equal(count, 1);
  });
});
