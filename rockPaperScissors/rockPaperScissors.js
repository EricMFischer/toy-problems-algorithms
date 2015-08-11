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

When recurse runs for the first time, we can treat line 30 as a "master for loop." This loop determines how many branches we'll make initially in our decision tree.

Rounds is what determines how many levels we go down through recursion.
*/

var rockPaperScissors = function(num) {
  var rounds = num || 3;
  var combos = [];
  var game = [];
  var choices = ['rock', 'paper', 'scissors'];

  var recurse = function(rounds) {
    if (rounds === 0) {
      combos.push(game.slice());
      return;
    } else {
      for (var i=0; i<choices.length; i++) {
        game.push(choices[i]);
        recurse(rounds - 1);
        game.pop();
      }
    }
  }
  recurse(num);

  return combos;
}

console.log(rockPaperScissors(3));
