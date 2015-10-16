/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(key, value) { // everything has to do with the KEY, not value!
    var pseudokey = getIndexBelowMaxForKey(key, storageLimit);

    // var bucket = storage[pseudokey];
    // if (!bucket) {
    //   bucket = [];
    //   storage[pseudokey] = bucket;
    // }
    storage[pseduokey] = storage[pseudokey] || [];
    var bucket = storage[pseudokey];

    var replaced = false;
    for (var i=0; i<bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === key) { // once we're in the bucket, we don't care about the pseudokey
        tuple[1] = value;
        replaced = true;
      }
    }

    if (!replaced) {
      bucket.push([key, value]);
      size++;
    }

    if (size >= 0.75 * storageLimit) {
      
    }

  };

  result.retrieve = function(key) {
    var pseudokey = getIndexBelowMaxForKey(key, storageLimit);

    var bucket = storage[pseudokey];
    if (!bucket) {
      return null;
    }
    for (var i=0; i<bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }
    return null;
  };

  result.remove = function(key) {
    var pseudokey = getIndexBelowMaxForKey(key, storageLimit);

    var bucket = storage[pseudokey];
    if (!bucket) {
      return null;
    }
    for (var i=0; i<bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1); // splice out the current (i) tuple
        size--;
        if (size < 0.25 * storageLimit) {
          storageLimit = storageLimit / 2;
        }
        return tuple[1];
      }
    }
    return null; // return null if key not found in bucket
  };

  result.resize = function(newSize) {
    var oldStorage = this.storage; // holding onto the old hashtable
    storageLimit = newSize; // reset all 3 things at the top to initial values
    storage = []; // deletes everything in the old hashtable
    size = 0;
    oldStorage.forEach(function(pairs) {
      pairs.forEach(function(pair) {
        this.insert(pair[0], pair[1]);
      })
    })
  }

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
