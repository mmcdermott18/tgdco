$(document).ready(function() {
    animate();
    waves();
    // newPhrase();
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
function newPhrase() {
    var phrases = [
    'Be in the know.',
    'Keep your ear to the ground.']
    var number = Math.floor(Math.random() * (phrases.length));
    var duration = Math.floor(Math.random() * 10000);
    console.log(phrases[number]);
    console.log(duration);
    $('#phraseInput').text(phrases[number]);
    setTimeout(function () {
        $('#phraseInput').text(phrases[number]);
        newPhrase();
    }, duration)
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