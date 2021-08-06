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



// embed-video
// if(document.querySelector(".embed-video")){
//     var videoPlayButton,
//         videoWrapper = document.getElementsByClassName('embed-play-action')[0],
//         video = document.getElementsByClassName('embed-video')[0],
//         playcolor = videoWrapper.dataset.playcolor;
//         playiconcolor = videoWrapper.dataset.playiconcolor;
    
//         if(playcolor == null || playcolor == ""){
//             playcolor = '#D0006F';
//         }
//         if(playiconcolor == null || playiconcolor == ""){
//             playiconcolor = '#ffffff';
//         }
    
//         function videoMethods(video,videoWrapper){
//             return {
//                 renderVideoPlayButton: function() {
//                     if (videoWrapper.contains(video)) {
//                         this.formatVideoPlayButton()
//                         video.classList.add('has-media-controls-hidden')
//                         videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
//                         videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
//                     }
//                 },
    
//                 formatVideoPlayButton: function() {
//                     videoWrapper.insertAdjacentHTML('beforeend', '\<div class="video-overlay-play-button"><svg width="88" height="59" viewBox="0 0 88 59" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><path d="M80 2.99512H8C5.79086 2.99512 4 4.78598 4 6.99512V48.9951C4 51.2043 5.79086 52.9951 8 52.9951H80C82.2091 52.9951 84 51.2043 84 48.9951V6.99512C84 4.78598 82.2091 2.99512 80 2.99512Z" fill="'+playcolor+'"/></g><path d="M57.0669 27.3731L36.9999 39.0731V15.6731L57.0669 27.3731Z" fill="'+playiconcolor+'"/><defs><filter id="filter0_d" x="0" y="0.995117" width="88" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="2"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.302 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg></div>\
//                     ')
//                 },
//                 hideVideoPlayButton: function() {
//                     video.play()
//                     videoPlayButton.classList.add('is-hidden')
//                     video.classList.remove('has-media-controls-hidden')
//                     video.setAttribute('controls', 'controls')
//                 }
//             }
    
            
//         }
    
//     //    DEV not id possible to make dynamic this LOOP
//         videoMethods(document.getElementsByTagName('video')[0],document.getElementsByClassName('embed-play-action')[0]).renderVideoPlayButton();
//         videoMethods(document.getElementsByTagName('video')[1],document.getElementsByClassName('embed-play-action')[1]).renderVideoPlayButton();
//         videoMethods(document.getElementsByTagName('video')[2],document.getElementsByClassName('embed-play-action')[2]).renderVideoPlayButton();
//         videoMethods(document.getElementsByTagName('video')[3],document.getElementsByClassName('embed-play-action')[3]).renderVideoPlayButton();
//         videoMethods(document.getElementsByTagName('video')[4],document.getElementsByClassName('embed-play-action')[4]).renderVideoPlayButton();
//         videoMethods(document.getElementsByTagName('video')[5],document.getElementsByClassName('embed-play-action')[5]).renderVideoPlayButton();
//         videoMethods(document.getElementsByTagName('video')[6],document.getElementsByClassName('embed-play-action')[6]).renderVideoPlayButton();
//         videoMethods(document.getElementsByTagName('video')[7],document.getElementsByClassName('embed-play-action')[7]).renderVideoPlayButton();
//         videoMethods(document.getElementsByTagName('video')[8],document.getElementsByClassName('embed-play-action')[8]).renderVideoPlayButton();
//         videoMethods(document.getElementsByTagName('video')[9],document.getElementsByClassName('embed-play-action')[9]).renderVideoPlayButton();
//         videoMethods(document.getElementsByTagName('video')[10],document.getElementsByClassName('embed-play-action')[10]).renderVideoPlayButton();
//         videoMethods(document.getElementsByTagName('video')[11],document.getElementsByClassName('embed-play-action')[11]).renderVideoPlayButton();
//         videoMethods(document.getElementsByTagName('video')[12],document.getElementsByClassName('embed-play-action')[12]).renderVideoPlayButton();

//         video.onpause = function() {
//             // alert("The video has been paused");
//             videoPlayButton.classList.remove('is-hidden')
//             video.classList.add('has-media-controls-hidden')
//         }
//     }
/*
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

    videoMethods.renderVideoPlayButton();

    video.onpause = function() {
        // alert("The video has been paused");
        videoPlayButton.classList.remove('is-hidden')
        video.classList.add('has-media-controls-hidden')
    }
}
*/


document.addEventListener('DOMContentLoaded', function(){ 
    let video_block = document.querySelectorAll(".video-wrapper .embed-play-action");
    for(let i=0; i < video_block.length; i++){
        playcolor = video_block[i].dataset.playcolor;
        playiconcolor = video_block[i].dataset.playiconcolor;
    
        if(playcolor == null || playcolor == ""){
            playcolor = '#D0006F';
        }
        if(playiconcolor == null || playiconcolor == ""){
            playiconcolor = '#ffffff';
        }
        video_block[i].innerHTML += '<div class="video-overlay-play-button"><svg width="88" height="59" viewBox="0 0 88 59" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><path d="M80 2.99512H8C5.79086 2.99512 4 4.78598 4 6.99512V48.9951C4 51.2043 5.79086 52.9951 8 52.9951H80C82.2091 52.9951 84 51.2043 84 48.9951V6.99512C84 4.78598 82.2091 2.99512 80 2.99512Z" fill="'+ playcolor +'"></path></g><path d="M57.0669 27.3731L36.9999 39.0731V15.6731L57.0669 27.3731Z" fill="'+ playiconcolor +'"></path><defs><filter id="filter0_d" x="0" y="0.995117" width="88" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.302 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg></div>';
    }
    setTimeout( function() {
        playVideo()
    },100 );
});
function playVideo() {
    let video_block_btn = document.querySelectorAll(".video-wrapper .video-overlay-play-button");            
    for(let i=0; i < video_block_btn.length; i++){ 
        video_block_btn[i].addEventListener('click', function(){
            let video = this.parentNode.querySelector('.embed-video');            
                this.classList.add('is-hidden');                
                video.play();
                video.setAttribute('controls', 'controls');            
        });
    }
    let video_paused = document.querySelectorAll(".embed-video");            
    for(let i=0; i < video_paused.length; i++){ 
        video_paused[i].addEventListener('click', function(e){   
            e.preventDefault();   
            if (video_paused[i].paused == false) {               
                this.parentNode.querySelector('.video-overlay-play-button').classList.remove('is-hidden');                
                this.pause();
                this.setAttribute('controls', '');
            } else {
                this.parentNode.querySelector('.video-overlay-play-button').classList.add('is-hidden');                
                this.play();
                this.setAttribute('controls', 'controls');
            }
        });
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