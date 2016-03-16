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