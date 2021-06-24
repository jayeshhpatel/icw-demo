jQuery(document).ready(function($){'use strict';

    $('._mobileMenu,.slide-fade,.sliding-panel-close').on('click touchstart',function (e) {
        $('.sidenav,.slide-fade').toggleClass('is-visible');
        //$('#wrapper').toggleClass('is-obscured');
        e.preventDefault();
    });

    if($('.customer-slider').length){
        $('.customer-slider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            focusOnSelect: true,
            arrows: false,
            responsive: [
                {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    }
                }
            ]
        });
    }

    if($('.logo-slider').length){
        $('.logo-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        prevArrow: '<span class="prev-arrow"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="next-arrow"><i class="fa fa-angle-right"></i></span>',
        responsive: [ {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 380,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    }

    if($('.customer-say-slider').length){
        $('.customer-say-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            arrows: false,
            dots: true,
            pauseOnHover: false,            
        });
    }

});