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
  var wH = window.innerHeight;
  var lO = ((wH - lH)/2);
  console.log("lH = " + lH);
  console.log("wH = " + wH);
  console.log("l0 = " + lO);
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

lH = 257.094
wH = 521.094
l0 = 132.00000000000003