/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {

  // add an item to the top of the stack
  this.push = function(){
  };

  // remove an item from the top of the stack
  this.pop = function(){
  };

  // return the number of items in the stack
  this.size = function(){
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
  this.enqueue = function(){
    // TODO: implement `enqueue`
  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    // TODO: implement `dequeue`
  };

  // should return the number of items in the queue
  this.size = function(){
    // TODO: implement `size`
  };
};
