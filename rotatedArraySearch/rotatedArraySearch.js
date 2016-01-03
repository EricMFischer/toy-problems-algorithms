/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (arr, target) {
  
  var sub = function(lowIndex, highIndex) {

  }
  sub(0, arr.length);
  
  var midpoint = Math.floor(arr.length / 2);
  console.log(midpoint, 'midpoint');
  var indexOfTarget = null;

  if (leftNum < middleNum) {
    // 1st half (at least) of array is in increasing order
    if (target > leftNum)
    arrArraySearch(arr.slice(0, midIndex))
  }

  if (rightNum > middleNum) {
    // 2nd half (at least) of array is in increasing order
    if (target < rightNum && target > leftNum) {
      // target is in this part of the array

    }
  }

  return indexOfTarget;
};

console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2], 2));