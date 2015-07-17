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
  


  var result = 1;
  for (var i=0; i<3; i++) {
    result *= array[i];
  }
  return result;
};


console.log(largestProductOfThree([5, 10, 4, 6, 2, 3, 9, 4]));

// Tip for refactoring
// Take the product of the largest 3 numbers, or the product of the 2 smallest numbers and the largest number

// check out RADIX sort

var largestProductOfThree = function(array) {
  var newArr = array.slice().sort();

  var threePositives = newArr[n-1] * newArr[n-2] * newArr[n-3];


}