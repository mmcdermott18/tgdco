$(document).ready(function() {
  logo();
  slide();
  confirmEmail();
    // run function on resize of the window
    $(window).resize(function(){
      logo();
    });
    // run function on scroll
    $(window).scroll(function() {

    });
});

function logo() {
  var lH = $('#desktop-logo').outerHeight();
  var wH = window.innerHeight;
  var lO = ((wH - lH)/2);
  $('#desktop-logo').css('top', lO);
}

function slide() {
  $("#show-all").click(function() {
    $("#left").toggleClass("left-animate");
    $("#rendering").toggleClass("render-animate");
    $("#desktop-logo").toggleClass("fade");
    var show = "See Full Rendering";
    var hide = "Back to Site";
    var txt = $("#button-text").text();
    if (txt == show) {
      $("#button-text").text(hide);
    } else {
      $("#button-text").text(show);
    }
  }); 
}

function confirmEmail() {
  var email 
  var confemail
  $("#confirmEmail").focusin(function() {$(this).removeClass('mismatch');});
  $("#primaryEmail").focusin(function() {$(this).removeClass('mismatch');});
  $("#confirmEmail").focusout(function() {
    email = document.getElementById("primaryEmail").value
    confemail = document.getElementById("confirmEmail").value
    if(email != confemail) {
      alert('Email addresses do not match.');
      $('#primaryEmail').addClass('mismatch');
      $('#confirmEmail').addClass('mismatch');
    } else {
      $('#primaryEmail').removeClass('mismatch');
      $('#confirmEmail').removeClass('mismatch');
    }
  });
  $("#submit-form").click(function(e) {
    document.querySelector( "input" ).addEventListener( "invalid",
      function( e ) {
          e.preventDefault();
      });
    email = document.getElementById("primaryEmail").value
    confemail = document.getElementById("confirmEmail").value
    if((email != confemail) && (email = valid)) {
      e.preventDefault();
      alert('Email addresses do not match.');
      $('#primaryEmail').addClass('mismatch');
      $('#confirmEmail').addClass('mismatch');
    }
  })
}