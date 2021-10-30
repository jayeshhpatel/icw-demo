$(document).ready(function() {
    if(('.play-cubilete-slider').length) {
        $('.play-cubilete-slider').on('init', function(e, slick) {
            var $firstAnimatingElements = $('div.slick-slide:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);    
        });
        $('.play-cubilete-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
                var $animatingElements = $('div.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
                doAnimations($animatingElements);    
        });
        $('.play-cubilete-slider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            fade: true,
            arrows: false,
        });
    }
    if(('.how-play-slider').length) {
        $('.how-play-slider').on('init', function(e, slick) {
            var $firstAnimatingElements = $('div.slick-slide:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);    
        });
        $('.how-play-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
                var $animatingElements = $('div.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
                doAnimations($animatingElements);    
        });
        $('.how-play-slider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            fade: true,
            arrows: true,
        });
    }
    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }

/**
 * CSS3 Animation effect in user side
 * Function Name: WOW
 * @access public
 * @created by Jayesh Patel and 25/07/2014
*/
try{
new WOW().init();
}
catch(e){
//
};
});
