/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  this.tail = null;
  this.head = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(value) {
  var newTail = this.makeNode(value);

  if (!this.head) { // 1st case: if there's no head, set the head to this node too
    this.head = newTail;
  }
  if (this.tail) {
    this.tail.next = newTail;
  }

  this.tail = newTail; // do this regardless
};

LinkedList.prototype.removeHead = function() {
  if (!this.head) {return null;}
  else {
    var currentHead = this.head; // store head before you change it
    this.head = this.head.next;
  }
  return currentHead.value;
};

LinkedList.prototype.contains = function(value) {
  var node = this.head;
  while (node) {
    if (node.value === value) {return true;}
    node = node.next;
  }
  return false;
};

LinkedList.prototype.makeNode = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};


var list = new LinkedList();
console.log(
list.tail,         //yields 'null'
list.addToTail(4),
list.addToTail(5),
list.head.value,   //yields '4'
list.contains(5),  //yields 'true'
list.contains(6),  //yields 'false'
list.removeHead(), //yields '4'
list.tail.value   //yields '5'
);