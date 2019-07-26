var assert = require('assert');
var p2 = require('./problem_02');

var list = [1, 2, 3, 4, 5];

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

console.log('Test given use cases');
assert(arraysEqual(p2.run(list), [120, 60, 40, 30, 24]));

list = [3, 2, 1];
assert(arraysEqual(p2.run(list), [2, 3, 6]));

console.log('Test bonus implementation');
list = [1, 2, 3, 4, 5];
assert(arraysEqual(p2.bonus(list), [120, 60, 40, 30, 24]));

list = [3, 2, 1];
assert(arraysEqual(p2.bonus(list), [2, 3, 6]));
