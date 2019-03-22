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
  var ap = true
  var time = 3000;
  var fadeTime = 1500;
  var auto;
  autoplay();
  function slide() {
    // console.log('i is ' + i);
    $("#tophalf").stop().animate({opacity: 0},fadeTime,function(){
      $("#tophalf").css({'background-image': "url(" + slides[i] + ")"}).animate({opacity: 1},{duration:fadeTime});
    });
    if (ap) {
      time = 4500;
      autoplay();
    } else {

    }
  }
  function autoplay() {
    auto = setTimeout(function(){
      i++;
      if (i > 4 ) {
        i = 0;
        slide();
      } else {
        slide();
      }
    }, time);
  }
  $('#leftarrow').click(function() {
    ap = false;
    clearTimeout(auto);
    i--;
    if (i < 0 ) {
      i = 4;
      slide();
    } else {
      slide();
    }
  });
  $('#rightarrow').click(function() {
    ap = false;
    clearTimeout(auto);
    i++;
    if (i > 4 ) {
      i = 0;
      slide();
    } else {
      slide();
    }
  });
}
