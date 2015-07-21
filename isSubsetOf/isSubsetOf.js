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
*/

Array.prototype.isSubsetOf = function(array) {
  return subsetTruth(objectify(this), objectify(array));
}

var subsetTruth = function(calledOnObj, inputObj) {
  for (var key in calledOnObj) {
    if (!inputObj.hasOwnProperty(key)) {return false;}
  }
  return true;
}

var objectify = function(array) {
  return array.reduce(function(obj, item) {
    obj[item] = true;
    return obj;
  }, {});
}

var b = ['merge','reset','reset']
console.log(b.isSubsetOf(['reset','merge','add','commit'])) // true
