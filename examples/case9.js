
function sum() {
  return Array.prototype.slice.call(arguments)
    .reduce(function(prev, current) {
      return prev + current;
    }, 0);
}

var result = sum(1, 2, 3);

console.log('sum: ', result);

function sumAndTimesFive() {
  var args = Array.prototype.slice.call(arguments);
  return sum.apply(null, args) * 5;
}

var anotherResult = sumAndTimesFive(1, 2, 3);

console.log('sum x 5: ', anotherResult);
