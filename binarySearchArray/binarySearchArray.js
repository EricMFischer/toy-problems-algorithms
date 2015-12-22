/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function(array, element) {
  var midpoint = Math.floor(array.length/2);
  var firstHalf = array.slice(0, midpoint);
  var secondHalf = array.slice(midpoint, array.length);
  var secondHalfFirstValue = array[midpoint];

  if (array[0] === element) {return 0;}
  if (array[array.length-1] === element) {return array.length-1;}
  if (array[midpoint] === element) {return midpoint;}

  if (element === firstHalf[0] || element === secondHalf[0]) {
    return midpoint;
  } else if (element < secondHalfFirstValue) {
    return binarySearch(firstHalf, element);
  } else if (element > secondHalfFirstValue) {
    return binarySearch(secondHalf, element);
  }
}

var findIndex = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4);
console.log(findIndex); // [3]