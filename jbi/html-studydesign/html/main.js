window.jQuery = $;
$(document).ready(init);

function init() {
	leaveSite();
	lungPopups();
	definitions();
	changeSection();
	closeDefinitionScroll();
}

function leaveSite() {

	var externalLink;

	$(".bt--popup--action").on("click", function(e){
		e.stopPropagation();
	});

	$(".bt--btn--continue").on("click", function(e){
		window.open(externalLink);
	});

	$('a[target="_blank"]').click(function( event ) {

		var that = $(this); 


		if ( !that.hasClass("bt--link") ) {
			event.preventDefault();  
			externalLink = $(this).attr('href');
			$(".breztri--popup--leavesite").css("display", "flex");
			setTimeout(function(){ $(".breztri--popup--leavesite").addClass("active"); },100);
		}

		

	});

	

	$(".breztri--popup--leavesite, .bt--popup--close").on("click", function(e){
		e.stopPropagation();
		$(".breztri--popup--leavesite").removeClass("active");

		setTimeout(function(){ $(".breztri--popup--leavesite").hide() },500);
	});

	$(window).scroll(function() {
  		$(".bt--s--def").removeClass("active");
  		$(".bt--inhaler-pop").removeClass("active");
  		$(".bt--study-design").removeClass("active");
  		setTimeout(function(){
  			$(".bt--s--def").hide();
  			$(".bt--study-design").hide();
  			$(".bt--inhaler-pop").hide();
  		}, 500);
	});

}

function lungPopups() {
	var $button_1 = $(".bt--study-1 .bt--study");
	var $modal_1 = $(".bt--lung--1--outer-wrapper");

	$button_1.on("click", function(e) {
		e.stopPropagation();
		var whichSection = parseInt($(this).parents().attr("class").substr(-1));
		var whichStudy = parseInt($(this).attr("data"));

		var swiper;

		$.magnificPopup.open({
			showCloseBtn: false,
			removalDelay: 300,
			mainClass: 'mfp-fade',
			closeOnBgClick: true,
			items: {
				src: $modal_1
			},
			callbacks: {
				open: function () {
					// console.log(whichStudy);
					swiper = new Swiper(".bt--lung--1--popups", {
						initialSlide: whichStudy - 1,
						simulateTouch: true,
						centeredSlides: true,
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						},
						a11y: false,
						watchSlidesVisibility: true,
					});

					swiper.on("slideChange", function() {
						var slideIndex = swiper.realIndex + 1;
      					SecAnim(whichSection, slideIndex);
      					closeDefinitions();
					});
					
				},
				beforeClose: function() {
					closeDefinitions();
				},
				afterClose: function () {
					swiper.destroy(false, true);
					closeDefinitions();
				}
			}
		});

		SecAnim(whichSection, whichStudy);
		console.log(whichSection, slideIndex);

		e.preventDefault();
		
	});

	var $button_2 = $(".bt--study-2 .bt--study");
	var $modal_2 = $(".bt--lung--2--outer-wrapper");

	$button_2.on("click", function(e) {
		e.stopPropagation();

		var whichSection = parseInt($(this).parents().attr("class").substr(-1));
		var whichStudy = parseInt($(this).attr("data"));

		var swiper2;

		$.magnificPopup.open({
			showCloseBtn: false,
			removalDelay: 300,
			mainClass: 'mfp-fade',
			closeOnBgClick: true,
			items: {
				src: $modal_2
			},
			callbacks: {
				open: function () {
					// console.log(whichStudy);
					swiper2 = new Swiper(".bt--lung--2--popups", {
						initialSlide: whichStudy - 1,
						simulateTouch: true,
						centeredSlides: true,
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						},
						a11y: false,
						watchSlidesVisibility: true,
					});

					swiper2.on("slideChange", function() {
						var slideIndex = swiper2.realIndex + 1;
      					SecAnim(whichSection, slideIndex);
      					closeDefinitions();
					});
					
				},
				beforeClose: function() {
					closeDefinitions();
				},
				afterClose: function () {
					swiper2.destroy(false, true);
				}
			}
		});


		SecAnim(whichSection, whichStudy);
		console.log(whichSection, whichStudy);

		e.preventDefault();
		
	});

	$(".bt--pop-close, .bt--lung--1--outer-wrapper, .bt--lung--2--outer-wrapper").on("click", function(e){
		$.magnificPopup.close();
	});

	$(".swiper-button-next, .swiper-button-prev, .bt--popup").on("click", function(e){
		e.stopPropagation();
	});

	// $("#breztri--interactive").on("click", function(e){
	// 	e.stopPropagation();
	// 	$(".bt--lung--popups").removeClass("active");
	// 	$(".bt--lung-images").removeClass("popup");
	// 	$(".bt--definition").removeClass("active");
	// 	setTimeout(function(){ 
	// 		$(".bt--lung--popups").hide();
	// 		$(".bt--lung-images").removeClass("fast");
	// 		$(".bt--lungs .bt--study-1, .bt--lungs .bt--study-2").removeClass("fade");
	// 		$(".bt--definition").hide();
	// 	},500);

	// });

}


