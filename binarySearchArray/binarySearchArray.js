/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function(arr, element) {
  var sub = function(lowIndex, highIndex) {
    if (lowIndex === highIndex) {return null;}
    var mid = Math.floor((highIndex - lowIndex) / 2) + lowIndex;
    if (element === arr[mid]) {
      return mid;
    } else if (element < arr[mid]) {
      return sub(lowIndex, mid);
    } else {
      return sub(mid, highIndex);
    }
  }
  return sub(0, arr.length);
}

var findIndex = binarySearch([1, 2, 3, 4], 2)
console.log(findIndex); // [3]