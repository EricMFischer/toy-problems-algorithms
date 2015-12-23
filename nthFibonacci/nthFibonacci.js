/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *  0 1 1 2 3
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
 */

// Old-fashioned recursive solution
var fibonacci = function (n) {
  // create an array that does what Fibonacci does
  var arr = [0, 1];
  var recurse = function(n) {
    if (n === 0) {return;} 
    else {
      for (var i = 2; i <= n; i++) {
        arr[i] = (arr[i-1] + arr[i-2]);
      }
      recurse(n-1);
    }
  }
  recurse(n);
  return arr[n];
};

var nthFibonacci = function(n) {
  var fibonacci = [0,1]; // values keep changing; constant space complexity
  for (var n = n; n > 1; n--) {
    fibonacci.push(fibonacci.shift() + fibonacci[0]);
  }
  return fibonacci[n];
}

console.log(nthFibonacci(4));

// Basic fibonacci solution saves each value in the array for later access by index. Linear time complexity.
var fibMem = function(n) {
  var mem = [];
  for (var i=0; i<n; i++) {
    mem[i] = i < 2 ? i : mem[i-1] + mem[i-2];
  }
  return mem[n];
}

// Slight optimization: store the fibMem.mem array outside of the function, for global scope access.
fibMem.mem = [];
var fibMem = function(n) {
  if (fibMem.mem[n]) {return fibMem.mem[n];} // checks to see if value's already been calculated
  for (var i=0; i<=n; i++) {
    fibMem.mem[i] = i < 2 ? i : fibMem.mem[i-2] + fibMem.mem[i-1];
  }
  return fibMem.mem[n];
}