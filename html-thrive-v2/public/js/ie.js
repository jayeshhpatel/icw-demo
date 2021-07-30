//IE 10 or older Notic
/*-----------------------------------------------------------------------------------*/
var isIE;
(function() {
    var ua = window.navigator.userAgent,
        msie = ua.indexOf('MSIE '), // IE 10 or older
        trident = ua.indexOf('Trident/'); //IE 11
    isIE = (msie > -1 || trident > 1) ? true : false;
    // isIE = (msie > -1) ? true : false;
    isIE_ALL = (msie > -1 || trident > 1) ? true : false;
    // isIE_ALL = (msie > -1 || trident > -1) ? true : false;
})();
if (isIE) {
    document.body.className += 'msie';
    // IE 10 or older
    document.body.className += ' screen-alert';
    document.body.innerHTML += "<div class='screen-alert-model' oncontextmenu='return false'><div class='content'><h2>Your web browser is out of date. Update your browser for more security, speed and the best experience on this site.</h2><p>Please upgrade to <strong>Edge</strong>, <strong>Chroma</strong>, <strong>Firefox</strong> or <strong>Safari</strong> latest web browser.</p><p><a class='btn-border' target='_blank' rel='noopener' href='https://www.microsoft.com/en-us/edge'>Update Browser</a></p></div></div>";
}
if (isIE_ALL) {
    
}