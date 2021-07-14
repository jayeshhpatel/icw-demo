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
function toggleSidebar(){
    this.classList.toggle('toggle');
    this.parentElement.classList.toggle("open");
    document.querySelector('body').classList.toggle('overflow-hidden');
}
document.querySelector('.bar-icon').addEventListener('click', toggleSidebar );

// Custom Tab
window.addEventListener('load', function () {
    let resultTabs = document.querySelectorAll(".custom-tabs a");
    for(let i=0; i < resultTabs.length; i++){
        resultTabs[i].addEventListener('click', function(){
            if( !this.classList.contains('active')){
                let itemRow = document.querySelector('.custom-tab-block');                
                itemRow.querySelector(".custom-tabs a.active").classList.remove('active');
                itemRow.querySelector(".tab-content-block .tab-content.active").classList.remove('active');
                this.classList.add('active');
                document.querySelector('#'+ this.dataset.content).classList.add('active');
                let tabBg = this.dataset.bg;
                document.querySelector('.bg-tab-wrapper').style.backgroundImage = tabBg;
            }
        });
    }
});

// Model Popup
if(document.querySelector(".custom-modal")){
    const openEls = document.querySelectorAll("[data-popup]"); 
    const closeEls = document.querySelectorAll(".popup-close"); 
    // const modalEls = document.querySelectorAll(".custom-modal"); 
    for (const el of openEls) {
        el.addEventListener("click", function() {
            const modalId = this.dataset.popup;
            // console.log(modalEls);

            // reset all modal is-show
            // document.querySelectorAll('.custom-modal').forEach(function(item) {
            //     item.classList.remove('is-show');
            // })

            // document.querySelectorAll(".custom-modal .is-show").classList.remove('is-show');
            document.getElementById(modalId).classList.add('is-show');
        });
    }  
    for (const el of closeEls) {
        el.addEventListener("click", function() {
            document.querySelector(".custom-modal.is-show").classList.remove('is-show');
        });
    }  
    // document.addEventListener("click", e => {
    //     if (e.target == document.querySelector(".custom-modal.is-show")) {
    //         document.querySelector(".custom-modal.is-show").classList.remove('is-show');
    //     }
    // });
}




/* collapseTad */
let collapseTad = document.getElementsByClassName("tab-header");
for (i = 0; i < collapseTad.length; i++) {
    collapseTad[i].addEventListener("click", toggleTabItem, false);
}
function toggleTabItem() {
    var itemClass = this.className;
    for (i = 0; i < collapseTad.length; i++) {
        collapseTad[i].className = "tab-header collapse-action";
        collapseTad[i].parentNode.querySelector('.tab-content-body').classList.remove('active');
        collapseTad[i].parentNode.querySelector('.tab-content-body').style.height= "0px";
    }
    if (itemClass == "tab-header collapse-action") {
        this.className = "tab-header collapse-action active";
        this.parentNode.querySelector('.tab-content-body').classList.add('active');
        this.parentNode.querySelector('.tab-content-body').style.height = 'auto';
    }
}

/* Show/Hide Div with TAB PAGE */
/*var investDiv = document.querySelector('.investigation-area-block');
var selectDiv = document.querySelector('.select-explore-block');
var selectInnerDiv = document.querySelector('.select-explore-block .explore-content');
var trialDiv = document.querySelector('.trial-overview-block');
var trialInnerDiv = document.querySelector('.trial-overview-block .step-overview-info');

let byIdOpeners = document.querySelectorAll('.target-link');
for(let i=0; i < byIdOpeners.length; i++){
    byIdOpeners[i].addEventListener('click', function(e){
        e.preventDefault();
        let targetID = this.dataset.id;
        console.log(targetID);
        if(targetID) {
            var element = document.getElementById(targetID);            
            var elementMainDiv = element.parentNode;
            investDiv.classList.remove('is-show');
            investDiv.classList.add('is-hide');

            selectDiv.classList.remove('is-show');
            selectDiv.classList.add('is-hide');
            selectInnerDiv.classList.remove('is-show');        
            selectInnerDiv.classList.add('is-hide');  

            trialDiv.classList.remove('is-show');
            trialDiv.classList.add('is-hide');
            trialInnerDiv.classList.remove('is-show');        
            trialInnerDiv.classList.add('is-hide');      

            elementMainDiv.classList.remove('is-hide');
            elementMainDiv.classList.add('is-show');
            element.classList.remove('is-hide');
            element.classList.add('is-show');

            return false;
        } else {
            return false;
        }
    })
}
let backSite = document.querySelectorAll('.back-to-sites');
for(let i=0; i < backSite.length; i++){
    backSite[i].addEventListener('click', function(e){
        e.preventDefault();
        investDiv.classList.remove('is-hide');
        investDiv.classList.add('is-show'); 

        selectDiv.classList.remove('is-show');        
        selectDiv.classList.add('is-hide');        
        selectInnerDiv.classList.remove('is-show');        
        selectInnerDiv.classList.add('is-hide'); 

        trialDiv.classList.remove('is-show');        
        trialDiv.classList.add('is-hide');        
        trialInnerDiv.classList.remove('is-show');        
        trialInnerDiv.classList.add('is-hide'); 

        return false;
    })
}
*/

// var clinicalTrialDiv = document.querySelector('.clinical-trial-block');
// var moreInfoDiv = document.querySelector('.more-info-block');
// var moreInfoInnerDiv = document.querySelector('.more-info-block .more-info-content');

