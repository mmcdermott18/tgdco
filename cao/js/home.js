$(document).ready(function() {
    popOuts();
    breakHeight();
    processHeight();
    imgMap();
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
function popOuts() {
  $('.pi-1-open').click(function() {
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('#pi-1-info').fadeOut();
        $('body').removeClass('scrollLock');
      }
    });
    $('.pi-1-close').click(function() {
      $('#pi-1-info').fadeOut();
      $('body').removeClass('scrollLock');
    });
    $('#pi-1-info').fadeIn();
    $('body').toggleClass('scrollLock');
  });
  $('.pi-2-open').click(function() {
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('#pi-2-info').fadeOut();
        $('body').removeClass('scrollLock');
      }
    });
    $('.pi-2-close').click(function() {
      $('#pi-2-info').fadeOut();
      $('body').removeClass('scrollLock');
    });
    $('#pi-2-info').fadeIn();
    $('body').toggleClass('scrollLock');
  });
  $('.pi-3-open').click(function() {
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('#pi-3-info').fadeOut();
        $('body').removeClass('scrollLock');
      }
    });
    $('.pi-3-close').click(function() {
      $('#pi-3-info').fadeOut();
      $('body').removeClass('scrollLock');
    });
    $('#pi-3-info').fadeIn();
    $('body').toggleClass('scrollLock');
  });
  $('.pi-4-open').click(function() {
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('#pi-4-info').fadeOut();
        $('body').removeClass('scrollLock');
      }
    });
    $('.pi-4-close').click(function() {
      $('#pi-4-info').fadeOut();
      $('body').removeClass('scrollLock');
    });
    $('#pi-4-info').fadeIn();
    $('body').toggleClass('scrollLock');
  });
  $('.pi-5-open').click(function() {
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('#pi-5-info').fadeOut();
        $('body').removeClass('scrollLock');
      }
    });
    $('.pi-5-close').click(function() {
      $('#pi-5-info').fadeOut();
      $('body').removeClass('scrollLock');
    });
    $('#pi-5-info').fadeIn();
    $('body').toggleClass('scrollLock');
  });
  $('.pi-6-open').click(function() {
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('#pi-6-info').fadeOut();
        $('body').removeClass('scrollLock');
      }
    });
    $('.pi-6-close').click(function() {
      $('#pi-6-info').fadeOut();
      $('body').removeClass('scrollLock');
    });
    $('#pi-6-info').fadeIn();
    $('body').toggleClass('scrollLock');
  });
  $('.pi-7-open').click(function() {
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('#pi-7-info').fadeOut();
        $('body').removeClass('scrollLock');
      }
    });
    $('.pi-7-close').click(function() {
      $('#pi-7-info').fadeOut();
      $('body').removeClass('scrollLock');
    });
    $('#pi-7-info').fadeIn();
    $('body').toggleClass('scrollLock');
  });
  $('.pi-8-open').click(function() {
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('#pi-8-info').fadeOut();
        $('body').removeClass('scrollLock');
      }
    });
    $('.pi-8-close').click(function() {
      $('#pi-8-info').fadeOut();
      $('body').removeClass('scrollLock');
    });
    $('#pi-8-info').fadeIn();
    $('body').toggleClass('scrollLock');
  });
  $('.pi-9-open').click(function() {
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('#pi-9-info').fadeOut();
        $('body').removeClass('scrollLock');
      }
    });
    $('.pi-9-close').click(function() {
      $('#pi-9-info').fadeOut();
      $('body').removeClass('scrollLock');
    });
    $('#pi-9-info').fadeIn();
    $('body').toggleClass('scrollLock');
  });
  $('.pi-10-open').click(function() {
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('#pi-10-info').fadeOut();
        $('body').removeClass('scrollLock');
      }
    });
    $('.pi-10-close').click(function() {
      $('#pi-10-info').fadeOut();
      $('body').removeClass('scrollLock');
    });
    $('#pi-10-info').fadeIn();
    $('body').toggleClass('scrollLock');
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
function imgMap() {
  $('img[usemap]').rwdImageMaps();
}
function menuSlide() {
  $('.menu-bars').click(function() {
    console.log('clicked');
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('.nav-menu-list').removeClass('menu-open');
      }
    });
    $('.nav-menu-list').toggleClass('menu-open');
  });
}