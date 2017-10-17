$(document).ready(function() {
    imgMap();
    // run function on resize of the window
    $(window).resize(function(){
      
    });
    // run function on scroll
    $(window).scroll(function() {
    });
});
function imgMap() {
  $('img[usemap]').rwdImageMaps();
}