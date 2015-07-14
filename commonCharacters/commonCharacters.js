/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  var string2Tracker = {};
  for (var i=0; i<string2.length; i++) {
    string2Tracker[string2[i]] = true;
  }
  var answer = '';
  for (var j=0; j<string1.length; j++) {
    if (string2Tracker[string1[j]] === true) {
      answer += string1[j];
    }
  }
  return answer;
};

console.log(commonCharacters('acexivou', 'aegihobu'));