$(document).ready(function() {
    browserDetection();
    // run function on resize of the window
    $(window).resize(function(){
    });
    // run function on scroll
    $(window).scroll(function() {
    });
});
function browserDetection() {
  if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    $("html").addClass('IEhtml');
    $("body").addClass('IEbody');
    $('iframe.tableauViz').css("pointer-events", "none");
    $('iframe.tableauViz').css("position", "relative");
    $('#case-map').click(function () {
      $('iframe.tableauViz').css("pointer-events", "auto");
    });
    $( "#case-map" ).mouseleave(function() {
      $('iframe.tableauViz').css("pointer-events", "none"); 
    });
  }
}








