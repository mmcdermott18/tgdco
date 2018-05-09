$(document).ready(function() {
    animate();
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