/**
 * A heap is a special tree in which a parent node is ordered only in
 * respect to its immediate children, unlike binary trees where it is all ordered.
 *
 * In a binary heap each node should have only zero, one, or two children. Each node
 * must have 2 children before the next oldest node can have any children, i.e. it is a complete tree.
 * In a specific kind of binary heap, the binary min heap, every node is less than its immediate children:
 * 
 *          0
 *     1         2
 *   3   4     5   6
 *  7
 *
 * There is only one place at any given time in a binary heap where a node can be
 * added or removed: the end. Thus, we can manage the heap in a very memory efficient way,
 * using a list or array:
 *
 * [0, 1, 2, 3, 4, 5, 6, 7]
 *
 * For each node in a binary heap:
 * parentIndex = Math.floor( (index - 1) / 2 )
 * childrenIndices = [index * 2 + 1, index * 2 + 2]
 *
 * For Binary MIN Heaps, insert and remove from the END.
 * INSERT: We must compare the inserted node to its parent, and swap their positions
 * if it is less than its parent. After a swap it must compare itself to its new parent, continuing
 * until it is more than its parent.
 *
 * REMOVE: We swap the position of the last node and the root node and now remove the last
 * node from the heap. The new root node now must be compared to its children and, if it is not less than
 * both of them, it must be swapped with the smaller of the two. This swapping continues until it is less than both its children.
 *
 * You can see a great visualization of a binary min heap in action here:
 * https://www.cs.usfca.edu/~galles/visualization/Heap.html
 */

// Below is a binary heap whose nodes are integers. 
// Implement the `insert` and `removeRoot` methods, each operating in logarithmic time relative
// to the size of the heap, and each restoring the heap's property of parent to child sorting.
//
// Extra credit: `BinaryHeap`'s `this._compare` is hard-coded to assist in making a min heap. Modify `BinaryHeap`
// to accept an optional argument which is a function used as the sorting mechanism for the heap.
// That way you can use your `BinaryHeap` class to construct a max heap or min heap or whatever.
//
// Extra extra credit: Implement `heapSort`. `heapSort` takes an array, constructs it into a `BinaryHeap`
// and then iteratively returns the root of the `BinaryHeap` until its empty, thus returning a sorted array.

function BinaryHeap () {
  this._heap = [];
  this._compare = function (i, j) { return i < j };
}

// This function shouldn't be modified
BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
}

BinaryHeap.prototype.swapNodesAt = function(index, parentIndex) {
  var parent = this._heap[parentIndex];
  this._heap[parentIndex] = this._heap[index];
  this._heap[index] = parent;
}

// INSERT: When we insert into a binary min heap, we must compare the inserted node to its parent, and swap their positions
// if it is less than its parent. After a swap it must compare itself to its new parent, continuing
// until it is no longer less than its parent.

BinaryHeap.prototype.insert = function(node) {
  this._heap.push(node);
  var insertIndex = this._heap.length - 1;
  var parent = this._heap[Math.floor((insertIndex-1) / 2)];
  var children = [this._heap[insertIndex*2+1], this._heap[insertIndex*2+2]];

  while (insertIndex > 0 && this._compare(node, parent)) {
    var oldParentIndex = Math.floor((insertIndex-1) / 2);
    this.swapNodesAt(insertIndex, oldParentIndex);
    insertIndex = oldParentIndex;
    parent = this._heap[Math.floor((insertIndex-1) / 2)]; // redefine parent to move through the tree and bring a terminating cond. to while loop
  }
  return this._heap;
}

// REMOVE: We swap the position of the last node and the root node and now remove the last
// node from the heap. The new root node now must be compared to its children and, if it is not less than
// both of them, it must be swapped with the smaller of the two. This swapping continues until it is less than both its children.

BinaryHeap.prototype.removeRoot = function() {
  var root = this.getRoot();
  var lastNode = this._heap[this._heap.length - 1];
  this.swapNodesAt(0, this._heap.length - 1);
  this._heap.pop();

  var newRoot = this.getRoot();
  var index = 0;
  var child1 = this._heap[1];
  var child2 = this._heap[2];
  while (child1 !== undefined && child2 !== undefined && (newRoot > child1 || newRoot > child2)) {
    if (child1 <= child2) {
      this.swapNodesAt(index * 2 + 1, index);
      newRoot = this._heap[index * 2 + 1];
      index = index * 2 + 1;
      child1 = this._heap[index * 2 + 1];
      child2 = this._heap[index * 2 + 2];
    } else {
      this.swapNodesAt(index * 2 + 2, index);
      newRoot = this._heap[index * 2 + 2];
      index = index * 2 + 2;
      child1 = this._heap[index * 2 + 1];
      child2 = this._heap[index * 2 + 2];
    }
  }
  return this._heap;
}

var binaryHeap = new BinaryHeap();
binaryHeap.insert(4);
binaryHeap.insert(5);
binaryHeap.insert(9);
binaryHeap.insert(8);
binaryHeap.insert(1);
binaryHeap.insert(0);
binaryHeap.removeRoot();

var compare = binaryHeap._compare;
var heap = binaryHeap._heap;
// should be all true:
console.log(compare(heap[0], heap[1])); // (1,4)
console.log(compare(heap[0], heap[2])); // (1,9)
console.log(compare(heap[1], heap[3])); // (4,8)
console.log(compare(heap[1], heap[4])); // (4,5)