$(document).ready(function() {
    button();
    circles();
    text();
    // run function on resize of the window
    $(window).resize(function(){
      button();
      circles();
      text();
    });
    // run function on scroll
    $(window).scroll(function() {

    });
});
function button() {
  var bcH = $('#button').outerHeight();
  var biH = $('#buttonImage').outerHeight();
  var biMT = ((bcH - biH)/2)
  $('#buttonImage').css('margin-top', biMT);
}
function circles() {
  var ccH = $('#circleHeight').outerHeight();
  var ciH = $('#circleImageHeight').outerHeight();
  var ciMT = ((ccH - ciH)/2)
  $('.circleImage').css('margin-top', ciMT);
}
function text() {
  var tcH = $('#textHeight').outerHeight();
  var tbH = $('#textBoxHeight').height();
  var tbPT = ((tcH - tbH)/2)
  console.log('Container height - ' + tcH);
  console.log('Text box Height - ' + tbH);
  console.log('Padding top - ' + tbPT);
  $('#textBoxHeight').css('padding-top', tbPT);
}