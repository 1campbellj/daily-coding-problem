var run = function(arr, sum) {
  // constant time lookup of differences
  var cache = {};
  // to store differences
  var m;

  for (i = 0; i < arr.length; i++) {
    // if the cache is true for i, i + x = sum
    // where x is some previous element in the array

    // no combination found, store current difference
    // for easy lookup later
    m = sum - arr[i];
    cache[m] = true;

    if (cache[arr[i]]) {
      return true;
    }
  }

  return false;
};

exports.run = run;
