$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  var spanWrap = function(text) {
    return '<span>' + text.split(' ').join('</span><span> ') + '</span>';
  }

  var paragraph1Text = $("p")[0].innerHTML;
  var paragraph2Text = $("p")[1].innerHTML;

  var wrapped1 = spanWrap(paragraph1Text);
  var wrapped2 = spanWrap(paragraph2Text);

  $("p")[0].innerHTML = wrapped1;
  $("p")[1].innerHTML = wrapped2;

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second
  var randomColor = function(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
  }

  var spanColor = function() {
    var spans = $('span');
    for (var i=0; i<spans.length; i++) {
      $(spans[i]).css('color', randomColor());
    }
  }
  setInterval(spanColor(), 1000);

});