function SecAnim(sec, pop) {

	// console.log("called: " + sec, pop);	

	closeDefinitions();

	if ( sec == "1" && pop == "2" ) {
		// console.log("hello")
	}

	switch(true) {
		case ( sec == "1" && pop == "1" ) : 
			popup1(1,1);
		break;
		case ( sec == "1" && pop == "2" ) : 
			popup2(1,2);
		break;
		case ( sec == "1" && pop == "3" ) : 
			popup3(1,3);
		break;
		// case ( sec == "1" && pop == "4" ) : 
		// 	popup4(1,4);
		// break;
		case ( sec == "1" && pop == "5" ) : 
			popup7(1,7);
		break;
		case ( sec == "1" && pop == "7" ) : 
			popup7(1,7);
		break;

		case ( sec == "2" && pop == "1" ) : 
			popup1(2,1);
		break;
		case ( sec == "2" && pop == "2" ) : 
			popup2(2,2);
		break;
		case ( sec == "2" && pop == "3" ) : 
			popup4(2,4);
		break;
		case ( sec == "2" && pop == "4" ) : 
			popup3(2,3);
		break;
		case ( sec == "2" && pop == "5" ) : 
			popup7(2,5);
		break;
	}


}

function popup1(sec, pop) {

	setTimeout(function(){
		$(".bt--lung--" + sec + "--popups .bt--popup-" + pop + " .bt--study1--head div").each(function(i) {
	  		var that = $(this);
			var num = i + 1;
			setTimeout(function(){  
				that.addClass("active") 
			}, i * 300);
		});
		$(".bt--lung--" + sec + "--popups .bt--popup-" + pop + " .bt--study1--body div").each(function(i) {
	  		var that = $(this);
			var num = i + 1;
			setTimeout(function(){  
				that.addClass("active") 
			}, i * 300);
		});
	},300);
}
function popup2(sec, pop) {
	setTimeout(function(){
		$(".bt--lung--" + sec + "--popups .bt--popup-" + pop + " .bt--pop--content .bt--arm").each(function(i) {
	  		var that = $(this);
			var num = i + 1;
			setTimeout(function(){  
				that.addClass("active") 
			}, i * 300);
		});


	},300);
	setTimeout(function(){
		$(".bt--lung--" + sec + "--popups .bt--popup-" + pop + " .bt--center-content").addClass("active");
	},1500);
	setTimeout(function(){
		$(".bt--lung--" + sec + "--popups .bt--popup-" + pop + " .bt--right-content").addClass("active");
	},900);
}

function popup3(sec, pop) {
	setTimeout(function(){
		$(".bt--lung--" + sec + "--popups .bt--popup-" + pop + " .bt--left-content").addClass("active");
	},300);
	setTimeout(function(){
		$(".bt--lung--" + sec + "--popups .bt--popup-" + pop + " .bt--data-point-2").addClass("active");
	},600);
	setTimeout(function(){
		$(".bt--lung--" + sec + "--popups .bt--popup-" + pop + " .bt--pop--chart--line--cont").addClass("active");
	},900);
	setTimeout(function(){
		$(".bt--lung--" + sec + "--popups .bt--popup-" + pop + " .bt--data-point").addClass("active");
		$(".bt--lung--" + sec + "--popups .bt--popup-" + pop + " .bt--text-label").addClass("active");
	},1500);
	setTimeout(function(){
		$(".bt--lung--" + sec + "--popups .bt--popup-" + pop + " .bt--right-content").addClass("active");

	},1800);
}

function popup4(sec, pop) {
	setTimeout(function(){
		$(".bt--lung--" + sec + "--popups .bt--popup-" + pop + " .bt--center-content img").addClass("active");
	},300);

	setTimeout(function(){
		$(".bt--lung--" + sec + "--popups .bt--popup-" + pop + " .bt--left-content").addClass("active");
		$(".bt--lung--" + sec + "--popups .bt--popup-" + pop + " .bt--right-content").addClass("active");
	},800);
}

function popup5(sec, pop) {

	setTimeout(function(){
		$(".bt--lung--" + sec + "--popups .bt--popup-" + pop + " .bt--pop--chart--container .bt--pop--chart--line--cont").each(function(i) {
	  		var that = $(this);
			var num = i + 1;
			setTimeout(function(){  
				that.addClass("active") 
			}, i * 500);
		});


	},300);

}

function popup7(sec, pop) {

	setTimeout(function(){
		$(".bt--lung--" + sec + "--popups .bt--popup-" + pop + " .bt-row--content").each(function(i) {
	  		var that = this;
			var num = i + 1;
			setTimeout(function(){  
				$("ul li:nth-child(2)", that).addClass("active") 
			}, i * 125);
		});


	},300);

}



function definitions() {



	$(".bt--def-btn").on("click", function(e){
		e.stopPropagation();
		var whichDefClass = $(this).attr("class");
		var whichDef = whichDefClass.substring(whichDefClass.lastIndexOf("_")+1);
		// console.log(whichDef);

		$(".bt--definition_" + whichDef).show();

		$(".bt--definition:not(.bt--definition_" + whichDef + ")").removeClass("active");


		setTimeout(function(){

			$(".bt--definition:not(.bt--definition_" + whichDef + ")").hide();
		}, 500);

		setTimeout(function(){
			$(".bt--definition_" + whichDef).addClass("active");
		}, 100);


		var swiper;



	});

	$(".bt--definition").on("click", function() {
		var that = $(this);

		that.removeClass("active");
  		setTimeout(function(){
  			that.hide();
  		}, 500);

	});

	

	



}

function changeSection() {
	$(".bt--ethos-study").on("click", function(){
		$(".bt--lung--2--popups .bt--pop-close").click();
		setTimeout(function(){ $(".bt--study-1 .bt--study-4").click() },500);
	});
}

function closeDefinitionScroll() {
	$(window).scroll(function(){
	    closeDefinitions();
	});
}

function closeDefinitions() {
	// console.log("close-def");
	$(".bt--definition").removeClass("active");
	setTimeout(function(){
		$(".bt--definition").hide();
	}, 500);
}
