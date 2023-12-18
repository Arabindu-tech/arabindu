$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    autoplay: true,
    autoplaySpeed:2000,
    animateOut: 'fadeOut',
    animateIn: 'animate__zoomIn',
    items: 1,
  });
  //nav scroll to bg-color change
  $(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition > 70) {
      $('.navbar_style').addClass('navber_scrolled'); 
    } else {
      $('.navbar_style').removeClass('navber_scrolled');
    }
    if (scrollPosition > 120) {
      $('.navbar_style').addClass('navber_awake'); 
    } else {
      $('.navbar_style').removeClass('navber_awake');
    }
  });
});