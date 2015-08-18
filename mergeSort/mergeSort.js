/**
 * Implement a function that sorts an array of numbers using the "mergesort" algorithm.
 *
 * Mergesort is an optimized sorting algorithm which is a common choice to implement `sort`
 * methods in standard libraries as an alternative to quicksort or heapsort. (For example,
 * Firefox's Array.sort method uses a tuned mergesort; the WebKit engine used by Chrome and
 * Safari uses quicksort for numeric arrays, and mergesort for arrays of strings.)
 *
 * Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N
 * as a set of N "sublists" of length 1, which are considered to be sorted. Adjacent sublists are then
 * "merged" into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so
 * on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
 * after the first merge, and so on.)
 *
 * This can be implemented using either a recursive ("top-down") or an iterative ("bottom-up") approach.
 *
 * Illustration of an iterative approach:
 *
 *   Initial step: Input array is split into "sorted" sublists
 *   [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]
 *
 *   Merge step: Adjacent sublists are merged into sorted sublists
 *   [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]
 *
 *   Repeat merge step:
 *   [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]
 *
 *   Repeat merge step:
 *   [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]
 *
 *   Done! Return the sorted array:
 *   [1,2,3,4,4,7,9]
 * Illustration of a recursive approach:
 *
 *   1. Split the input array in half
 *   [4, 7, 4, 3, 9, 1, 2] -> [4, 7, 4], [3, 9, 1, 2]
 *
 *   2. Both sides are sorted recursively:
 *   [4, 7, 4] -> [4, 4, 7]
 *   [3, 9, 1, 2] -> [1, 2, 3, 9]
 *
 *   3. Both halves are merged:
 *   [4, 7, 4], [3, 9, 1, 2] -> [1, 2, 3, 4, 4, 7, 9]
 *
 *   Step 2 might seem a bit mystical - how do we sort both sides? The
 *   simple answer is that we use mergesort! After all, mergesort sorts
 *   arrays, right? We can test this on [4, 7, 4] by just following the
 *   steps above but imagining that [4, 7, 4] is the whole array, which
 *   is what happens when you call mergesort on it.
 *
 *   1. Split the input array in half
 *   [4, 7, 4] -> [4], [7, 4]
 *
 *   2. Both sides are sorted recursively:
 *   [4] -> [4]
 *   [7, 4] -> [4, 7]
 *
 *   3. Both halves are merged:
 *   [4], [4, 7] -> [4, 4, 7]
 *
 *   I cheated again by going directly from [7, 4] to [4, 7], but that's
 *   really just:
 *
 *   1. Split the input array in half
 *   [7, 4] -> [7], [4]
 *
 *   2. Both sides are sorted recursively:
 *   [7] -> [7]
 *   [4] -> [4]
 *
 *   3. Both halves are merged:
 *   [7], [4] -> [4, 7]
 *
 *   As you can see, all the work actually gets done in step 3, the merge
 *   step. Everything else is just splitting and recursing.
 *
 *
 * Complexity:
 *   What is the complexity of your algorithm in time and space?
 *   The merge step can be implemented using what is conceptually an insertion sort, and yet its time
 *   complexity is (spoiler alert!) much lower. Why is that?
 *
 *
 * Extra credit:
 *   One of the benefits of mergesort over e.g. quicksort is that it is "stable"; assuming the merge
 *   step is properly implemented, list items with the same value will remain in the same order they were
 *   in in the input. (This is academic in the case of sorting integers, but it is an important consideration
 *   when sorting more complex objects.) Is your implementation a stable sort?
 *
 * Extra credit:
 *   The naive mergesort assumes that the input array is completely unsorted, but in practice even random
 *   data will have "runs" of sorted integers. The "natural mergesort" takes advantage of this by splitting
 *   the input not into sublists of length 1, but into whatever sublists are already sorted in the input.
 *   Implement natural splitting into your mergesort. How much does it improve your average-case runtime?
 *
 */
 // RECURSIVE APPROACH:
 // *   1. Split the input array in half
 // *   [4, 7, 4, 3, 9, 1, 2] -> [4, 7, 4], [3, 9, 1, 2]
 // *
 // *   2. Both sides are sorted recursively:
 // *   [4, 7, 4] -> [4, 4, 7]
 // *   [3, 9, 1, 2] -> [1, 2, 3, 9]
 // *
 // *   3. Both halves are merged:
 // *   [4, 7, 4], [3, 9, 1, 2] -> [1, 2, 3, 4, 4, 7, 9

 // *   1. Split the input array in half
 // *   [7, 4] -> [7], [4]
 // *
 // *   2. Both sides are sorted recursively:
 // *   [7] -> [7]
 // *   [4] -> [4]
 // *
 // *   3. Both halves are merged:
 // *   [7], [4] -> [4, 7]


 // ITERATIVE APPROACH:
 // *   Merge step: Adjacent sublists are merged into sorted sublists
 // *   [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]
 // *
 // *   Repeat merge step:
 // *   [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]

