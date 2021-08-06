/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/

// Mobile MENU
function toggleSidebar(){
    this.classList.toggle('toggle');
    this.parentElement.classList.toggle("open");
    document.querySelector('body').classList.toggle('overflow-hidden');
}
document.querySelector('.navbar-toggler').addEventListener('click', toggleSidebar );

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


// embed-video
if(document.querySelector(".embed-video")){
    var videoPlayButton,
        videoWrapper = document.getElementsByClassName('embed-play-action')[0],
        video = document.getElementsByClassName('embed-video')[0],
        playcolor = videoWrapper.dataset.playcolor;
        playiconcolor = videoWrapper.dataset.playiconcolor;
    
        if(playcolor == null || playcolor == ""){
            playcolor = '#D0006F';
        }
        if(playiconcolor == null || playiconcolor == ""){
            playiconcolor = '#ffffff';
        }
    
        function videoMethods(video,videoWrapper){
            return {
                renderVideoPlayButton: function() {
                    if (videoWrapper.contains(video)) {
                        this.formatVideoPlayButton()
                        video.classList.add('has-media-controls-hidden')
                        videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
                        videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
                    }
                },
    
                formatVideoPlayButton: function() {
                    videoWrapper.insertAdjacentHTML('beforeend', '\<div class="video-overlay-play-button"><svg width="88" height="59" viewBox="0 0 88 59" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><path d="M80 2.99512H8C5.79086 2.99512 4 4.78598 4 6.99512V48.9951C4 51.2043 5.79086 52.9951 8 52.9951H80C82.2091 52.9951 84 51.2043 84 48.9951V6.99512C84 4.78598 82.2091 2.99512 80 2.99512Z" fill="'+playcolor+'"/></g><path d="M57.0669 27.3731L36.9999 39.0731V15.6731L57.0669 27.3731Z" fill="'+playiconcolor+'"/><defs><filter id="filter0_d" x="0" y="0.995117" width="88" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="2"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.302 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg></div>\
                    ')
                },
                hideVideoPlayButton: function() {
                    video.play()
                    videoPlayButton.classList.add('is-hidden')
                    video.classList.remove('has-media-controls-hidden')
                    video.setAttribute('controls', 'controls')
                }
            }
    
            
        }
    
    //    DEV not id possible to make dynamic this LOOP
        videoMethods(document.getElementsByTagName('video')[0],document.getElementsByClassName('embed-play-action')[0]).renderVideoPlayButton();
        videoMethods(document.getElementsByTagName('video')[1],document.getElementsByClassName('embed-play-action')[1]).renderVideoPlayButton();
        videoMethods(document.getElementsByTagName('video')[2],document.getElementsByClassName('embed-play-action')[2]).renderVideoPlayButton();
        videoMethods(document.getElementsByTagName('video')[3],document.getElementsByClassName('embed-play-action')[3]).renderVideoPlayButton();
        videoMethods(document.getElementsByTagName('video')[4],document.getElementsByClassName('embed-play-action')[4]).renderVideoPlayButton();
        videoMethods(document.getElementsByTagName('video')[5],document.getElementsByClassName('embed-play-action')[5]).renderVideoPlayButton();
        videoMethods(document.getElementsByTagName('video')[6],document.getElementsByClassName('embed-play-action')[6]).renderVideoPlayButton();
        videoMethods(document.getElementsByTagName('video')[7],document.getElementsByClassName('embed-play-action')[7]).renderVideoPlayButton();
        videoMethods(document.getElementsByTagName('video')[8],document.getElementsByClassName('embed-play-action')[8]).renderVideoPlayButton();
        videoMethods(document.getElementsByTagName('video')[9],document.getElementsByClassName('embed-play-action')[9]).renderVideoPlayButton();
        videoMethods(document.getElementsByTagName('video')[10],document.getElementsByClassName('embed-play-action')[10]).renderVideoPlayButton();
        videoMethods(document.getElementsByTagName('video')[11],document.getElementsByClassName('embed-play-action')[11]).renderVideoPlayButton();
        videoMethods(document.getElementsByTagName('video')[12],document.getElementsByClassName('embed-play-action')[12]).renderVideoPlayButton();

        video.onpause = function() {
            // alert("The video has been paused");
            videoPlayButton.classList.remove('is-hidden')
            video.classList.add('has-media-controls-hidden')
        }
    }

if(document.querySelector(".toggle-filter")){
    const toggleEls = document.querySelectorAll('.toggle-filter');
    for (const el of toggleEls) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            el.classList.toggle('selected');
        });
    }   
}


// Model Popup
if(document.querySelector(".az-modal")){
    const openEls = document.querySelectorAll("[data-popup]"); 
    const closeEls = document.querySelectorAll(".popup-close"); 
    for (const el of openEls) {
        el.addEventListener("click", function() {
            const modalId = this.dataset.popup;
            console.log(modalId);
            document.getElementById(modalId).classList.add('show');
            document.getElementById(modalId).setAttribute("style", "display: block;");
        });
    }  
    for (const el of closeEls) {
        el.addEventListener("click", function() {
            document.querySelector(".az-modal.show").classList.remove('show');  
            setTimeout( function() {
                document.querySelector(".az-modal").setAttribute("style", "display: none;");
            },300 );
        });
    }  
} 



// collapseCard
window.addEventListener('load', function () {
    let resultTabs = document.querySelectorAll(".collapse-title .collapse-action");
    for(let i=0; i < resultTabs.length; i++){
        resultTabs[i].addEventListener('click', function(){
            if( !this.classList.contains('show')){
                // let itemRow = document.querySelector('.section-collapse');   
                document.querySelectorAll('.collapse-title .collapse-action').forEach(function(elm, indx){
                    elm.classList.remove('show');
                });             
                document.querySelectorAll('.section-collapse .collapse-body').forEach(function(elm, indx){
                    elm.classList.remove('show');
                });             
                // itemRow.querySelector(".collapse-title h2").classList.remove('show');
                // itemRow.querySelector(".section-collapse .collapse-body").classList.remove('show');
                console.log('#'+ this.dataset.collapse);
                this.classList.add('show');
                document.querySelector('#'+ this.dataset.collapse).classList.add('show');                            
            } else if( this.classList.contains('show')) { 
                this.classList.remove('show');
                document.querySelector('#'+ this.dataset.collapse).classList.remove('show');
            }
        });
    }
});