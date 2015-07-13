/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.

  Array.prototype.isSubsetOf = function(array){
    // iterate through input array
    for (var i = 0; i < this.length; i++) {
      if (array.indexOf(this[i]) === -1) {
        return false;
      }
      return true;
    }
  };
*/

Array.prototype.isSubsetOf = function(array) {
  return isSubsetObjs(objectify(this), objectify(array));
}

var isSubsetObjs = function(obj1, obj2) {
  for (var key in obj1) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

// for edge case of duplicates, make an object with keys set to true where appropriate
var objectify = function(array) {
  // reduce is a good way to build up an empty object
  return array.reduce(function(obj, item) {
    obj[item] = true;
    return obj; // return what you just modified (so you can keep chaining)
  }, {});
}

// var b = ['merge','reset','reset'];
// console.log(b.isSubsetOf(['reset','merge','add','commit'])); // true 