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
var deepEquals = function(apple, orange){
  var applePropsArr = Object.keys(apple);
  var orangePropsArr = Object.keys(orange);

  if (applePropsArr.length !== orangePropsArr.length) {
    return false;
  }
  for (var i=0; i<applePropsArr.length; i++) {
    var key = applePropsArr[i];
    if (apple[key] !== orange[key]) {
      return false;
    }
  }
  return true;
};
// currently not accounting for keys holding objects instead of just straight-up values...

console.log(deepEquals( {a:1, b: {c:3}},{a:1, b: {c:3}} )); // should be true

console.log(deepEquals( {a:1, b: {c:5}},{a:1, b: {c:6}} )); // should be false