/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */


var powerSet = function(str){
  str = str || ''; // take care of edge case
  var charArray = str.split('');
  var charLength = charArray.length;
  var letters = {}; // tracks all unique values
  var results = [''];

  for (var i=0; i<charLength; i++) {
    letters[i] = charArray[i];
  }

  var subroutine = function(charArray, lengthOfOutput) {
    for (var i=0; i<charArray.length; i++) {
      var initialBranch = charArray[i];
      oneResult.push(initialBranch);
      subroutine(charArray, lengthOfOutput + 1);
      oneResult.pop();
    }
  }
  subroutine(charArray, 0);

  // sort my results
  // eliminate duplicates
  return results;
}

console.log(powerSet('abc'));




