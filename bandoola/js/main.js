$(document).ready(function() {
    button();
    circles();
    text();
    logo();
    // run function on resize of the window
    $(window).resize(function(){
      button();
      circles();
      text();
      logo();
    });
    // run function on scroll
    $(window).scroll(function() {

    });
});
$(window).on("load", function() {
  button();
  circles();
  text();
  logo();
  displaySite();
});

function displaySite() {
  $('body').removeClass('invisible');
}
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
  $('#textBoxHeight').css('padding-top', tbPT);
}
function logo() {
  var lcH = $('#logoHeight').outerHeight();
  var lbH = $('#logoBoxHeight').height();
  var textureH = $('#texture1').outerHeight();
  var lbPT = (((lcH - textureH) - lbH)/2);
  $('#logoBoxHeight').css('padding-top', lbPT);
}