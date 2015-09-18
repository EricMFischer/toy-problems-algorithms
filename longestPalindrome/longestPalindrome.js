/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  var longestPalindrome = '';
  var palindrome;
  var findPalindrome = function(string) {
    for (var i=0; i<string.length; i++) {
      var letter = string[i];
      var numAway = 1;
      palindrome = string[i];
      while (string[i+numAway] === string[i-numAway]) {
        palindrome += string[i + numAway];
        palindrome = string[i-numAway] + palindrome;
        numAway++;
      }
      if (palindrome.length > longestPalindrome.length) {
        longestPalindrome = palindrome;
      }
    } 

    for (var i=0; i<string.length; i++) { // for even palindromes
      var letter = string[i];
      var nextLetter = string[i+1];
      var numAway = 1;

      if (letter === nextLetter) {
        palindrome = letter + nextLetter;
        while (string[i+numAway+1] === string[i-numAway]) {
          palindrome += string[i+numAway+1];
          palindrome = string[i-numAway] + palindrome;
          numAway++;
        }
        if (palindrome.length > longestPalindrome.length) {
          longestPalindrome = palindrome;
        }
      }
    }

  }; // end of func
  findPalindrome(string);

  return longestPalindrome;
};



// -------- TEST --------- //

console.log(longestPalindrome("My dad is a racecar athlete that does good deeds")); // 'a racecar a'
console.log(longestPalindrome("I like to perform good deeds")); // 'deed'