$(document).ready(function() { 
   /* Fixed Header - light header */
	// if ($('.main-header').length) {
    //     var window_height = $( window ).height();     
    //     var stickyHeaderTop = $('.main-header .sub-header').offset().top;
    //     $(window).scroll(function() {
    //         console.log(window_height);
    //         if($(this).scrollTop() >= stickyHeaderTop){
    //             $(".main-header .sub-header").addClass("is-fixed");
    //         }
    //         else if($(this).scrollTop() <= stickyHeaderTop){
    //             $(".main-header .sub-header").removeClass("is-fixed");
    //         }
    //     });
    //     $(window).scroll();
    // }
    $(".toggle-sidebar").click(function() {
        $(".sub-header").toggleClass("mobile-menu");
        $(".top-header").toggleClass("d-none");
        $(".sub-header .collapse-nav").toggleClass("open");
        $('body').toggleClass('overflow-hidden');
        $(this).toggleClass('toggle');
    })
    var bannerSwiper = new Swiper(".banner-slider", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });
    var logoSwiper = new Swiper(".logo-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },        
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            575: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 5,
            },
        },
    });
});

// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.main-header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
    if($(this).scrollTop() >= 5){ 
        $('.main-header').addClass('sticky-header');
    } else {
        $('.main-header').removeClass('sticky-header');
    }
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.main-header').removeClass('nav-down').addClass('nav-up');
        
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.main-header').removeClass('nav-up').addClass('nav-down');
        }
    }
  
    lastScrollTop = st;
}