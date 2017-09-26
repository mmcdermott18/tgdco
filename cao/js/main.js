$(document).ready(function() {
    popOuts();
    breakHeight();
    processHeight();
    slideOuts();
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
  $('#pi-1').click(function() {
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('#pi-1-info').fadeOut();
        $('body').removeClass('scrollLock');
      }
    });
    $('#pi-1-info').fadeIn();
    $('body').toggleClass('scrollLock');
  });
  $('#pi-2').click(function() {
    $( document ).on( 'keydown', function ( e ) {
      if ( e.keyCode === 27 ) {
        $('#pi-1-info').fadeOut();
        $('body').removeClass('scrollLock');
      }
    });
    $('#pi-1-info').fadeIn();
    $('body').toggleClass('scrollLock');
  });
}
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
      }
    });
    $('#box-1').toggleClass('tgdco-open');
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
  console.log('img height ' + phh);
  console.log('window height ' + phwh);
  if (phh > phwh) {
    $('#process-graphic').css('height', phnh);
    console.log('page break set as ' + phnh);
  } else {
    $('#process-graphic').css('height',phh);
    console.log('page break set as ' + phh);
  }
}