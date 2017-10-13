$(document).ready(function() {
    hoverPosition();
    // run function on resize of the window
    $(window).resize(function(){
      hoverPosition();
    });
    // run function on scroll
    $(window).scroll(function() {
    });
});

function hoverPosition() {
  var buttonHeight = $('#buttons').outerHeight();
  var hoverHeight = $('#popup').outerHeight();
  var hoverTop = (-1 * (hoverHeight - buttonHeight));
  $('.three').css('margin-top', buttonHeight);
  $('#buttons').click(function() {
    $('#popup').toggleClass('hide');
    $('#popup').css('top',hoverTop);
  });
  $('#popup').click(function() {
    $('#popup').toggleClass('hide');
  });
}