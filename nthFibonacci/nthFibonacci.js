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

// var nthFibonacci = function (n) {
//   // create an array that does what Fibonacci does
//   var fibonacci = [0, 1];
//   var recurse = function(n) {
//     if (n === 0) {
//       return;
//     } else {
//       for (var i = 2; i <= n; i++) {
//         fibonacci[i] = (fibonacci[i-1] + fibonacci[i-2]);
//       }
//       recurse(n-1);
//     }
//   }
//   recurse(n);

//   return fibonacci[n];
// };
// console.log(nthFibonacci(3));

// Solution
var nthFibonacci = function(n) {
  var fibonacci = [0,1];
  for (var n = n; n > 1; n--) {
    fibonacci.push(fibonacci.shift() + fibonacci[0]);
  }
  return fibonacci[n];
}

console.log(nthFibonacci(4));
// Space complexity is constant because we're disregarding the previous n's with the exception of the last two


// As we increment up, we save each value in the array. So we'd just be accessing the last two places in our array without having to calculate them again. This is linear time.
// var fibMem = function(n) {
//   var mem = [];
//   for (var i=0; i<n; i++) {
//     mem[i] = i < 2 ? i : mem[i-1] + mem[i-2];
//   }
//   return mem[n];
// }

// You can optimize it more (for constant time) by storing the nFib.mem array outside of the function. That way you're just looking up values in a global scope if you were to call it again with the same argument
// var fibMem = function(n) {
//   if (fibMem.mem[n]) {return fibMem.mem[n];}
//   for (var i=0; i<=n; i++) {
//     fibMem.mem[i] = i < 2 ? i : fibMem.mem[i-2] + fibMem.mem[i-1];
//   }
//   return fibMem.mem[n];
// }
// fibMem.mem = [];
