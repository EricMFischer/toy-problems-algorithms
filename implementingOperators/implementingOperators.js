// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


var multiply = function(x, y) {
  // TODO: should return the product of x * y
  if (y === 0) {return 0;}
  if (y === 1) {return x;}
  var answer = 0;
  if (y > 0) {
    while (y !== 0) {
      answer = answer + x;
      y--;
    } 
  }
  if (y < 0) {
    while (y !== 0) {
      answer = answer - x;
      y++;
    } 
  }
  return answer;
};

var divide = function(x, y) {
  // TODO: should return the product of x * y
  
};

var modulo = function(x, y) {
  // TODO: should return the remainder of x / y
};

  // TODO: should return the remainder of x / y

console.log(multiply(0, -1));
console.log(divide(24, 6));
console.log(modulo());