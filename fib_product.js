function productFib(prod){
  let fib = [0,1];
  while (fib[0] * fib[1] < prod) {
    fib.push(fib[0] + fib[1])
    fib.shift()
  }
  return [fib[0], fib[1], fib[0] * fib[1] == prod]
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) {
      return false;
    }
    return true;
  }
}

var assert = require('assert');
assert.deepEqual(productFib(4895), [55, 89, true])
assert.deepEqual(productFib(5895), [89, 144, false])
assert.deepEqual(productFib(74049690), [6765, 10946, true])
assert.deepEqual(productFib(84049690), [10946, 17711, false])
assert.deepEqual(productFib(193864606), [10946, 17711, true])
assert.deepEqual(productFib(447577), [610, 987, false])
assert.deepEqual(productFib(602070), [610, 987, true])
