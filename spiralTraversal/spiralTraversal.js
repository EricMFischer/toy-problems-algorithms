/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3,1,2,3],
      [4,5,6,4,5,6],
      [7,8,9,7,8,9],
      [1,2,3,1,2,3],
      [4,5,6,4,5,6],
      [7,8,9,7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var rotateMatrixCounterClockwise = function(matrix) {
  var answer = [];
  while (matrix[0].length>0) {
    var oneArr = [];
    for (var i=0; i<matrix.length; i++) {
      var lastOfRow = matrix[i].pop();
      oneArr.push(lastOfRow);
    }
    answer.push(oneArr);
  }
  return answer;
}

var spiralTraversal = function(matrix, result) {
  var result = result || [];
  if (matrix.length === 0) {return;}
  var lengthOfFirstRow = matrix[0].length;
  for (var i=0; i<lengthOfFirstRow; i++) {
    var itemInRow = matrix[0].shift();
    result.push(itemInRow);
  }
  matrix.shift(); // shift off the now-empty first array
  if (matrix[0]) {
    matrix = rotateMatrixCounterClockwise(matrix);
  }
  spiralTraversal(matrix, result);
  return result;
};

var matrix1 = [
  [1,2,3,1,2,3],
  [4,5,6,4,5,6],
  [7,8,9,7,8,9],
  [1,2,3,1,2,3],
  [4,5,6,4,5,6],
  [7,8,9,7,8,9]
];
var matrix2 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

var spiralTraversal1 = spiralTraversal(matrix1);
var spiralTraversal2 = spiralTraversal(matrix2);
console.log('1', spiralTraversal1);
console.log('2', spiralTraversal2);
