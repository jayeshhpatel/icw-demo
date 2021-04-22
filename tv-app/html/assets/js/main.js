/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/

// is-sticky-header
let lastScroll = 0;
window.addEventListener("scroll", () => {
    let header = document.querySelector(".is-sticky-header");
    if(header){
        let currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            header.classList.remove("scroll-up");
            return;
        }    
        if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
            // down
            header.classList.remove("scroll-up");
            header.classList.add("scroll-down");
        } else if (currentScroll < lastScroll && header.classList.contains("scroll-down")) {
            // up
            header.classList.remove("scroll-down");
            header.classList.add("scroll-up");
        }
        lastScroll = currentScroll;
    }
});

// Mobile MENU
function toggleMenu(){
    this.classList.toggle('toggle');
    this.parentElement.classList.toggle("open");
    document.querySelector('body').classList.toggle('overflow-hidden');
}
document.querySelector('.bar-icon').addEventListener('click', toggleMenu );

// Desktop MENU
function toggleMenuDesktop(){
    var w = document.documentElement.clientWidth;
    // var h = document.documentElement.clientHeight;
    if(w > 1200){
        document.querySelector("body").classList.remove('overflow-hidden');
        document.querySelector(".navbar").classList.remove('open');
        document.querySelector(".bar-icon").classList.remove('toggle');
    }
    
}
window.addEventListener("resize", toggleMenuDesktop);

// Model Popup
if(document.querySelector(".custom-modal")){
    const openEls = document.querySelectorAll("[data-popup]"); 
    const closeEls = document.querySelectorAll(".popup-close"); 
    for (const el of openEls) {
        el.addEventListener("click", function() {
            const modalId = this.dataset.popup;
            console.log(modalId);
            document.getElementById(modalId).classList.add('is-show');
        });
    }  
    for (const el of closeEls) {
        el.addEventListener("click", function() {
            document.querySelector(".custom-modal.is-show").classList.remove('is-show');
        });
    }  
    document.addEventListener("click", e => {
        if (e.target == document.querySelector(".custom-modal.is-show")) {
            document.querySelector(".custom-modal.is-show").classList.remove('is-show');
        }
    });
}

$(document).ready(function(){
    /* video gallery slider */ 
    if($('.vimeo-video-block').length) {
        var galleryThumbs = new Swiper(".gallery-thumbs", {
            spaceBetween: 10,
            centeredSlides: false,
            slidesPerView: "auto",
            touchRatio: 0.4,
            slideToClickedSlide: false,
            loop: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            keyboard: {
                enabled: true,
                onlyInViewport: false
            }
        });
        $('.gallery-thumb').on('click', function() {
            var url = $(this).data('video-link');
            var videoLink = 'https://player.vimeo.com/video/'+ url +'?rel=0&controls=0&loop=1&autoplay=1'
            console.log(videoLink);
            $('.gallery-thumb').removeClass('swiper-slide-active');
            $(this).addClass('swiper-slide-active');
            $("#videoFrame").attr("src", videoLink);
        });
        $('.swiper-button-prev').on('click', function() {
            var url = $('.swiper-slide-active').data('video-link');
            var videoLink = 'https://player.vimeo.com/video/'+ url +'?rel=0&controls=0&loop=1&autoplay=1'
            console.log(videoLink);
            $("#videoFrame").attr("src", videoLink);
        });
        $('.swiper-button-next').on('click', function() {
            var url = $('.swiper-slide-active').data('video-link');
            var videoLink = 'https://player.vimeo.com/video/'+ url +'?rel=0&controls=0&loop=1&autoplay=1'
            console.log(videoLink);
            $("#videoFrame").attr("src", videoLink);
        });        
    }

    /* video gallery slider - v2 */
    if($('.video-block').length) {
        var swiper = '.video-gallery-thumbs', options =  {            
            loop: true,
            speed:800,
            slidesPerView: 2, // or 'auto'
            spaceBetween: 0,
            centeredSlides : true,
            effect: 'coverflow', // 'cube', 'fade', 'coverflow',
            coverflowEffect: {
                rotate: 0, // Slide rotate in degrees
                stretch: 0, // Stretch space between slides (in px)
                depth: 100, // Depth offset in px (slides translate in Z axis)
                modifier: 1, // Effect multipler
                // slideShadows : true, // Enables slides shadows
            },
            breakpoints: {
                1200: {
                    slidesPerView: 6,
                },
                992: {
                    slidesPerView: 5,
                },
                767: {
                    slidesPerView: 4,
                },
                575: {
                    slidesPerView: 3,
                }
            },
            slideToClickedSlide: true,
            grabCursor: true,            
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        var videoSwiperSlider = new Swiper(swiper, options);
        videoSwiperSlider.init();
        $(window).on('resize', function () { 
            videoSwiperSlider.init();
        });        
        $('.gallery-thumb').on('click', function() {
            var url = $(this).data('video-link');
            var videoLink = 'https://player.vimeo.com/video/'+ url +'?rel=0&loop=1&autoplay=0'
            console.log(videoLink);
            $('.gallery-thumb').removeClass('swiper-slide-active');
            $(this).addClass('swiper-slide-active');
            $("#videoFrame").attr("src", videoLink);
        });
        $('.swiper-button-prev').on('click', function() {
            var url = $('.swiper-slide-active').data('video-link');
            var videoLink = 'https://player.vimeo.com/video/'+ url +'?rel=0&loop=1&autoplay=0'
            console.log(videoLink);
            $("#videoFrame").attr("src", videoLink);
        });
        $('.swiper-button-next').on('click', function() {
            var url = $('.swiper-slide-active').data('video-link');
            var videoLink = 'https://player.vimeo.com/video/'+ url +'?rel=0&loop=1&autoplay=0'
            console.log(videoLink);
            $("#videoFrame").attr("src", videoLink);
        });
    }    

    /* modal slider */
    if($('.modal-slider').length) {
        var swiper = new Swiper('.modal-slider', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
            },
        });
    }
});