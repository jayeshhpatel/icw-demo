/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip()

    $("[data-toggle=popover]").popover({
        html : true,
        trigger: 'click',
        content: function() {
            var content = $(this).attr("data-popover-content");
            return $(content).children(".popover-body").html();
        }
    });

    /* Header - Search */
    if ($('.collapsible-search').length) {
		$(".collapsible-search").click(function() {
            if($('.navbar-collapse.collapse').hasClass('show')){
                $(".navbar--toggler").trigger( "click" );
                $(".navbar--toggler").stop(true).removeClass("active");
                if($(this).hasClass('active')){
                    $(this).stop(true).removeClass("active");
                }
            }
			$(this).stop(true).toggleClass("active");
            $("#collapsible-searchbox").stop(true).slideToggle("fast");
           // $('#collapsible-searchbox input.form-control').trigger('focus')
            return false;
	    });
    }

    /* Header - Mobile Menu */
    if ($('.navbar--toggler').length) {
		$(".navbar--toggler").click(function() {
            $(this).stop(true).toggleClass("active");

            $("#collapsible-searchbox").stop(true).slideUp("fast");
            $(".collapsible-search").stop(true).removeClass("active");
	    });
    }
    
    /* Login - Flip */
    if ($('.btn-flip-action').length) {
        $(document).on('click', '.btn-flip-action', function() {
            //console.log("hi");
            $(this).parents('.flip').find('.card-flip').toggleClass('flipped');
        });
    }
    
    /* Login - Password */
    if ($('.toggle-password').length) {
        $(document).on("click", ".toggle-password", function() {
                $(this).toggleClass("_hide");
                var input = $($(this).attr("data-toggle"));
            if (input.attr("type") == "password") {
                input.attr("type", "text");
                $(this).text("Hide");
            } else {
                input.attr("type", "password");
                $(this).text("Show");
            }
        });
    }

    /* Badge */
    if ($('.is-badge').length) {
        $(".is-badge").click(function() {
            $(this).toggleClass("selected");
        });
    }
    if ($('.is-badge-with-close').length) {
        $(".is-badge-with-close").click(function() {
            $(this).toggleClass("selected");
            $(this).toggleClass("icon-close");
        });
    }

   /* CSS3 ripple Animation effect in Button */
    if ($(".btn-ripple").length) {
        //$(".btn-ripple").click(function (e) {
        $( "body" ).delegate( ".btn-ripple, .slick-arrow", "click", function(e) {
        // Remove any old one
        $(".ripple").remove();
        
            // Setup
            var posX = $(this).offset().left,
                posY = $(this).offset().top,
                buttonWidth = $(this).width(),
                buttonHeight =  $(this).height();
            
            // Add the element
            $(this).prepend("<span class='ripple'></span>");
            
            // Make it round!
            if(buttonWidth >= buttonHeight) {
                buttonHeight = buttonWidth;
            } else {
                buttonWidth = buttonHeight; 
            }
            
            // Get the center of the element
            var x = e.pageX - posX - buttonWidth / 2;
            var y = e.pageY - posY - buttonHeight / 2;
            
            // Add the ripples CSS and start the animation
            $(".ripple").css({
                width: buttonWidth,
                height: buttonHeight,
                top: y + 'px',
                left: x + 'px'
            }).addClass("rippleEffect");
        });
    } 

    /* Fixed Header - light header */
	if ($('.sticky-header').length) {
        var wheight = $( window ).height();
        var hheight = $('.sticky-header').outerHeight();
        var dheight = $( document ).height();
        if(dheight > (wheight+hheight)) {
            var stickyHeaderTop = $('.sticky-header .menu-header').offset().top;
            $(window).scroll(function() {
                if($(this).scrollTop() > stickyHeaderTop){
                    $("body").addClass("is--fixed");
                    $(".sticky-header .menu-header").addClass("is-fixed");
                }
                else if($(this).scrollTop() <= stickyHeaderTop){
                    $("body").removeClass("is--fixed");
                    $(".sticky-header .menu-header").removeClass("is-fixed");
                }
            });
            $(window).scroll();
        }
    }
    
    /* scroll page to top */
    if ($('.scroll-to-top').length) {
        var scrollTop = $(".scroll-to-top");
        $(window).scroll(function() {
            var topPos = $(this).scrollTop();
            if (topPos > 800) {
                $(scrollTop).addClass("on");
            } else {
                $(scrollTop).removeClass("on");
            }
        }); 
        //Click event to scroll to top
        $(scrollTop).click(function() {
            $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
        });
    }

    /* niceScroll */
    if ($().niceScroll) {
        window.prettyPrint && prettyPrint();
        // var nice = $("html").niceScroll({
        //     cursorwidth:"10px",
        //     cursoropacitymin:0.4,
        //     cursorcolor:'#4e1c65',
        //     cursorborder:"1px solid #592074",
        //     cursorborderradius:5,
        // });
        // $("html").getNiceScroll().resize();

        if ($('._scrollbar').length) {
            $('._scrollbar').niceScroll({
                cursorwidth:"10px",
                //cursoropacitymin:0.4,
                cursorcolor:'#DFDFDF',
                cursorborder:'none',
                cursorborderradius:5,
                autohidemode:'leave'
            });
            $('._scrollbar').getNiceScroll().resize();
        }
    }

    /* Fullscreen Zoom */
    if ($('.zoom-action').length) {
        $(".zoom-action").click(function (e) {
            e.preventDefault();
            var $this = $(this);
            if ($this.hasClass('active-full')) {
                $this.removeClass('active-full');
            }
            else {
                $this.addClass('active-full');
            }
            $(this).closest('.zoom-panel').toggleClass('zoom-fullscreen');

            $('.card-slider-full').slick('refresh');
        });
    }

    /* Slider Full */
    if ($('.card-slider-full').length) {
       var slideCount = $('.slideCount');
       var slickSlide = $('.card-slider-full');
     
       slickSlide.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
         //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
         var i = (currentSlide ? currentSlide : 0) + 1;
         $(this).parents('.main-slider-full-block').find('.slideCount').html('<span class="slideCountItem">page ' + i + '</span> of ' + '/' + ' <span class="slideCountAll">' + slick.slideCount + '</span>');
       });

        slickSlide.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            focusOnSelect: true,
            infinite: true,
            centerMode: true,
            centerPadding: '10%',
            responsive: [
                {
                  breakpoint: 1250,
                  settings: {
                    arrows: false,
                    dots: true,
                    centerPadding: '10%',
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
        });

        slickSlide.on('afterChange',function(event, slick, currentSlide){
            $(this).parents('.main-slider-full-block').find('.slide-note-popup').slideUp(300);
            $(this).parents('.main-slider-full-block').find('.add-slide-note').slideDown();
        });

        $(".slick-active").prev().addClass('prevdiv');
        $(".slick-active").next().addClass('nextdiv');
    }

    /* Slider Full Note View */
    $(".main-slider-full-block ._add-slide-note").click(function(e) {
        e.preventDefault();
            $(this).parents('.main-slider-full-block').find('.add-slide-note').slideUp(300, function(){
            $(this).parents('.main-slider-full-block').find('.slide-note-popup').slideDown(500);

            if ($('._scrollbar').length) {
                $('._scrollbar').niceScroll({
                    cursorwidth:"10px",
                    //cursoropacitymin:0.4,
                    cursorcolor:'#DFDFDF',
                    cursorborder:'none',
                    cursorborderradius:5,
                    autohidemode:'leave'
                });
                $('._scrollbar').getNiceScroll().resize();
            }
        });
    });
    $(".main-slider-full-block ._close-slide-note").click(function(e) {
        e.preventDefault();
            $(this).parents('.main-slider-full-block').find('.slide-note-popup').slideUp(300, function(){
            $(this).parents('.main-slider-full-block').find('.add-slide-note').slideDown(500);
            if ($('._scrollbar').length) {
                $('._scrollbar').niceScroll({
                    cursorwidth:"10px",
                    //cursoropacitymin:0.4,
                    cursorcolor:'#DFDFDF',
                    cursorborder:'none',
                    cursorborderradius:5,
                    autohidemode:'leave'
                });
                $('._scrollbar').getNiceScroll().resize();
            }
        });
    });

    /* Show/Hide Div with  [data-related]*/
    $('[data-related]').on("click", function(e) {
        e.preventDefault();
        $("[id=" + $(this).attr("data-related") + "]").addClass("active");
        $("div._showhide").hide();
        $("[id=" + $(this).attr("data-related") + "]").fadeIn(800);
        return false;
    });

    /* Slider - Card View */
    if ($('.card-slider').length) {
        $('.card-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            focusOnSelect: false,
            infinite: true,
            responsive: [
                {
                  breakpoint: 1300,
                  settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 4
                  }
                },
                {
                    breakpoint: 1280,
                    settings: {
                      arrows: false,
                      dots: true,
                      slidesToShow: 3
                    }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    centerPadding: '80px',
                  }
                },
                {
                    breakpoint: 767,
                    settings: {
                      arrows: false,
                      dots: true,
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      centerMode: true,
                      centerPadding: '50px',
                    }
                  },
                {
                    breakpoint: 600,
                    settings: {
                      arrows: false,
                      dots: true,
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      centerMode: true,
                      centerPadding: '50px',
                    }
                  },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '50px',
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
        });

        $('.card-slider').on('afterChange',function(event, slick, currentSlide){
            $('.card-popup-info-mini').hide().removeAttr('style').find('.show--info').html('');
        });
    }
    
    /* Slider - Card View | HOVER with-tooltip */
    if ($('.with-tooltip').length) {
        $( ".card-slider .with-tooltip" ).mouseenter(function(e) {
        //$(".card-slider").on("click", ".with-tooltip", function(e) {
        //$(".card-slider").delegate("click",".with-tooltip",function(e){
        e.preventDefault();
        
        var prevTarget = $(this).parents('.card-slider').attr('data-prev');
    
        //console.log(prevTarget);
        var currentSlideHtml = $(this).parents('.slick-itam').find('.card-popup-info--getminidata').clone();
        $('.card-slider .with-tooltip').removeClass("active");
        $(this).addClass('active');

        $(prevTarget).removeAttr('style').find('.show--info').html('');

       // $(prevTarget).fadeIn(500);
        

            var activeWidth = $(this).parents('.card-list').innerWidth()-10;
            //var itemPos = $(this).parents('.card-list').position();
            var sliderPos = $(this).parents('.card-slider').offset().left-5;
            var itemPos = $(this).parents('.card-list').offset().left;
            var infoPos = itemPos - sliderPos;
            $(prevTarget).css({
                "left":infoPos+ "px", 
                "width": activeWidth + "px"
            });
            
            $(prevTarget + ' .show--info').html("");
           // setTimeout(function(){ 
                $(prevTarget + ' .show--info').html(currentSlideHtml.html());
            //}, 10);

            $(prevTarget).delay(100).stop(true,true).fadeIn('200');
        });

        $(".card-popup-info-mini").on("click",".close",function(e){
            e.preventDefault();
            $(this).parents('.card-popup-info-mini').fadeOut("slow", function(){
                $(this).parents('.card-popup-info-mini').find('.show--info').html("");
            });
        });

        $( ".row-card-itams .col-card-itam .with-tooltip" ).mouseenter(function(e) {
        // $(document).on("click", ".row-card-itams .col-card-itam .with-tooltip", function(e) {
        // $(".row-card-itams .col-card-itam").delegate( ".with-tooltip", "click", function(e) {
            e.preventDefault();
            var prevTarget = '';
            var prevTargetPos = '';
            var dPos = '';
            var activeHeight = '';
            var topPos = '';
            var topDeff = ''; 
            var topPx = '';

            var prevTarget = $(this).parents('.row-card-itams').attr('data-prev');
            //console.log('prevTarget'+ prevTarget);
    
            var currentSlideHtml = $(this).parents('.col-card-itam').find('.card-popup-info--getminidata').clone();
            $('.row-card-itams .with-tooltip').removeClass("active");
            $(this).addClass('active');

            $(prevTarget).removeAttr('style').find('.show--info').html('');

            //$(prevTarget).show();
                var activeWidth         = $(this).parents('.card-list').innerWidth();
                //var itemPos           = $(this).parents('.card-list').position();
                //var sliderPos           = $(this).parents('.row-card-itams').offset().left;
                var itemPos             = $(this).parents('.col-card-itam').offset().left;
                var infoPos             = itemPos;

                var prevTargetPos   = $(prevTarget).outerHeight(true);
                var dPos            = $(this).parents('.col-card-itam').outerHeight(true);
                var activeHeight    = $(this).parents('.col-card-itam').height();
                var topPos          = $(this).parents('.col-card-itam').offset().top + $(this).parents('.col-card-itam').outerHeight(true);
                var topDeff         = prevTargetPos - activeHeight;
                var topPx           = (topPos-dPos-topDeff)+40;
                //  console.log('prevTargetPos '+prevTargetPos)
                //  console.log('dPos '+dPos)
                //  console.log('activeHeight '+activeHeight)
                //  console.log('topPos '+ topPos)
                //  console.log('topDeff '+ topDeff)
                //  console.log('topPos-dPos '+ topPos-dPos);
                $(prevTarget).css({
                    "left":infoPos+ "px", 
                    "top":topPx+ "px", 
                    "width": activeWidth + "px"
                });
                
                $(prevTarget + ' .show--info').html("");
                // setTimeout(function(){ 
                    $(prevTarget + ' .show--info').html(currentSlideHtml.html());
                // }, 10);
                $(prevTarget).delay(100).stop(true,true).fadeIn('200');
        });

        $( ".card-popup-info-mini" ).mouseleave(function(e){
            e.preventDefault();
            //$('.card-popup-info-mini').fadeOut(500).removeAttr('style').find('.show--info').html('');
            $(".card-popup-info-mini").delay(100).stop(true,true).fadeOut('100');
        });
    }

    /* Team Slider 2 Grid View */
    if ($('.team-slider').length) {
        $('.team-slider').on('init', function (event, slick, direction) {
            // check to see if there are one or less slides
            if (slick.slideCount <= 1) {
                // remove dots
                $('.team-slider .slick-dots').hide();
            } 
        });
        $('.team-slider').slick({
            dots: true,
            speed: 300,
            arrows: false,
            slidesPerRow: 3,
           // infinite: true,
            rows: 2
        });
    }

    /* Team Slider */
    if ($('.team-slider-list').length) {
        $('.team-slider-list').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            focusOnSelect: false,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        arrows: false,
                        slidesToShow: 4,
                        centerMode: true,
                        centerPadding: '80px',
                    }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerMode: true,
                    centerPadding: '80px',
                  }
                },
                {
                    breakpoint: 767,
                    settings: {
                      arrows: false,
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      centerMode: true,
                      centerPadding: '50px',
                    }
                  },
                {
                    breakpoint: 600,
                    settings: {
                        arrows: false,
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      centerMode: true,
                      centerPadding: '50px',
                    }
                  },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    centerPadding: '50px',
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
        });
    }

    /* FAQs */
    if($('.faq-container').length) {
        $('.faq-action').click(function(j) {
            var dropDown = $(this).closest('.faq-container').find('.faq-box-body');
            $('.faq-container').find('.faq-box-body').not(dropDown).slideUp();
            
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).closest('.main-container').find('.faq-box-header').removeClass('active');
            } else {
                $(this).closest('.main-container').find('.faq-action.active').removeClass('active');
                $(this).closest('.main-container').find('.faq-box-header.active').removeClass('active');
                $(this).addClass('active');
                $(this).closest('.faq-container').find('.faq-box-header').addClass('active');
            }

            var faqtop = $(this).closest('.faq-container');
            var offsetMenu = $('.navbar-mainmenu').height();
            dropDown.stop(false, true).slideToggle(500,"swing", function(){
                $('html,body').animate({
                    scrollTop: faqtop.offset().top-offsetMenu-30
                }, 300);
            });

            $('.card-popup-info-mini').hide().removeAttr('style').find('.show--info').html('');
            j.preventDefault();
        });
    }

    /* Collapse +/- */
    if($('.collapse-container').length) {
        $('.collapse-action').click(function(j) {
            var dropDown = $(this).closest('.collapse-container').find('.collapse-box-body');
            $('.collapse-container').find('.collapse-box-body').not(dropDown).slideUp();
            
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).closest('.collapse-container').find('.collapse-box-header').removeClass('active');
            } else {
                $(this).closest('.main-container').find('.collapse-box-header.active').removeClass('active');
                //$(this).closest('.collapse-container').find('.collapse-action.active').removeClass('active');
                $(this).addClass('active');
                $(this).closest('.collapse-container').find('.collapse-box-header').addClass('active');
            }

            var collapsetop = $(this).closest('.collapse-container');
            var offsetMenu = $('.navbar-mainmenu').height();
            dropDown.stop(false, true).slideToggle(500,"swing", function(){
                $('html,body').animate({
                    scrollTop: collapsetop.offset().top-offsetMenu-30
                }, 300);
            });
            j.preventDefault();
        });
    }

    /* input-slider */
    if ($('.input-slider').length) {
        $(".input-slider").slider({
            formatter: function(value) {
                return  value + ' mins';
            }
        });
    }

    /* model - Video */
    if ($('.btn-video-model').length) {
        // Gets the video src from the data-src on each button
        var $videoSrc = '';  
        $("body").find(".videoImpactModal").remove();
        $("body").append('<div class="modal videoImpactModal fade" id="playVideo" tabindex="-1" role="dialog" aria-labelledby="playVideoLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-body"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="" id="getvideo" allowscriptaccess="always" allow="autoplay"></iframe></div></div></div></div></div>');
        $('.btn-video-model').click(function(e) {
            e.preventDefault();
            $videoSrc = $(this).data( "src" );
        });
        //console.log($videoSrc);

        // when the modal is opened autoplay it  
        $('.videoImpactModal').on('shown.bs.modal', function (e) {
            // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
                $("#getvideo").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
        })

        // stop playing the youtube video when I close the modal
        $('.videoImpactModal').on('hide.bs.modal', function (e) {
            // a poor man's stop video
                $("#getvideo").attr('src',$videoSrc);
        })
    }


    /* Rating Select Action */
    if ($('.rating-select-action').length){
        $('.rating-select-action span').hover(function(){ // $('.rating-select-action span').on('click', function(){
            var onStar = parseInt($(this).data('value'), 10); // The star currently selected
            var stars = $(this).parent().children('span.star');
            
            for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('checked');
            }
            
            for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('checked');
            }
            
            // JUST RESPONSE (Not needed)
            var ratingValue = parseInt($('rating-select-action span.checked').last().data('value'), 10);
          // var msg = "";
            if (ratingValue > 1) {
               // msg = "Thanks! You rated this " + ratingValue + " stars.";
               $('#rating_submit').prop("disabled", true);
            }
            else {
               // msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
               $('#rating_submit').prop("disabled", false);
            }
        });

        $('.rating-select-action span').on('click', function(){
            $('.alert-view').hide().html('<div class="alert alert-success" role="alert">A simple success alert—check it out!</div>').slideDown();
            setTimeout(function(){
                $('.alert-view').slideUp().html('');
            }, 4000);
        });

        $('#rating_submit').on('click', function(){
            alert("rating submitted!");
        });
    }

    if ($('.play-iframe').length){
        // $('.play-iframe').click(function(event){
        //     event.preventDefault();
        // //var url = $(this).html(); //this will not work	
        //     $(this).html('<iframe width="940" height="529" src="https://www.youtube.com/embed/ZsCL47eqgrs?autoplay=1" frameborder="0" allowfullscreen></iframe>');
        //     //$(this).hide();
        //     //$('video-poster').css('z-index','-1');
            
        // });

        $('.play-iframe').click(function(){		
            //videowidth = "100%"; //$(this).width();
            //videoheight = $(this).height();
            videourl = $(this).data('videosrc')+"?autoplay=true";
            
            video = '<div class="play-with-iframe"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="'+videourl+'" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>';
            $(this).replaceWith(video);
            return false;
        });
    }


    /*slider-onboarding*/
    var $sliderOnboarding = $('.slider-onboarding');
    if ($sliderOnboarding.length) {
        var currentSlide;
        var slidesCount;
        var sliderCounter = document.createElement('div');
        sliderCounter.classList.add('slider__counter');
        
        var updateSliderCounter = function(slick, currentIndex) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;
            $(sliderCounter).text(currentSlide + ' of ' +slidesCount)
        };

        $sliderOnboarding.on('init', function(event, slick) {
            $sliderOnboarding.append(sliderCounter);
            updateSliderCounter(slick);
        });

        $sliderOnboarding.on('afterChange', function(event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
        });

        $sliderOnboarding.slick({
            infinite: false
        });

        $('.onboardingModal').on('shown.bs.modal', function (e) {
            $sliderOnboarding.slick('setPosition');
            setTimeout(function(){
                $('.container-modal-slider').removeClass('loader-slick');
                $('.wrap-modal-slider').addClass('open');
                $sliderOnboarding.slick('setPosition');
            }, 1000);
        })
    }


    /* Login Form
    /*-----------------------------------------------------------------------------------*/
    if ($('.login-form').length) {
        $(document).on('keypress', '.login-form input', function(event) {
            if(event.which == 13) {
              $(this).closest('form').find('.form-submit').mousedown();
            }
        });
        var v = $(".login-form").validate({
            rules: {
                lf_email: {
                    required: true,
                    email: true
                },
                lf_password: {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                lf_email: "Please enter a valid email address",
                lf_password: {
                  required: "Please provide a password",
                  minlength: "Your password must be at least 5 characters long"
                },
            },
            errorElement: "span",
            errorClass: "error",
            errorPlacement: function(error, element) {
                error.insertBefore(element); 
            },
            submitHandler: function() {
               // form.submit();

                $(".login-form").append('<div class="loader"></div>');
                setTimeout(function(){
                    alert("Login Submitted!");
                }, 1000);
                return false;
               }
            
        });
    }

    /* Login Form - Popup
    /*-----------------------------------------------------------------------------------*/
    if ($('.login-form-model').length) {
        var v = $(".login-form-model").validate({
            rules: {
                lf_email_popup: {
                    required: true,
                    email: true
                },
                lf_password_popup: {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                lf_email: "Please enter a valid email address",
                lf_password: {
                  required: "Please provide a password",
                  minlength: "Your password must be at least 5 characters long"
                },
            },
            errorElement: "span",
            errorClass: "error",
            errorPlacement: function(error, element) {
                error.insertBefore(element); 
            },
            submitHandler: function() {
               // form.submit();

                $(".login-form-model").append('<div class="loader"></div>');
                setTimeout(function(){
                    alert("Login Submitted!");
                }, 1000);
                return false;
               }
            
        });
    }

    /* Forgotten Password Form
    /*-----------------------------------------------------------------------------------*/
    if ($('.forgotten-password-form').length) {
        var v = $(".forgotten-password-form").validate({
            rules: {
                lf_email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                lf_email: "Please enter a valid email address",
            },
            errorElement: "span",
            errorClass: "error",
            errorPlacement: function(error, element) {
                error.insertBefore(element); 
            },
            submitHandler: function() {
               // form.submit();

                $(".forgotten-password-form").append('<div class="loader"></div>');
                setTimeout(function(){
                    alert("Forgotten Password Submitted!");
                }, 1000);
                return false;
               }
            
        });
    }

    /* Register Form
    /*-----------------------------------------------------------------------------------*/
    if ($('.register-form').length) {
        var v = $(".register-form").validate({
            rules: {
                rf_country: {
                required: true
                },
                rf_fname: {
                required: true
                },
                rf_surname: {
                required: true
                },
                rf_speciality: {
                required: true
                },
                rf_therapyarea: {
                required: true
                },
                bf_email: {
                required: true,
                email: true
                }
        
            },
            errorElement: "span",
            errorClass: "error",
            errorPlacement: function(error, element) {
                    error.insertBefore(element); 
            },
        });
    
        $('.register-form #step1 input, .register-form #step1 select').on('keyup blur', function () {
            if ($('.register-form').valid()) {
                $('.register-form #step1 button.btn').prop('disabled', false);
            } else {
                $('.register-form #step1 button.btn').prop('disabled', 'disabled');
            }
        });
    
        $('.register-form #step2 input, .register-form #step2 select').on('keyup blur', function () {
            if ($('.register-form').valid()) {
                $('.register-form #step2 button.btn').prop('disabled', false);
            } else {
                $('.register-form #step2 button.btn').prop('disabled', 'disabled');
            }
        });
    
        $("._next-step1").click(function() {
            if (v.form()) {
                $(".register-form .step-form-pane").hide();
                $(".register-form #step2").fadeIn(1000);
                $('.register-form .progressbar-dots').addClass('active');
            }
        });
        $("._submit-step").click(function() {
            if (v.form()) {
                //$("#loader").show();
                $(".register-form").append('<div class="loader"></div>');
                setTimeout(function(){
                   // alert("Registration Successfully");
                $(".register-form").parents('.card-flip').find('.face.back').addClass("sent-msg-content")
                $(".register-form").parents('.card-flip').find('.face.back').html('<div class="steps-form-content"><h2>Thank you for the registration</h2><p class="mt-2 mb-0">An email has been sent to you to set your password.</p></div>');
                }, 1000);
                return false;
            }
        });
    }

    // mobileContainer();
    // $(window).resize(function() {
    //     mobileContainer();
    // });

// updateContainer();
    // $(window).resize(function() {
    //     updateContainer();
    // });
});

