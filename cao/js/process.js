$(document).ready(function() {
    imgMap();
    popOuts();
    processHeight();
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
function popOuts() {
  $('#pi-1-info').popup({
    transition: 'all 0.3s',
    // scrolllock: true // optional
  });
  $('#pi-2-info').popup({
    transition: 'all 0.3s',
    // scrolllock: true // optional
  });
  $('#pi-3-info').popup({
    transition: 'all 0.3s',
    // scrolllock: true // optional
  });
  $('#pi-5-info').popup({
    transition: 'all 0.3s',
    // scrolllock: true // optional
  });
  $('#pi-6-info').popup({
    transition: 'all 0.3s',
    // scrolllock: true // optional
  });
  $('#pi-7-info').popup({
    transition: 'all 0.3s',
    // scrolllock: true // optional
  });
  $('#pi-8-info').popup({
    transition: 'all 0.3s',
    // scrolllock: true // optional
  });
  $('#pi-9-info').popup({
    transition: 'all 0.3s',
    // scrolllock: true // optional
  });
  $('#pi-10-info').popup({
    transition: 'all 0.3s',
    // scrolllock: true // optional
  });
}
function processHeight() {
  var phh = $('#process-graphic').outerHeight();
  var phw = $('#process-graphic').outerWidth();
  var phwh = $(window).height();
  var phww = $(window).width();
  var phhh = $('header').outerHeight()
  var phnh = (phwh - phhh);
  if (phw < phww) {
    $('#process').addClass('center');
  } else {}
  if (phh > phwh) {
    $('#process-graphic').css('height', (phnh + 10));
    $('#process-graphic-image').css('height', phnh);
  } else {
    $('#process-graphic').css('height', (phh + 10));
    $('#process-graphic-image').css('height', phh);
  }
}