/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  this._storage = {};
  this._size = 0;

  // add an item to the top of the stack
  this.push = function(item) {
    this._storage[this._size] = item;
    this._size++;
  };

  // remove an item from the top of the stack
  this.pop = function() {
    this._size--;
    var result = this._storage[this._size];
    delete this._storage[this._size];
    return result;
  };

  // return the number of items in the stack
  this.size = function() {
    return this._size;
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(value) {
    if (inbox.size() === 0 && outbox.size() === 0) {
      outbox.push(value);
    } else {
      inbox.push(value);
    }
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    if (outbox.size() === 0) {
      for (var i=0; i<inbox.size(); i++) {
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
  };

  // should return the number of items in the queue
  this.size = function() {
    return inbox.size() + outbox.size();
  };
};

var stack = new Stack();
stack.push(3);
stack.push(5);
stack.pop();
console.log(stack);

var queue = new Queue();
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
console.log(queue);