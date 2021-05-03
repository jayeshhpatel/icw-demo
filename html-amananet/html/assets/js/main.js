$(document).ready(function() { 
   /* Fixed Header - light header */
	if ($('.main-header').length) {
        var window_height = $( window ).height();
        var main_height = $('.main-header').outerHeight();
        var document_height = $( document ).height();       
        if(document_height > (window_height+main_height)) {
            var stickyHeaderTop = $('.main-header .sub-header').offset().top;
            $(window).scroll(function() {
                console.log(window_height);
                if($(this).scrollTop() > stickyHeaderTop){
                    $("body").addClass("is--fixed");
                    $(".main-header .sub-header").addClass("is-fixed");
                }
                else if($(this).scrollTop() <= stickyHeaderTop){
                    $("body").removeClass("is--fixed");
                    $(".main-header .sub-header").removeClass("is-fixed");
                }
            });
            $(window).scroll();
        }
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