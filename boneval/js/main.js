$(document).ready(function() {
  logo();
  slide();
    // run function on resize of the window
    $(window).resize(function(){
      logo();
    });
    // run function on scroll
    $(window).scroll(function() {

    });
});

function logo() {
  var lH = $('#desktop-logo').outerHeight();
  var wH = $('#rendering').outerHeight();
  var lO = ((wH - lH)/2);
  $('#desktop-logo').css('top', lO);
}

function slide() {
  $("#show-all").click(function() {
    $("#left").toggleClass("left-animate");
    $("#rendering").toggleClass("render-animate");
    $("#desktop-logo").toggleClass("fade");
    var show = "See Full Rendering";
    var hide = "Back to Site";
    var txt = $("#button-text").text();
    if (txt == show) {
      $("#button-text").text(hide);
    } else {
      $("#button-text").text(show);
    }
  }); 
}