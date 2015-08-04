/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  if (number % 1 === 0) {return number + '/1';}
  else {
    var numerator;
    var denominator;
    if (number.toString()[0] === 0) {
      numerator = (number/1).toString()[number.length-1];
      demoninator = Math.floor(1 / number);
    } else {
      demoninator = 1 / number;
    }
    return numerator + '/' + demoninator;
  }
};

 // number = 0.4
console.log(1/0.4);
console.log(toFraction(0.4)); // 2/5


// // number = 2.5
// console.log(1/2.5); // take result's last digit and put it in denominator, put 1 in numerator
// console.log(toFraction(2.5));