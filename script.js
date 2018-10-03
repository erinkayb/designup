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

// Courses
$(document).ready(function(){
   $('.more-details-button').on('click', event => {
    $(event.currentTarget).closest('.course-details').next().toggle()
  });
  $('.details').on('click', event => {
    $(event.currentTarget).addClass('active');

    $(event.currentTarget).siblings().removeClass('active')
  });
});

// About Page
$(document).ready(function(){
    $("#about-us-button").click(function(){
        $("#about-us").slideToggle("slow");
    });
});
