var t = {duration: 270,easing: "easeOutSine"};
/* main-sidebar */
if ($('.main-icon-sidebar').length) {
    $('.main-icon-sidebar .logo').click(function(t) {
        $('.main-icon-sidebar').toggleClass('open');
    })    
}

$('body').click(function(e) {
    if ($('.main-icon-sidebar').hasClass('open')) {
      $('.main-icon-sidebar').toggleClass('open')
    }
})