var mergeSort = function(array) {

  var singles = [];
  var makeSingles = function(array) {
    array.forEach(function(item) {
      singles.push([item]);
    });
  }
  makeSingles(array);


  var sortArrays = function(arr) {
    var count = -1;
    if (arr.length === 1) {return arr[0];}
    var result = [];

    for (var i=0; i<arr.length; i+=2) {
      result.push([]); // pushing in one future result array for every 2 compared
      count++;
      var left = arr[i];
      var right = arr[i+1];
      if (!right) {
        result[Math.floor(arr.length/2)].push([]);
        result[Math.floor(arr.length/2)].push(left);
        right = [];
      }

      while (left.length || right.length) {
        if (left[0] === undefined) {
          result[count].push(right[0]);
          right.shift();
        } else if (right[0] === undefined) {
          result[count].push(left[0]);
          left.shift();
        } else if (left[0] > right[0]) {
          result[count].push(right[0]);
          right.shift();
        } else if (left[0] < right[0]) {
          result[count].push(left[0]);
          left.shift();
        }
      }
    }
    return sortArrays(result);
  }
  
  return sortArrays(singles);
}

// var mergeSort = function(array) {

//   for (var i=0; i<array.length; i++) {
//     var subarr = array[i];
//   }
//   // Split input array in half
//   var start = 0;
//   var end = array.length-1;
//   var midIndex = start + Math.floor((end-start) / 2);
//   console.log(midIndex);

//   var array1 = array.slice(start, midIndex+1);
//   var array2 = array.slice(midIndex+1, end+1);

//   return [array1, array2];
// };

// var mergeSort = function(array) {
//   if (array.length <= 1) {return array;}
//   var half = Math.floor(array.length/2);
//   var left = array.slice(0, half);
//   var right = array.slice(half);
//   return merge(mergeSort(left), mergeSort(right)); // splitting is recursive process
// }

// var merge = function(left, right) {
//   var i=0;
//   var j=0;
//   var result = [];
//   while (i < left.length && j < right.length) {
//     if (left[i] < right[i]) {
//       result.push(left[i++]);
//     } else {
//       result.push(right[i++]);
//     }
//   }
//   var remaining = i === left.length ? right.slice(j) : left.slice(i);
//   return result.concat(remaining);
// }

// var mergeSort = function(array) {
//   // Create a number of one-item lists
//   var items = array.length;
//   var arrayOfArrays = [];
//   array.forEach(function(item) {
//     arrayOfArrays.push([item]);
//   });
//   console.log(arrayOfArrays);
//   var result = [];
//   var merge = function(arrayOfArrays) {
//     for (var i=0; i<arrayOfArrays.length; i+2) {
//       var left = arrayOfArrays[i][0];
//       var right = arrayOfArrays[i+1][0];
//       if (!right) {result.push(left);}
//       if (left < right) {
//         result.push([left, right]);
//       } else {
//         result.push([right, left]);
//       }
//     }
//   }
//   merge(arrayOfArrays);

//   console.log(result);
// };

console.log(mergeSort([1,3,4,2]));
console.log(mergeSort([4, 7, 4, 3, 9, 1, 2]));