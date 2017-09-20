$(document).ready(function() {
    slideOuts();
    breakHeight();
    // run function on resize of the window
    $(window).resize(function(){
      
    });
    // run function on scroll
    $(window).scroll(function() {
      breakHeight();
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
function breakHeight() {
  var h = $('.page-break-img').outerHeight();
  var wh = $(window).height();
  var hh = $('header').outerHeight();
  var nh = (wh - hh);
  console.log('img height ' + h);
  console.log('window height ' + wh);
  if (h > wh) {
    $('.page-break').css('height', nh);
    console.log('page break set as ' + nh);
  } else {
    $('.page-break').css('height',h);
    console.log('page break set as ' + h);
  }
}