var assert = require('assert');
var p1 = require('./problem_01');

var list = [10, 15, 3, 7];
var k = 17;

console.log('Test given use case');
assert(p1.run(list, k));
