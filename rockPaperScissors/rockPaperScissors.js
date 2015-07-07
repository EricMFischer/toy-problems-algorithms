/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (n) {
  var rounds = n;
  var combinations = [];
  var choices = ['rock', 'paper', 'scissors'];

  var recurse = function(roundsLeft, handPlayed) {
    if (roundsLeft === 0) {
      combinations.push(handPlayed);
      return;
    } else {
      for (var i=0; i<choices.length; i++) {
        var current = choices[i];
        recurse(roundsLeft - 1, handPlayed.concat(current));

      }
    }
  };
  recurse(rounds, []);

  return combinations;
}

console.log(rockPaperScissors(3));

