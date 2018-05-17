$(document).ready(function() {
    animate();
    newPhrase();
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
    'Keep your ear to the ground.',
    'Laurel or Yanny?',
    'Keep it real.',
    'Your future self will thank you.',
    'We only send good emails.',
    'Living by the water isn\'t appealing?']
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