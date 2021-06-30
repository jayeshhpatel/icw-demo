var t = {duration: 270,easing: "easeOutSine"};
/* main-sidebar */
if ($('.main-dashboard-header').length) {
    $('.main-dashboard-header .bar-icon').click(function(t) {
        $('.main-dashboard-header .bar-icon').toggleClass('toggle');
        $('.main-icon-sidebar').toggleClass('open');
    })    
}

$('body').click(function(e) {
    if ($('.main-icon-sidebar').hasClass('open')) {
      $('.main-icon-sidebar').toggleClass('open')
    }
    if ($('.main-dashboard-header .bar-icon').hasClass('toggle')) {
      $('.main-dashboard-header .bar-icon').toggleClass('toggle');
      $('.main-icon-sidebar').toggleClass('open')
    }
})