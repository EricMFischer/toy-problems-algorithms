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

var longestRun = function(str) {
  var indices = [0,0];

  var streakFinder = function(str) {
    var streak = [];
    for (var i=0; i<str.length; i++) {
      if (str[i] === str[i+1]) {
        streak.push(i, i+1);
      }
      var start = streak[0];
      var end = streak[streak.length-1];
      if (end - start > indices[1] - indices[0]) {
        indices[0] = start;
        indices[1] = end;
        streak = [streak[0]]; // so that the start value is preserved
      } else {
        streak = [];
      }
    }
  }
  streakFinder(str);

  return indices;
}

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

var str = randomString(40);
console.log(str);
var run = longestRun(str);
console.log(run);