/**
 * Implement a function that takes a URL and a callback and makes a JSONP
 * GET request to that URL.
 *
 * We've provided the following API endpoint:
 *   http://toy-problems.hackreactor.com/jsonparty
 *
 * Your function should accept a call with that URL, and call the callback
 * with the response data from the server. You should NOT return the response
 * from the server, only the wrapped data! jQuery is not available, and you won't
 * be able to do this using a native XMLHttpRequest.
 *
 * Example:
 *   jsonpRequest('http://toy-problems.hackreactor.com:3003/jsonparty', function (data) {
 *     console.log(data.response); // "Aw yeah, now we're JSONPartying"
 *     console.log(data.random); // 3558
 *   });
 *
 *   // Subsequent requests should have properly random responses:
 *   jsonpRequest('http://toy-problems.hackreactor.com:3003/jsonparty', function (data) {
 *     console.log(data.random); // 1733
 *   });
 *
 * Hint: The API accepts a `callback` parameter. What is that for?
 * See http://en.wikipedia.org/wiki/JSONP if you need more information
 * about this exciting AJAX protocol!
 *
 * Feel free to use Google in searching for your ideal implementation!
 */



// var callbacks = [];

// var jsonpRequest = function(url, callback) {
//   callbacks.push(callback);
//   var script = document.createElement('script');
//   script.src = url + '?callback=callbacks[' + (callbacks.length - 1) + ']';
//   document.body.appendChild(script);
// };

var jsonpRequest = function(url, callback) {
  var script = document.createElement('script');
  script.src = url + '?callback=onResponse';
  window.onResponse = callback;

  document.body.appendChild(script);
}

var jsonpDispatcher = {};
var jsonpRequest = (function(url, callback) {
  return function (url, callback) {
    var key = Math.random();
    jsonpDispatcher[key] = function() {
      callback.apply(this, arguments);
      delete jsonpDispatcher[key];

      var el = document.body.getElementsByClassName('script');
      el[0].parentNode.removeChild(el[0]);
    }

    var script = document.createElement('script');
    script.src = url + '?callback=jsonpDispatcher[' + key + ']';
    script.className = 'script';
    document.body.appendChild(script);
  }

}() );


// var answer = jsonpRequest('http://toy-problems.hackreactor.com:3003/jsonparty', function (data) {
//   console.log(data.response); // "Aw yeah, now we're JSONPartying"
//   console.log(data.random); // 3558
// });

// console.log(answer());
