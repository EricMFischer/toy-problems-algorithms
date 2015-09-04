/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};



Number.prototype.toEnglish = function(inner) {
  inner = inner || false;
  if (this < 0) {return "negative " + num.toEnglish();}
  if (numbersToWords.hasOwnProperty(this)) {
    return numbersToWords[this];
  } else if (numbersToPlace.hasOwnProperty(this)) {
    if (!inner) {
      return 'one ' + numbersToPlace[this];
    } else {
      return numbersToPlace[this];
    }
  } else if (this < 100) {
    var base = Math.floor(this / 10) * 10; // 90
    return base.toEnglish(true) + '-' + (this - base).toEnglish(true);
  }

  var zeroes = Math.floor(Math.log10(this)); // 78,193,512 --> zeroes is 7
  // console.log(zeroes);
  var place = Math.pow(10, zeroes);

  if (zeroes >=4 && zeroes % 3 > 0) {
    place = Math.pow(10, Math.floor(zeroes / 3) * 3);
  }
  // console.log(place); // 1000000 (1 million)

  var digit = Math.floor(this / place); // 78
  // console.log(digit);
  var used = digit * place; // 78,000,000
  // console.log(used);
  var remaining = this - used; // 193512
  // console.log(remaining);

  return digit.toEnglish(true) + ' ' + place.toEnglish(true) + ' ' + remaining.toEnglish(true);
}




// Number.prototype.toEnglish = function () {
//   var num = Number(this);

//   if (numbersToWords[num]) {return numbersToWords[num];}
//   if (num < 0) {return "negative" + num.toEnglish();}

//   var numsToPlaceArr = Object.keys(numbersToPlace);
//   var numsToPlaceLengths = [];
//   for (var i=0; i<numsToPlaceArr.length; i++) {
//     numsToPlaceLengths.push(numsToPlaceArr[i].length);
//   }
//   console.log(numsToPlaceLengths);

//   var numString = num.toString();
//   for (var i=0; i<numsToPlaceLengths; i++) {
//     var placeLength = numsToPlaceLengths[i];
//     if (numString.length === placeLength) {
//       var firstDigit = numString[0]; // 5
//       var firstWord = numbersToWords[firstDigit]; // five
//     }
//   }

// }

  


console.log((78).toEnglish()); // > "seven"
console.log((1000000).toEnglish()); // > "ninety-four"
console.log((193512).toEnglish()); // > "five hundred seventy-five"
// console.log((78193512).toEnglish()); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
