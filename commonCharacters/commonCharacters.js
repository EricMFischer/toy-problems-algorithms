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


var commonCharacters = function(str1, str2) {
  var str1obj = objectify(str1);
  var str2obj = objectify(str2);
  var string = '';
  for (var key in str1obj) {
    if (str2obj[key] === true) {
      string += key;
    }
  }
  return string;
}

var objectify = function(string) {
  return string.split('').reduce(function(obj, chara) {
    if (chara.match(/[a-z]/i)) {obj[chara] = true;}
    return obj;
  }, {});
}

console.log(commonCharacters('acexivou', 'aegihobu'));