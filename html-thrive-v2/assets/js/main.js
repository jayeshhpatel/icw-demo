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

// Sub Mobile MENU
if(document.querySelector(".has-sub-menu")){
    const hasMenuEls = document.querySelectorAll(".has-sub-menu");  
    for (const el of hasMenuEls) {
        el.addEventListener("click", function() {
            this.classList.toggle('menu-active');
        });
    }     
}

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


// embed-video
if(document.querySelector(".embed-video")){
var videoPlayButton,
	videoWrapper = document.getElementsByClassName('embed-play-action')[0],
    video = document.getElementsByClassName('embed-video')[0],
    playcolor = videoWrapper.dataset.playcolor;
    playiconcolor = videoWrapper.dataset.playiconcolor;

    if(playcolor == null || playcolor == ""){
        playcolor = '#E1F4F8';
    }
    if(playiconcolor == null || playiconcolor == ""){
        playiconcolor = '#ffffff';
    }

    videoMethods = {
        renderVideoPlayButton: function() {
            if (videoWrapper.contains(video)) {
				this.formatVideoPlayButton()
                video.classList.add('has-media-controls-hidden')
                videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
                videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
            }
        },

        formatVideoPlayButton: function() {
            videoWrapper.insertAdjacentHTML('beforeend', '\
            <div class="video-overlay-play-button"><svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88"><g transform="translate(-668 -519)"><path d="M-13909.914-3018.08v55.631l49.977-26.281-44.687-29.35" transform="translate(14602 3554)" fill="'+playiconcolor+'"/><path class="video-svg-bg" d="M46,2A44,44,0,1,0,90,46,43.873,43.873,0,0,0,46,2ZM64.2,49.4l-24,16a3.969,3.969,0,0,1-5.6-1.2A4.032,4.032,0,0,1,34,62V30a4.072,4.072,0,0,1,6.2-3.4l24,16a3.924,3.924,0,0,1,1,5.6A5.3,5.3,0,0,1,64.2,49.4Z" transform="translate(666 517)" style="fill:'+playcolor+' !important;" fill="'+playcolor+'"/></g></svg></div>\
            ')
        },

        hideVideoPlayButton: function() {
            video.play()
            videoPlayButton.classList.add('is-hidden')
            video.classList.remove('has-media-controls-hidden')
            video.setAttribute('controls', 'controls')
        }

        
	}

    videoMethods.renderVideoPlayButton();

    video.onpause = function() {
        // alert("The video has been paused");
        videoPlayButton.classList.remove('is-hidden')
        video.classList.add('has-media-controls-hidden')
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