/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

var characterFrequency = function(str) {
  var tracker = {};
  for (var i=0; i<str.length; i++) {
    var letter = str[i];
    if (!tracker[letter]) {
      tracker[letter] = 1;
    } else {
      tracker[letter]++;
    }
  }

  var answer = [];
  for (letter in tracker) {
    answer.push([letter, tracker[letter]]);
  }
  answer.sort(function(a,b) {return b[1] - a[1]}); // sorts in descending order by frequency
  return answer;
};

console.log(characterFrequency('mississippi'));