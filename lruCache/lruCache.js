/*
 * Design and implement an LRU, or Least Recently Used, cache.
 *
 * An LRU cache gives O(1) get(key) and set(key, val) operations,
 * much like a hashtable, but once it reaches its limit for stored
 * number of items, it removes the least recently used (i.e. the oldest
 * by get-date) item from the cache in O(1) time.
 *
 * For instance:
 *
 * var cache = new LRUCache(3); // limit of 3 items
 * cache.set("item1", 1);
 * cache.set("item2", 2);
 * cache.set("item3", 3);
 * cache.set("item4", 4);
 *
 * cache.get("item3") //=> 3
 * cache.get("item2") //=> 2
 * // item1 was removed because it was the oldest item by insertion/usage
 * cache.get("item1") //=> null
 *
 * // item4 is removed to make room, because it is the oldest by usage,
 * // which takes priority.
 * cache.set("item5", 5);
 *
 * // item3 is also removed, because it was retrieved before item2 was
 * // last retrieved.
 * cache.set("item6", 6);
 *
 * You will need a doubly-linked list (provided).
 */



var LRUCache = function (limit) {
  this.size = 0; // current size of cache
  this.limit = limit; // # of items cache can hold
  this.map = {};
  this.head = null;
  this.tail = null;
};

var LRUCacheItem = function (key, value, node) {
  this.val = val || null;
  this.key = key || null;
  this.node = node || null;
};

LRUCache.prototype.size = function () {
};

// retrieve a single entry from cache
LRUCache.prototype.get = function(key) {
  if (!(key in this._map)) {
    return undefined;
  }
  var item = this._map[key];
  this._promote(item.node);
  return item.val;
}
// LRUCache.prototype.get = function (key) { // get and register use of key. return value of key
//   if (this.map[key]) {
//     var value = this.map[key].value;
//     var node = LRUCacheItem(key, value);
//     this.remove(key);
//     this.setHead(node);
//     return value;
//   } else {
//     console.log('Key ' + key + ' does not exist in cache.');
//   }
// };

// adds new value to cache. overwrite entry if it already exists
// LRUCache.prototype.set = function (key, val) {
//   var node = LRUCacheItem(key, value);
//   if (this.map[key]) {
//     this.map[key].value = node.value;
//     this.remove(node.key);
//   } else {
//     if (this.size >= this.limit) {
//       delete this.map[this.tail.key];
//       this.size--;
//       this.tail = this.tail.prev;
//       this.tail.next = null;
//     }
//   }
//   this.setHead(node);
// };
LRUCache.prototype._full = function() {
  return this._size >= this._limit;
}

._prune = function() {
  var oldest = this._priority.pop();
  // return last item from LRU cache

}

LRUCache.prototype.set = function (key, val) {
  if (this._map.hasOwnProperty(key)) { // key is present
    // update(key);
    // promote(key);
    item = this._map[key];
    item.val = val;
    this._promote(item.node);
  } else {
    if (!this._full()) { // cache is not full
      // add(key);
      // promote(key);
      item = new LRUCacheItem(val, key);
      item.node = this._priority.unshift(item);
      this._map[key] = item;
    } else if (this._full()) { // cache is full
      // prune(cache);
      // add(key);
      // promote(key);
      this._prune(); // decrement size
      item = new LRUCacheItem(val, key);
      item.node = this._priority.unshift(item);
      this._map[key] = item;
      this._size += 1; // increment size
    }
  }
};



var List = function () {
  this.head = null;
  this.tail = null;
};

var ListNode = function (prev, val, next) {
  this.prev = prev || null;
  this.val = val;
  this.next = next || null;
};









// Insert at the head of the list.
List.prototype.unshift = function (val) {
  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = new ListNode(null, val, null);
  // Not empty list.
  } else {
    this.head = new ListNode(null, val, this.head);
    this.head.next.prev = this.head;
  }

  return this.head;
};

// Delete at the head of the list.
List.prototype.shift = function () {
  // Empty list
  if (this.head === null && this.tail === null) {
    return null;
  // Not empty list.
  } else {
    var head = this.head;
    this.head = this.head.next;
    head.delete();
    return head.val;
  }
};

// Insert at the end of the list.
List.prototype.push = function (val) {
  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = new ListNode(null, val, null);
  // Not empty list.
  } else {
    this.tail = new ListNode(this.tail, val, null);
    this.tail.prev.next = this.tail;
  }

  return this.tail;
};

// Delete at the end of the list.
List.prototype.pop = function () {
  // Empty list
  if (this.head === null && this.tail === null) {
    return null;
  // Not empty list.
  } else {
    var tail = this.tail;
    this.tail = this.tail.prev;
    tail.delete();
    return tail.val;
  }
};

// Move a node to the front of the List
List.prototype.moveToFront = function (node) {
  if (node === this.tail) {
    this.pop();
  } else if (node === this.head) {
    return;
  } else {
    node.delete();
  }

  node.prev = node.next = null;

  // Don't delegate to shift, since we want to keep the same
  // object.

  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = node;
  // At least one node.
  } else {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }
};

// Move a node to the end of the List
List.prototype.moveToEnd = function (node) {
  if (node === this.head) {
    this.shift();
  } else if (node === this.tail) {
    return;
  } else {
    node.delete();
  }

  // Don't delegate to push, since we want to keep the same
  // object.

  node.prev = node.next = null;

  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = node;
  // At least one node.
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
};

ListNode.prototype.delete = function () {
  if (this.prev) { this.prev.next = this.next; }
  if (this.next) { this.next.prev = this.prev; }
};

