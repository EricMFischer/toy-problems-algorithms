/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
 // Progress on balancedParens
var balancedParens = function(input){
  var parentheses = '()[]{}';
  var stack = [];

  for (var i=0; i<input.length; i++) {
    var character = input[i];
    var parenPosition = parentheses.indexOf(character);

    if (parenPosition % 2 === 0) {
      stack.push(character);
      stack.push(parenPosition + 1]);

    }
  }
};


