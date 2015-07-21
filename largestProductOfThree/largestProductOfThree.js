/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

// Sort compare function
// if return answer is:
// positive --> b goes first
// negative --> a goes first

var largestProductOfThree = function(array) {
  array.sort(function(a,b) {return b-a;});
  var length = array.length;
  var positives = array[0] * array[1] * array[2];
  var twoNegatives = array[0] * array[length-1] * array[length - 2];

  if (positives > twoNegatives) {return positives;}
  else {return twoNegatives;}
};


console.log(largestProductOfThree([5, -10, 4, 6, 2, 3, -8, 4]));

// Tip for refactoring: check out RADIX sort