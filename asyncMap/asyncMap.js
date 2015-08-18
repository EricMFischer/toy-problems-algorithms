'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */

var asyncMap = function(tasks, callback) {
  var results = [];
  var count = 0;
  for (var i=0; i<tasks.length; i++) {
    (function(i) {
      tasks[i](function(value) {
        results[i] = value;
        count++;
        if (count === tasks.length) {
          return callback(results);
        }
      });
    })(i);
  }
}


var answer = asyncMap([
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 200);
  },
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 100);
  }
 ],
  function(results){
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results); // ['one', 'two']
 });

console.log(answer);

var asyncMap = function(tasks, callback){
  var resultsArray = [];
  var resultsCount = 0;

  // for the functions in tasks array
  for(var i = 0; i < tasks.length; i++){
    // invoke this for each function
    (function (i) {
      // define the cb
      tasks[i](function (val) {
        console.log(val); // logs two and then one because the cb is called quicker on 2
        resultsArray[i] = val; // ensures proper array placement in results
        resultsCount++;
        if(resultsCount === tasks.length){
          callback(resultsArray);
        }
      });
    })(i);
  }
};