// let byIdCards = document.querySelectorAll('.target-card-link');
// for(let i=0; i < byIdCards.length; i++){
//     byIdCards[i].addEventListener('click', function(e){
//         e.preventDefault();
//         let targetCardID = this.dataset.cardid;
//         console.log(targetCardID);
//         if(targetCardID) {
//             var element = document.getElementById(targetCardID);            
//             var elementMainDiv = element.parentNode;
//             clinicalTrialDiv.classList.remove('is-show');
//             clinicalTrialDiv.classList.add('is-hide');

//             moreInfoDiv.classList.remove('is-show');
//             moreInfoDiv.classList.add('is-hide');
//             moreInfoInnerDiv.classList.remove('is-show');        
//             moreInfoInnerDiv.classList.add('is-hide');  

//             elementMainDiv.classList.remove('is-hide');
//             elementMainDiv.classList.add('is-show');
//             element.classList.remove('is-hide');
//             element.classList.add('is-show');

//             return false;
//         } else {
//             return false;
//         }
//     })
// }

// let backClinicSite = document.querySelectorAll('.back-to-trial');
// for(let i=0; i < backClinicSite.length; i++){
//     backClinicSite[i].addEventListener('click', function(e){
//         e.preventDefault();
//         clinicalTrialDiv.classList.remove('is-hide');
//         clinicalTrialDiv.classList.add('is-show'); 

//         moreInfoDiv.classList.remove('is-show');        
//         moreInfoDiv.classList.add('is-hide');        
//         moreInfoInnerDiv.classList.remove('is-show');        
//         moreInfoInnerDiv.classList.add('is-hide'); 

//         return false;
//     })
// }

/* collapseCard */
let collapseCard = document.getElementsByClassName("header-action");
if (collapseCard) {
    for (i = 0; i < collapseCard.length; i++) {
        collapseCard[i].addEventListener("click", toggleItem, false);
    }
}
function toggleItem() {
    var itemClass = this.className;
    for (i = 0; i < collapseCard.length; i++) {
        collapseCard[i].className = "card-header header-action";
        collapseCard[i].parentNode.parentNode.querySelector('.card-body').classList.remove('active');
        collapseCard[i].parentNode.parentNode.querySelector('.card-body').style.height= "0px";
    }
    if (itemClass == "card-header header-action") {
        this.className = "card-header header-action active";
        this.parentNode.parentNode.querySelector('.card-body').classList.add('active');
        this.parentNode.parentNode.querySelector('.card-body').style.height = 'auto';
    }
}

var getClosest = function ( elem, selector ) {
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function(s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
    }
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if ( elem.matches( selector ) ) return elem;
    }
    return null;
};


/* glossary sorting Add active class */
let sortWordAction = document.querySelectorAll('.sort-link');
for(let i=0; i < sortWordAction.length; i++){
    sortWordAction[i].addEventListener('click', function(e){ 
        let sortDivMenu = getClosest(this, '.sticky-sorting');
        document.querySelectorAll('.sort-link').forEach(function(elm, indx){
            elm.classList.remove('active');
            // sortDivMenu.classList.remove('sticky-fixed');
        }); 
        this.classList.add('active');        
        // sortDivMenu.classList.add('sticky-fixed');      
    })
}
window.onscroll = function(){
    if(document.querySelector('.sticky-sorting')){
        var el = document.querySelector('.sticky-sorting'),        
            t = document.querySelector('.filter-content-block').getBoundingClientRect().top; // top of main div
        if(t <= 0) {
        el.classList.add('sticky-fixed'); //make position fixed instead of absolute
        } else {
        el.classList.remove('sticky-fixed'); //clear styles if back to original position
        }
    }
}

/* Full-pipeline collapse video player */
let videoPlaySrc = document.querySelector('.video-play-iframe')
if(videoPlaySrc) {
    videoPlaySrc.addEventListener('click', function(){ 
        let videoSrcID = this.dataset.videosrc;
        let videoBlock = this.parentNode;
        console.log(videoBlock);
        this.classList.add('is-hide');
        let videoIframe= document.createElement('div');
        videoIframe.classList.add('embed-container');
        videoIframe.innerHTML = '<iframe class="embed-block" src="' + videoSrcID + '" width="100%"  frameborder="0" webkitallowfullscreen  mozallowfullscreen allowfullscreen>';
        videoBlock.appendChild( videoIframe );
    })
}

/* Replace all SVG images with inline SVG */
document.querySelectorAll('img.inline-svg').forEach((el) => {
    const imgID = el.getAttribute('id');
    const imgClass = el.getAttribute('class');
    const imgURL = el.getAttribute('src');

    fetch(imgURL)
        .then(data => data.text())
        .then(response => {
              const parser = new DOMParser();
              const xmlDoc = parser.parseFromString(response, 'text/html');
              let svg = xmlDoc.querySelector('svg');

              if (typeof imgID !== 'undefined') {
                  svg.setAttribute('id', imgID);
              }

              if(typeof imgClass !== 'undefined') {
                  svg.setAttribute('class', imgClass + ' replaced-svg');
              }

              svg.removeAttribute('xmlns:a');

              el.parentNode.replaceChild(svg, el);
        })
});


/* Detect CSS Ellipsis in JavaScript and a title */
function isEllipsisActive(element) {
    return element.offsetWidth < element.scrollWidth;
}
Array.from(document.querySelectorAll('.type-sub-link-block h3'))
.forEach(element => {
    if (isEllipsisActive(element)) {
    element.title = element.innerText;
    }
});

/* Hide parent element with onclick function - onclick="dismiss(this);" */
function dismiss(element){
    element.parentNode.style.display='none';
};


document.addEventListener("DOMContentLoaded", () => {
    let isbgani = document.querySelector(".is-bg-ani");
    if(isbgani) {
        window.setTimeout(function() {
            isbgani.classList.add("is-bg-active");
        }, 500);
    }
});