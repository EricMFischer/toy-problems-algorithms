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

var commonChar = function(str1, str2) {
  var result = '';
  var str1obj = makeLettersObj(str1);
  var str2obj = makeLettersObj(str2);
  for (var i=0; i<str1.length; i++) {
    var char = str1[i];
    if (str1obj[char] && str2obj[char] && result.indexOf(char) === -1) {
      result += char
    }
  }
  return result;
}

var makeLettersObj = function (string) {
  var lettersArr = string.split('');
  return lettersArr.reduce(function(prev, char) {
    if (char.match(/[a-z]/i)) {prev[char] = true;}
    return prev;
  }, {});
}
console.log(commonChar('acexuviu', 'aeghibu'));