/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function (array, target, left, right, midIndex) {
  var left = left || 0;
  var right = right || arrLength-1;
  var midIndex = midIndex || Math.floor((left + right)/2);
  //var leftSide = array.slice( 0, midIndex );
  //var rightSide = array.slice( midIndex, arrLength );

  // if (array[0] === target) {return 0;}
  // if (array[array.length-1] === target) {return array.length-1;}
  if (array[midIndex] === target) {return midIndex;}
  
  if (target < array[midIndex]) {
    right = midIndex - 1;
    return binarySearch(array, target, left, right);

  } else if (target > array[midIndex]) {
    left = midIndex + 1;
    return binarySearch(array, target, left, right);

  } else {
    return null;
  }

};

var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // [3]