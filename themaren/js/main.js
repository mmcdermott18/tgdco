$(document).ready(function() {
    animate();
    waves();
    logoClick();
    slider();
    slideshow()
    // run function on resize of the window
    $(window).resize(function(){

    });
    // run function on scroll
    $(window).scroll(function() {

    });
});
$(window).on("load", function() {

});

function animate() {
	$('#mark').click(function(){
	    $('#mark').toggleClass('ani-trans');
	});
}
function logoClick() {
  $('#logo').click(function(){
    $('html, body').animate({scrollTop: '+=500px'}, 800);
  });
}
function waves() {
    $(".waterwave-canvas").waterwave({
      // parent container
      parent : '#tophalf',
      // color of waves
      color : '#e0e0d8',
      // or 'down'
      direction: 'up',
      // background color
      background: ''
    });
}
function slider() {
    $('#imageGallery').lightSlider({
      item:1,
      mode:'fade',
      speed: 1000,
      slideMargin:0,
      loop:true
  });
}
function slideshow() {
  var slides = ["img/background.jpg", "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];
  var i = 0;
  function slide() {
    console.log('i is ' + i);
    $("#tophalf").stop().animate({opacity: 0},1500,function(){
      $("#tophalf").css({'background-image': "url(" + slides[i] + ")"}).animate({opacity: 1},{duration:1500});
    });
  }
  $('#leftarrow').click(function() {
    i--;
    if (i < 0 ) {
      i = 4;
      slide();
    } else {
      slide();
    }
  });
  $('#rightarrow').click(function() {
    i++;
    if (i > 4 ) {
      i = 0;
      slide();
    } else {
      slide();
    }
  });
}
