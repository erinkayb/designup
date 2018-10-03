// Gallery text box effect
$(document).ready(function() {
  $('#gallery-title').hide();
  $('#fade-box').click(function(){
    $('p').fadeOut();
    $('#gallery-title').show();
  })
  $('#gallery-title').click(function() {
    $('p').fadeIn();
  })
});

// Course
$(document).ready(function(){
   $('.more-details-button').on('click', event => {
    $(event.currentTarget).closest('.course-details').next().toggle()
  });
  $('.details').on('click', event => {
    $(event.currentTarget).addClass('active');

    $(event.currentTarget).siblings().removeClass('active')
  });
});
