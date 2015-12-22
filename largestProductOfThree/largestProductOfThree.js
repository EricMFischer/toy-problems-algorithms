/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(arr) {
  arr.sort(function(a,b) {return b - a;}); // descending order
  var positives = arr[0] * arr[1] * arr[2];
  var withNegatives = arr[0] * arr[arr.length-1] * arr[arr.length - 2];

  if (positives > withNegatives) {return positives;}
  else {return withNegatives;}
};

console.log(largestProductOfThree([5, -10, 4, 6, 2, 3, -8, 4]));

// Tip for refactoring: check out RADIX sort