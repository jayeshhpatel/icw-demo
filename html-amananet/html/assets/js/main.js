$(document).ready(function() { 
    if($('.main-header').length) {  
        var header = $(".sub-header");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 5) {
                header.addClass("is-fixed");
            } else {
                header.removeClass('is-fixed');
            }
        });
        $(".toggle-sidebar").click(function() {
            $(".sub-header").toggleClass("mobile-menu");
            $(".sub-header .collapse-nav").toggleClass("open");
            $('body').toggleClass('overflow-hidden');
            $(this).toggleClass('toggle');
        })
    }
    var swiper = new Swiper(".banner-slider", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });
});