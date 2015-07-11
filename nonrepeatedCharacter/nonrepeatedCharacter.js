/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

// var firstNonRepeatedCharacter = function(string) {
//   var array = string.split("");
//   for (var i=0; i<array.length; i++) {
//     if (array[i] !== array[i+1]) {
//       return array[i+1];
//     }
//   }
// };


var firstNonRepeatedCharacter = function(string) {
  var chars = {};
  for (var i = 0; i < string.length; i++) {
    character = string[i];
    if (!chars[character]) {chars[character] = 1;}
    else {chars[character]++;}
  }

  for (var i=0; i < string.length; i++) {
    character = string[i];
    if (chars[character] === 1) {return character;}
  }
  return null;
}

// Both for loops are linear for a time complexity of 2n --> n. (Nested for loops (worse) create
// a time complexity of n^2.)

var result = firstNonRepeatedCharacter('CBAB');
console.log(result);