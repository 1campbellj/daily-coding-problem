var run = function(arr) {
  var result = new Array(arr.length);

  var product = 1;

  for (var i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }

  for (var i = 0; i < result.length; i++) {
    result[i] = product / arr[i];
  }
  return result;
};

var bonus = function(arr) {
  var result = new Array(arr.length);

  for (var i = 0; i < result.length; i++) {
    var product = 1;
    for (var j = 0; j < arr.length; j++) {
      if (i != j) {
        product = product * arr[j];
      }
    }
    result[i] = product;
  }

  return result;
};

exports.run = run;
exports.bonus = bonus;
