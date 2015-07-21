/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

// NOTE: the deep equality solution would return "true" if we input any two functions as input. 
// If we checked whether a function was an instance of Object, it would return us true:
// i.e., Function instanceof Object; //true

// Hence, the solution would continue onwards to get the keys from these functions. 
// If these input functions do not contain user added properties, using Object.keys 
// on them would give us an empty array for both input functions.
// i.e., both appleKeys and orangeKeys would be [ ], with length = 0.

// Finally, the solution would return true after checking that appleKeys and orangeKeys both have the same length of 0.

var deepEquals = function(apple, orange){
  // if apple and orange are identical objects, return true
  if (apple === orange) {return true;}

  // if either apple or orange are not given, return false
  if (apple & !orange || orange & !apple) {return false;}
  // if either apple or orange are not objects, return false
  if (!(apple instanceof Object) || !(orange instanceof Object)) {return false;}


  var appleKeys = Object.keys(apple);
  var orangeKeys = Object.keys(orange);
  if (appleKeys.length !== orangeKeys.length) {return false;}
  // if they're empty objects, they're equal, so return true
  if (appleKeys.length === 0) {return true;}
  
  for (var i=0; i<appleKeys.length; i++) {
    var key = appleKeys[i];
    // if a recursive call to deepEquals, for apple and orange's values at their keys, is NOT true, return false
    if (!deepEquals(apple[key], orange[key])) {return false;}
  }
  
  return true;
};

console.log(deepEquals( {a:1, b: {c:3}},{a:1, b: {c:3}} )); // should be true
console.log(deepEquals( {a:1, b: {c:5}},{a:1, b: {c:6}} )); // should be false