$(document).ready(function() {
    slideOuts();
    // run function on resize of the window
    $(window).resize(function(){
      
    });
    // run function on scroll
    $(window).scroll(function() {

    });
});
function slideOuts() {
  $('#a-1').click(function() {
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('#a-1-info').fadeOut();
        $('body').removeClass('scrollLock');
      }
    });
    $('#a-1-info').fadeIn();
    $('body').toggleClass('scrollLock');
  });
}