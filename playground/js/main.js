var tStart = $('#intro').outerHeight() - 300 // Start transition 100px from top
  , tEnd = $('#intro').outerHeight()   // End at 500px
  , cStart = [231, 189, 30]  // Gold
  , cEnd = [0, 167, 181]   // Lime
  , cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[2] - cStart[2]];

$(document).ready(function(){
    $(document).scroll(function() {
        var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
        p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
        var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
        $("body").css('background-color', 'rgb(' + cBg.join(',') +')');
    });
});

$(document).ready(function(){
 
  // hide our element on page load
  $('#first-text').css('opacity', 0);
  $('#intro-text').css('opacity', 0);
  $('#intro').click(function() {
    console.log('click');
    $('#intro-text').addClass('fadeInLeft');
  });
  $('#first-text').waypoint(function() {
    $('#first-text').addClass('fadeInLeft');
  }, { offset: '40%' });
 
});