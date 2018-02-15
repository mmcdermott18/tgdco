$(document).ready(function() {
    menuSlide();
    captionHover();
    boxShow();
    boxHeight();
    mapClick();
    // run function on resize of the window
    $(window).resize(function(){
      boxHeight();
    });
    // run function on scroll
    $(window).scroll(function() {

    });
});
function menuSlide() {
  $('.menu-bars').click(function() {
    console.log('clicked');
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('.nav-menu-list').slideUp('menu-open');
      }
    });
    $('.nav-menu-list').slideToggle('menu-open');
  });
}
function captionHover() {
  $('.show-caption').click(function() {
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('.hero-caption').slideUp('menu-open');
        $('.caption-open').toggleClass('hidden');
        $('.caption-close').toggleClass('hidden');
      }
    });
    $('.hero-caption').slideToggle('menu-open');
    $('.caption-open').toggleClass('hidden');
    $('.caption-close').toggleClass('hidden');
  });
}
function boxShow() {
  $('.box-toggle').click(function() {
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('.hidden-text').slideDown('text-open');
        $('.box-open').toggleClass('hidden');
        $('.box-close').toggleClass('hidden');
      }
    });
    $('.hidden-text').slideToggle('text-open');
    $('.box-open').toggleClass('hidden');
    $('.box-close').toggleClass('hidden');
  });
  $('.box-toggle-2').click(function() {
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('.hidden-text-2').slideDown('text-open');
      }
    });
    $('.hidden-text-2').slideToggle('text-open');
  });
}
function boxHeight() {
  var box1OH = $('#box-1-height').outerHeight(true);
  $('#box-1-image').css('height', (box1OH + 15));
  var box2OH = $('#box-2-height').outerHeight(true);
  $('#box-2-image').css('height', (box2OH + 15));
  var box3OH = $('#box-3-height').outerHeight(true);
  $('#box-3-image').css('height', (box3OH + 15));
}
function mapClick() {
  $('#case-map').click(function () {
    $('#case-map .tableauPlaceholder').css("pointer-events", "auto");
  });
  $( "#case-map" ).mouseleave(function() {
    $('#case-map .tableauPlaceholder').css("pointer-events", "none"); 
  });
}








