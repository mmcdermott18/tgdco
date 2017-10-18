$(document).ready(function() {
    breakHeight();
    processHeight()
    slideOuts();
    menuSlide();
    // run function on resize of the window
    $(window).resize(function(){
      
    });
    // run function on scroll
    $(window).scroll(function() {
      breakHeight();
      processHeight();
    });
});
function slideOuts() {
  var headHeight = $('header').outerHeight();
  var windowHeight = $(window).height();
  var boxHeight = (windowHeight - headHeight);
  $('#box-1').css('top',headHeight);
  $('#box-1').css('height',boxHeight);
  $('.box-1-callout').click(function() {
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('#box-1').removeClass('tgdco-open');
        $('body').removeClass('scrollLock');
        $('#container').removeClass('moveIt');
      }
    });
    $('#box-1').toggleClass('tgdco-open');
    $('body').toggleClass('scrollLock');
    $('#container').toggleClass('moveIt');
  });
  $('#box-2').css('top',headHeight);
  $('#box-2').css('height',boxHeight);
  $('.box-2-callout').click(function() {
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('#box-2').removeClass('tgdco-open');
        $('body').removeClass('scrollLock');
        $('#container').removeClass('moveIt');
      }
    });
    $('#box-2').toggleClass('tgdco-open');
    $('body').toggleClass('scrollLock');
    $('#container').toggleClass('moveIt');
  });
  $('#box-3').css('top',headHeight);
  $('#box-3').css('height',boxHeight);
  $('.box-3-callout').click(function() {
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('#box-3').removeClass('tgdco-open');
        $('body').removeClass('scrollLock');
        $('#container').removeClass('moveIt');
      }
    });
    $('#box-3').toggleClass('tgdco-open');
    $('body').toggleClass('scrollLock');
    $('#container').toggleClass('moveIt');
  });
  $('#letter-1').css('top',headHeight);
  $('#letter-1').css('height',boxHeight);
  $('.letter-1-callout').click(function() {
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('#letter-1').removeClass('tgdco-open');
        $('body').removeClass('scrollLock');
        $('#container').removeClass('moveIt');
      }
    });
    $('#letter-1').toggleClass('tgdco-open');
    $('body').toggleClass('scrollLock');
    $('#container').toggleClass('moveIt');
  });
  $('#letter-2').css('top',headHeight);
  $('#letter-2').css('height',boxHeight);
  $('.letter-2-callout').click(function() {
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('#letter-2').removeClass('tgdco-open');
        $('body').removeClass('scrollLock');
        $('#container').removeClass('moveIt');
      }
    });
    $('#letter-2').toggleClass('tgdco-open');
    $('body').toggleClass('scrollLock');
    $('#container').toggleClass('moveIt');
  });
}
function breakHeight() {
  var h = $('.page-break-img').outerHeight();
  var wh = $(window).height();
  var hh = $('header').outerHeight();
  var nh = (wh - hh);
  if (h > wh) {
    $('.page-break').css('height', nh);
  } else {
    $('.page-break').css('height',h);
  }
}
function processHeight() {
  var phh = $('#process-graphic').outerHeight();
  var phwh = $(window).height();
  var phhh = $('header').outerHeight();
  var phnh = (phwh - phhh);
  if (phh > phwh) {
    $('#process-graphic').css('height', phnh);
  } else {
    $('#process-graphic').css('height',phh);
  }
}
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