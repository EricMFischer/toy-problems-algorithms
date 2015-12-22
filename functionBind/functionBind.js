// BIND
var bind = function(fn, context) {
  return function(){
    fn.call(context);
  }
}

Function.prototype.bind = function(fn, context) {
  return function(){
    fn.call(context);
  }
}

// To call bind as a method on different objects
Function.prototype.bind = function(context) {
  var fn = this; // 'this' is bound to original fn, the one 'bind' was called on
  return function(){
    return fn.call(context); // 'bind' needs return statement
  }
}

Function.prototype.bind = function(context) {
  var fn = this;
  return function(){
    return fn.apply(context, arguments);
  }
}

// Partical app. (currying) with bind
Function.prototype.bind = function(context) {
  var bindArgs = Array.prototype.slice.call(arguments, 1);
  var fn = this;
  return function() {
    var args = bindArgs.concat(arguments);
    return fn.apply(context, args);
  }
}

/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/
var bind = function(fn, context) {
  var args = Array.prototype.slice.call(arguments, 2);
  return function() {
    var curriedArgs = Array.prototype.slice.call(arguments);
    var allArgs = args.concat(curriedArgs);
    return fn.apply(context, allArgs);
  }
}


var alice = {
  name: 'alice',
  shout: function(){
    console.log(this.name);
  }
}
var boundShout = bind(alice.shout, alice);
boundShout(); // alerts 'alice'
boundShout = bind(alice.shout, {name: 'bob'});
console.log(boundShout()); // alerts 'bob'

var func = function(a, b){ return a + b };
var boundFunc = bind(func, null, 'foo');
var result = boundFunc('bar');
console.log(result === 'foobar'); // true

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/
Function.prototype.bind = function(context) {
  var args = Array.prototype.slice.call(arguments, 1);
  var fn = this;
  return function() {
    var curriedArgs = Array.prototype.slice.call(arguments);
    var allArgs = args.concat(curriedArgs);
    return fn.apply(context, allArgs);
  }
}


var boundShout = alice.shout.bind(alice);
boundShout(); // alerts 'alice'
boundShout = alice.shout.bind({name: 'bob'});
boundShout(); // alerts 'bob'

var func = function(a, b){ return a + b };
var boundFunc = func.bind(null, 'foo');
var result = boundFunc('bar');
console.log(result === 'foobar'); // true
