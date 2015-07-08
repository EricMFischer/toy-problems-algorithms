/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var array = string.split("");
  for (var i=0; i<array.length; i++) {
    if (array[i] !== array[i+1]) {
      return array[i+1];
    }
  }
};


var result = firstNonRepeatedCharacter('AACBDB');
console.log(result); // 'C'