$(document).ready(function() {
    animate();
    waves();
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

function waves() {
    $(".waterwave-canvas").waterwave({
      // parent container
      parent : '#tophalf',
      // color of waves
      color : '#ffffff',
      // or 'down'
      direction: 'up',
      // background color
      background: ''
    });
}