$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  var spanWrap = function(text) {
    return '<span>' + text.split(" ").join('</span><span> ') + '</span>';
  }
  var paragraphText = $("p")[0].innerHTML;

  var wrapped = spanWrap(paragraphText);
  $("p")[0].innerHTML = wrapped;
  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second
  var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

  $(document).ready(function() {
    var spans = $('span');
    for (var i=0; i<spans.length; i++) {
      $(spans[i]).css('color', randomColor());
    }
  });

});