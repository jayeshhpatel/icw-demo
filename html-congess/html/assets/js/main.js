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

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

if(document.querySelector(".toggle-filter")){
    const toggleEls = document.querySelectorAll('.toggle-filter');
    for (const el of toggleEls) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            el.classList.toggle('selected');
        });
    }   
}


// equalHeight
(function () {
    equalHeight(false);
})();
window.onresize = function(){
    equalHeight(true); 
}
function equalHeight(resize) {
    var w = document.documentElement.clientWidth;
    var elements = document.getElementsByClassName("equalHeight"),
        allHeights = [],
        i = 0;
    if(resize === true){
        for(i = 0; i < elements.length; i++){
        elements[i].style.minHeight = 'auto';
        }
    }
    for(i = 0; i < elements.length; i++){
        var elementHeight = elements[i].clientHeight;
        allHeights.push(elementHeight);
    }
    for(i = 0; i < elements.length; i++){
        console.log(w);
        if(w > 1200){
            elements[i].style.minHeight = Math.max.apply( Math, allHeights) + 'px';
        } else {
            elements[i].style.minHeight = 'auto';
        }
        // if(resize === false){
        // elements[i].className = elements[i].className + " eh-show";
        // }
    }
}