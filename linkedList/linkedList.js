/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// var LinkedList = function(){
//   this.head = null;
//   this.tail = null;
// };

// //write methods here!

// LinkedList.prototype.addToTail = function(value) {
//   var newTail = this.makeNode(value);
//   if (!this.head) {this.head = newTail;}
//   else {this.tail.next = newTail;}
//   this.tail = newTail;
// };

// LinkedList.prototype.removeHead = function() {
//   if (!this.head) {return null;}
//   var currentHead = this.head; // store head before you change it
//   this.head = this.head.next;
//   return currentHead.value;
// };

// LinkedList.prototype.contains = function(value) {
//   var node = this.head;
//   while (node) {
//     if (node.value === value) {
//       return true;
//     }
//     node = node.next;
//   }
//   return false;
// };

// LinkedList.prototype.makeNode = function(value) {
//   var node = {};
//   node.value = value;
//   node.next = null;
//   return node;
// };






var LinkedList = function(){
  this.head = null;
  this.tail = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(value) {
  var newTail = this.makeNode(value);
  if (!this.head) {
    this.head = newTail;
    this.tail = newTail;
  } else {
    this.tail.next = newTail;
    this.tail = newTail;
  }
};

LinkedList.prototype.removeHead = function() {
  var head = this.head;
  this.head = this.head.next;
  return head;
};

LinkedList.prototype.contains = function() {
};

LinkedList.prototype.makeNode = function(value) {
  var node  = {};
  node.value = null;
  node.next = null;
  return node;
};












var list = new LinkedList();
console.log(
// list.tail,         //yields 'null'
list.addToTail(4),
// list.tail, // experiment
// list.addToTail(5),
list.head.value,   //yields '4'
// list.contains(5),  //yields 'true'
// list.contains(6),  //yields 'false'
list.removeHead(), //yields '4'
list.head,
list.tail
);