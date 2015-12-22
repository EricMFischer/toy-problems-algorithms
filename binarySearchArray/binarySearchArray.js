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
  var binary = function(start, end) {
    if (start === end) {return 0;} // if array is empty
    var midIndex = start + Math.floor((end - start) / 2); // need to add start to keep midIndex intact

    if (element === array[midIndex]) {
      return midIndex;
    } else if (element > array[midIndex]) {
      return binary(midIndex, end);
    } else if (element < array[midIndex]) {
      return binary(start, midIndex);
    }
  }
  return binary(0, array.length);
}


//   var binary = function(array, element) {
//     var midIndex = Math.floor(array.length/2);
//     var leftSide = array.slice(0, midIndex); // [1,2]
//     var rightSide = array.slice(midIndex, array.length); // [3,4,5]

//     if (array[0] === element) {return 0;}
//     if (array[array.length-1] === element) {return array.length-1;}
//     if (array[midIndex] === element) {return midIndex;}
    
//     if (element > array[midIndex]) { // search rightSide
//       return binary(rightSide, element);
//     } else if (element < array[midIndex]) { //search leftSide
//       return binary(leftSide, element);
//     }
//   }

//   return binary(array, element);
// }


// Refactored with subroutine
// var binarySearch = function (array, target, left, right) {
//   var left = left || 0;
//   var right = right || array.length-1;
//   var midIndex = Math.floor((left + right)/2);
//   //var leftSide = array.slice( 0, midIndex );
//   //var rightSide = array.slice( midIndex, arrLength );

//   // if (array[0] === target) {return 0;}
//   // if (array[array.length-1] === target) {return array.length-1;}
//   if (array[midIndex] === target) {return midIndex;}
  
//   if (target < array[midIndex]) {
//     right = midIndex - 1;
//     return binarySearch(array, target, left, right);

//   } else if (target > array[midIndex]) {
//     left = midIndex + 1;
//     return binarySearch(array, target, left, right);

//   } else {
//     return null;
//   }
// };

var findIndex = binarySearch([1, 2, 3, 4, 5], 4);
console.log(findIndex); // [3]

