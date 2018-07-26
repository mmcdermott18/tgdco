$(document).ready(function() {
    animate();
    waves();
    logoClick();
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