// function mobileContainer() {
//     $("body").removeClass("is--mobile-nav");
//     if(window.matchMedia("(max-width: 1023px)").matches){
//         $("body").addClass('is--mobile-nav');
//     } else{
//         $("body").removeClass('is--mobile-nav');
//     }
// }


function updateContainer() {
    $(".screen-alert-model").remove();
    if(window.matchMedia("(max-width: 1023px)").matches){
        // The viewport is less than 768 pixels wide
        //alert("This is a mobile device.");
        $("body").addClass('screen-alert');
        $("body").append( '<div class="screen-alert-model d-flex flex-column justify-content-center align-items-center" oncontextmenu="return false"><div class="content text-center"><h2>Mobile Screen Resolution Not Support.</h2><p>Recommended Screen Resolution is site best viewed at minimum 1024 x 768 resolution.</p></div></div>' );
    } else{
        // The viewport is at least 768 pixels wide
        //alert("This is a tablet or desktop.");
        $("body").removeClass('screen-alert');
        $(".screen-alert-model").remove();
    }
}


$(window).on('shown.bs.modal', function() {
    if ($('._scrollbar').length) {
        $('._scrollbar').niceScroll({
            cursorwidth:"10px",
            //touchbehavior: true,
            //cursoropacitymin:0.4,
            cursorcolor:'#DFDFDF',
            cursorborder:'none',
            cursorborderradius:5,
            autohidemode:false
        });
        $('._scrollbar').getNiceScroll().resize();
    }
});

/* Perspective Hover
/*-----------------------------------------------------------------------------------*/
/*(function($){
    var card = $(".hover-perspective");
    card.on('mousemove', function (e) {
        var x = e.clientX - $(this).offset().left + $(window).scrollLeft();
        var y = e.clientY - $(this).offset().top + $(window).scrollTop();
         
        var rY = map(x, 0, $(this).width(), -10, 10);
        var rX = map(y, 0, $(this).height(), -10, 10);
     
        $(this).children(".hover-perspective-inner").css("transform", "rotateY(" + rY + "deg)" + " " + "rotateX(" + -rX + "deg)");
    });
     
    card.on('mouseenter', function () {
        $(this).children(".hover-perspective-inner").css({
            transition: "all " + 0.05 + "s" + " linear",
        });
    });
 
    card.on('mouseleave', function () {
        $(this).children(".hover-perspective-inner").css({
            transition: "all " + 0.2 + "s" + " linear",
        });
        $(this).children(".hover-perspective-inner").css("transform", "rotateY(" + 0 + "deg)" + " " + "rotateX(" + 0 + "deg)");
    });
         
    function map(x, in_min, in_max, out_min, out_max)
    {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
})(jQuery);*/