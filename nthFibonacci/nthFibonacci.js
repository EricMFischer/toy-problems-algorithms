/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

var nthFibonacci = function (n) {
  // create an array that does what Fibonacci does
  var fibonacci = [0];
  var recurse = function(n) {
    if (n === 0) {
      return;
    } else {
      for (var i = 1; i <= n; i++) {
        fibonacci[i] = (fibonacci[i-1] + (fibonacci[i-2]) || 1(fibonacci[i-1] + (fibonacci[i-2] || i) )) + fibonacci[i-1];
                        // hmm... how do I derive fibonacci[i] before it exists... ? (fibonacci[i-1] + (fibonacci[i-2] || i) )
      }
      recurse(n-1);
    }
  }
  recurse(n);

  return fibonacci//[n];
};

console.log(nthFibonacci(4));

// Solution

var nFib = function(n) {
  return n < 2 ? n : nFib(n-1) + nFib(n-2);
}

// As we increment up, we save each value in the array. so we'd just be accessing the last two places in our array
// without having to calculate them again

// linear time

var nFib = function(n) {
  var mem = [];
  for (var i=0; i<n; i++) {
    mem[i] = i < 2 ? i : mem[i-1] + mem[i-2];
  }
  return mem[n];
}

// you can optimize it more (for constant time) by storing the nFib.mem array outside of the function. that way
// you're just looking up values in a global score if you were to call it again with the same argument

var fibMem = function(n) {
  var mem = [];
  for (var i=0; i<n; i++) {
    mem[i] = i < 2 ? i : mem[i-1] + mem[i-2];
  }
  return mem[n];
}

fibMem/mem = [];

// Even more simple. space complexity is constant because we're disregarding the previous n's with the exception
// of the last two

var nFib = function(n) {
  var mem = [0,1];
  for (; n > 1; n--) {
    mem.push(mem.shift() + mem[0]);
  }
  return mem[n];
}
