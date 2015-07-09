/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
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
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/


Array.prototype.isSubsetOf = function(array){
  // eliminate duplicates in this
  // this.sort();
  // for (var i = 0; i < this.length; i++) {
  //   if (this[i] === this[i+1]) {
  //     this.splice(this[i+1], 1);
  //   }
  // }
  // console.log(this);

  // iterate through input array
  for (var i = 0; i < this.length; i++) {
    if (array.indexOf(this[i]) === -1) {
      return false;
    }
    return true;
  }
};


var b = ['merge','reset','reset'];
console.log(b.isSubsetOf(['reset','merge','add','commit'])); // true 