/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();
  
  $('.toggle-sidebar,.bg-overly').on('click', function (e) {
    $('.bg-overly,.toggle-sidebar,body,.main-header').toggleClass('is-visible');
    e.preventDefault();
  });

  if ($('.header-nav-wrap').length) {
    $(window).scroll(function () {
      if (jQuery(this).scrollTop() > 10) {
        $(".header-nav-wrap").addClass("fixed-header");
      } else {
        $(".header-nav-wrap").removeClass("fixed-header");
      }
    });
  }
});
$('.post-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  accessibility: false,
  responsive: [
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
              dots: true
          }
      },
      {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        }
    }
  ]
});



 /* WOW Animation - Init */

try {
  wow = new WOW(
    {
      boxClass:     'wow',     
      animateClass: 'animated', 
      offset:       0, 
    }
  )
  wow.init();
} catch (e) {
  //
};

