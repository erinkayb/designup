// Import navbar
// $(document).ready(function() {
//   $('#navigation').load('nav.html');
// });
$(document).ready(function() {
  $('#fade-box').click(function(){ // Gallery text box effect
    $('p').fadeOut();
  })
  $('#gallery-title').click(function() {
    $('p').fadeIn();
  })
});
