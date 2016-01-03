/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(str) {
  var uniqOutput = {};
  var anagram = function(ana, restOfStr) {
    if (restOfStr === '') {
      uniqOutput[ana] = true;
      return;
    }
    for (var i=0; i<restOfStr.length; i++) {
      // console.log(ana + restOfStr[i], '|', restOfStr.slice(0,i) + restOfStr.slice(i+1));
      anagram(ana + restOfStr[i], restOfStr.slice(0,i) + restOfStr.slice(i+1));
    }
  }
  anagram('', str);
  return Object.keys(uniqOutput);
}

var anagrams = allAnagrams('abc');
console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]