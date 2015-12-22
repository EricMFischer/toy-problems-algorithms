/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) space
var sumArray = function(array) {
  var max = array[0];
  array.reduce(function (sum, current) {
    sum += current;
    if (sum > max) max = sum;
    if (sum >= 0) return sum;
    else return 0;
  }, 0);
  return max;
};

console.log(sumArray([1, 2, 3])); // => 6
console.log(sumArray([1, 2, 3, -4])); // 6
console.log(sumArray([1, 2, 3, -4, 5])); // 7
console.log(sumArray([4, -1, 5])); // => 8
console.log(sumArray([-6, -1, -4])); // -1