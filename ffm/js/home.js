$(document).ready(function() {
		var h1 = $('#hero').height();
  		var h2 = $('#textbox').height();
  		var h3 = ((h1 -h2) /2);
      var w1 = $('#hero').width();
      var w2 = $('#full-logo').width();
      var w3 = ((w1 -w2) /2);
  		console.log(h1);
  		console.log(h2);
  		console.log(h3);
      console.log(w3);
  		$('#textbox').css( "padding-top", h3 );
      $('#full-logo').css( "padding-left", w3 );
	  	$(window).resize(function () {
	  		var h1 = $('#hero').height();
	  		var h2 = $('#textbox').height();
	  		var h3 = ((h1 -h2) /2);
        var w1 = $('#hero').width();
        var w2 = $('#full-logo').width();
        var w3 = ((w1 -w2) /2);
  			$('#textbox').css( "padding-top", h3 );
        $('#full-logo').css( "padding-left", w3 );
	  	});
	});

//fix nav bar
$(document).ready(function() {
    var nav1 = $('#hero').height();
    var nav2 = $('.p-square').height();
    var nav3 = (nav1 +nav2 +10);
      $(window).scroll(function () {
        nav1 = $('#hero').height();
        nav2 = $('.p-square').height();
        nav3 = (nav1 +nav2 +10);
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
          console.log(nav2);
          console.log(nav3);
        if ($(window).scrollTop() > nav3) {

            $('#sticky-nav').slideDown(500);
        }
        if ($(window).scrollTop() < (nav3+1)) {
            $('#sticky-nav').slideUp(500);
        }
      });
  });