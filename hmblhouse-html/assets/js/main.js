/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();
  
  $('.toggle-sidebar,.bg-overly').on('click', function (e) {
    $('.navbar-collapse,.bg-overly,.toggle-sidebar,body,.main-header').toggleClass('is-visible');
    e.preventDefault();
  });


  $(window).scroll(function(){
    if ($(window).scrollTop() >= 10) {
        $('.main-header').addClass('fixed-header');
    }
    else {
        $('.main-header').removeClass('fixed-header');
    }
  });
  $(".navbar-nav > li >a").click(function () { 
      if($('.navbar-collapse').hasClass('is-visible')){
        $('.navbar-collapse,.bg-overly,.toggle-sidebar,body,.main-header').removeClass('is-visible');
      }
  })
  $(".menu-item-has-children .arrow-down").click(function () {
    if ($(this).closest(".menu-item-has-children").hasClass("open")) {
        $(this).closest(".menu-item-has-children").removeClass("open");
        $(this).closest(".menu-item-has-children").find(".sub-menu").slideUp();
    } else {
        $(".menu-item-has-children").removeClass("open");
        $(".menu-item-has-children").find(".sub-menu").slideUp();
        $(this).closest(".menu-item-has-children").addClass("open");
        $(this).closest(".menu-item-has-children").find(".sub-menu").slideDown();
    }
  })
  $('.product-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    accessibility: false,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
          breakpoint: 991,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: true
          }
      },
      {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
        }
      }
    ]
  });
  $('input').on('focusin', function() {
    $(this).parent().find('label').addClass('active');
  });
  
  $('input').on('focusout', function() {
    if (!this.value) {
      $(this).parent().find('label').removeClass('active');
    }
  });
});