  $(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});

//Scrolling Effect
$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('.header').addClass('black');
  } else {
    $('.header').removeClass('black');
  }
});

function openDaySchedule(url) {
  // See all options https://dayschedule.com/widget
  daySchedule.initPopupWidget({
    url: url,
    color: {
      primary: '#232325',
      secondary: '#adadad',
    },
  });
}

new WOW().init();