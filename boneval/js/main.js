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
function register() {
    jQuery.ajax({
      type: "POST",
      url: '../signup.php',
      data: {
        firstName: document.getElementById('FirstName').value,
        lastName: document.getElementById('LastName').value,
        email: document.getElementById('Emails[Primary]').value
      },
      success: function(arguments){
        console.log(arguments);
      }
    });
};
function confirmEmail() {
  var email; 
  var confemail;
  $('input').focusin(function() {$('#needEmails').addClass('hidden');});
  $("#confirmEmail").focusin(function() {$(this).removeClass('mismatch');});
  $("#Emails[Primary]").focusin(function() {$(this).removeClass('mismatch');});
  $("#confirmEmail").focusout(function() {
    email = document.getElementById("Emails[Primary]").value;
    confemail = document.getElementById("confirmEmail").value;
    if(email != confemail) {
      $('#badEmails').removeClass('hidden');
      $('#needEmails').addClass('hidden');
      $('#Emails[Primary]').addClass('mismatch');
      $('#confirmEmail').addClass('mismatch');
    } else {
      $('#badEmails').addClass('hidden');
      $('#Emails[Primary]').removeClass('mismatch');
      $('#confirmEmail').removeClass('mismatch');
    }
  });
  $("#submit-form").click(function(e) {
    email = document.getElementById("Emails[Primary]").value;
    confemail = document.getElementById("confirmEmail").value;
    if(email != confemail) {
      e.preventDefault();
      $('#badEmails').removeClass('hidden');
      $('#needEmails').addClass('hidden');
      $('#Emails[Primary]').addClass('mismatch');
      $('#confirmEmail').addClass('mismatch');
    } else if($('#Emails[Primary]').is(':invalid')) {
      e.preventDefault();
      $('#needEmails').removeClass('hidden');
      $('#Emails[Primary]').addClass('mismatch');
      $('#confirmEmail').addClass('mismatch');
    } else {
      register();
      // $('#submit-form').text("Thank you!");
      // $('input').val("");
      // $('.fields').addClass('hidden');
      // $('#signup-form h2').text('Your information was successfully submitted.');
    }
  })
}