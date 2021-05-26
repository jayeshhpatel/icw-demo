$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip({
        container: '.content-wrapper'
    });
    if ($('.website .main-header').length) {
        $(".toggle-sidebar").click(function() {
            $(".main-header .navbar-collapse").toggleClass("open");            
            $('body').toggleClass('overflow-hidden');
            $(this).toggleClass('toggle');
        })
    }
    if ($('.website .dropdown').length) { 
        $(".dropdown").bind('mouseover',function(){
            $(this).addClass('show');
            $(this).find('.dropdown-menu').addClass('show');
        }).bind('mouseleave', function(){
            $(this).removeClass('show');
            $(this).find('.dropdown-menu').removeClass('show');
        });
    }
});
/* WOW Animation - Init */
try{
    new WOW().init();
}
catch(e){
    //
};