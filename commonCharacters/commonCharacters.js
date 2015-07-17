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

// var commonCharacters = function(string1, string2) {
//   var string2Tracker = {};
//   for (var i=0; i<string2.length; i++) {
//     string2Tracker[string2[i]] = true;
//   }
//   var answer = '';
//   for (var j=0; j<string1.length; j++) {
//     if (string2Tracker[string1[j]] === true) {
//       string2Tracker[string1[j]] === false;
//       answer += string1[j];
//     }
//   }
//   return answer;
// };

var commonCharacters = function(str1, str2) {
  var common = intersection(objectify(str1), objectify(str2));
    return str1.split("").reduce(function(result, chara) {
      if (common[chara]) {result += chara;}
    }, "");
}

var intersection = function(set1, set2) {
  return Object.keys(set1).reduce(function(out, val) {
      if (val in set2) {out[val] = true;}
      return out;
  }, {});
}

var objectify = function(str) {
  return str.split('').reduce(function(obj, chara) {
    if (chara.match(/[a-z]/i)) {obj[chara] = true;}
    return obj;
  }, {});
}

console.log(commonCharacters('acexivou', 'aegihobu'));