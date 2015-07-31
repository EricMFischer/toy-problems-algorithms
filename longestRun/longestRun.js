/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  var longestStreaks = [];
  var count = 1; // count starts at 1 to account for first letter of streak
  var highestStreak = 0;
  var theLetter = '';

  for (var i=0; i<string.length; i++) {
    var letter = string[i];
    var nextLetter = string[i+1];
    if (letter === nextLetter) {
      count++;
      longestStreaks.push(letter); // longestStreaks will then have 'a,a' for a streak of 'a,a,a' for example
    } else {
      if (count > highestStreak) {highestStreak = count; theLetter += letter}
      count = 0;
    }
  }
  var indices = [];
  for (var i=0; i<string.length; i++) {
    var focusLetter = theLetter[theLetter.length - 1];
    if (string[i] === focusLetter) {
      if (string[i] === string[i + highestStreak - 1]) {
        indices.push(string.indexOf(string[i]));
        indices.push(string.indexOf(string[i + highestStreak - 1]));
      }
    }
  }

  return indices;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for(var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

var str = randomString(20);
console.log(str);
var run = longestRun(str);
console.log(run);