
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral){
  var result = 0;

  for (var i=0; i<romanNumeral.length; i++) {
    var symbolVal = DIGIT_VALUES[romanNumeral[i]];
    var nextSymbolVal = DIGIT_VALUES[romanNumeral[i+1]];

    if (symbolVal === undefined) {
      return null;
    } else if (i === romanNumeral.length - 1) {
      result += symbolVal;
      return result;
    } else if (symbolVal < nextSymbolVal) {
      result -= symbolVal;
    } else {
      result += symbolVal;
    }
  }
};


console.log(translateRomanNumeral('IV'));

  // var itsInvalid = function(romanNumeral) {
  //   var result = false;
  //   for (var i=0; i<romanNumeral.length; i++) {
  //     var symbol = romanNumeral[i];
  //     if (!DIGIT_VALUES.hasOwnProperty(symbol)) {
  //       result = true;
  //     }
  //   }
  //   return result;
  // }
  // if (itsInvalid(romanNumeral)) {return null;}

  // var additionOperation = function(romanNumeral) {
  //   var result = true;
  //   for (var i=0; i<romanNumeral.length; i++) {
      
  //     if (DIGIT_VALUES[symbol] < DIGIT_VALUES[nextSymbol]) {
  //       result = false;
  //     }
  //   } 
  //   return result;
  // }

  // var itIsAddition = additionOperation(romanNumeral);
  // var answer = 0;
  // if (itIsAddition) {
  //   for (var i=0; i<romanNumeral.length; i++) {
  //     var symbol = romanNumeral[i];
  //     answer += DIGIT_VALUES[symbol];
  //   }
  // } else { // if it's a subtractive operation
  //   var lastSymbol = romanNumeral[romanNumeral.length-1];
  //   answer += DIGIT_VALUES[lastSymbol];
  //   for (var i=romanNumeral.length-2; i>=0; i--) {
  //     var symbol = romanNumeral[i];
  //     answer -= DIGIT_VALUES[symbol];
  //   }
  // }

  // return answer;
