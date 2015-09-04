/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  var tracker = {};
  for (var i=0; i<string.length; i++) {
    var letter = string[i];
    if (!tracker[letter]) {
      tracker[letter] = 1;
    } else {
      tracker[letter]++;
    }
  }

  var array = [];
  for (var key in tracker) {
    array.push([key, tracker[key]]);
  }
  array.sort(function(a,b) {return b[1] - a[1]});

  // for (var i=0; i<array.length; i++) {
  //   if (array[i][1] === array[i+1][1]) {
      
  //   }
  // }
  return array;
};

console.log(characterFrequency('popopo'));


// same number of p's and o's, sort ascending by character
// result = characterFrequency('popopo');
// result[0][0].should.equal('o');
// result[1][0].should.eql('p');

// // more p's and than o's, sort by frequency
// result = characterFrequency('popopop');
// result[0][0].should.equal('p');
// result[1][0].should.eql('o'); 