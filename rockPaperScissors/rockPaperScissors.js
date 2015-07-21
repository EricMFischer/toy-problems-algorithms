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

var rockPaperScissors = function(n) {
  var rounds = n || 3;
  var combinations = [];
  var choices = ['rock', 'paper', 'scissors'];
  var game = [];

  var subroutine = function(rounds) {
    if (rounds === 0) {
      combinations.push(game.slice());
      return;
    } else {
      for (var i = 0; i < 3; i++) {
        game.push(choices[i]);
        subroutine(rounds-1);
        game.pop();
      }
    }
  }
  subroutine(rounds);

  return combinations;
}

console.log(rockPaperScissors(3));