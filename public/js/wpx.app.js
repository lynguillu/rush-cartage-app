/*
Theme Name: Tribus - Multipurpose Template
Theme URI: http://preview.webpixels.ro/tribus-v1.0.1
Author: Webpixels
Author URI: http://www.webpixels.io
Version: 1.0
License URI: http://wrapbootstrap.com
*/

// On document ready functions
$(document).ready(function() {
    // GLOBAL VARIABLES
    var navbarOffsetTop = $('.header-affix').data('offset-top');

    // Affix navbar main
    makeNavbarAffixed();

    // Resize event for navbar affix reInit
    $(window).on('resize', function() {
        makeNavbarAffixed();
    });

    // Function for making navbar affixed
    function makeNavbarAffixed() {
        if ($(window).width() > 992) {
            $('.header-affix').affix({
                offset: {
                    top: navbarOffsetTop
                }
            });
        }
    }

    // Affix navbar before event fires
    $(".header-affix").on('affix.bs.affix', function() {
        // Variables
        var navAnimationIn = $(this).data('nav-animation');

        // Add a body class to before the affix event fires
        $('body').addClass('header-affixed');
        $('body').css({
            "padding-top": $('.navbar-main').height() + "px"
        });

        if ($(this).data('offset-top') > 0) {
            // Animate the affixed menu with Animate CSS (you can add any animation class you want)
            $(this).addClass('animated ' + navAnimationIn);
            $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('animated ' + navAnimationIn);
            });
        }
    });

    $(window).on('scroll', function() {
        if (!$('.header-affix').hasClass('affix')) {
            $('body').css({
                "padding-top": "0"
            });
        }
    });

    // Show navbar when scrolling back to top
    showNavbarOnScroll();

    // Resize event for navbar affix reInit
    $(window).on('resize', function() {
        showNavbarOnScroll();
    });

    function showNavbarOnScroll() {
        if ($(window).width() > 992) {
            if ($(".header-show-on-scroll").length > 0) {
                $(".header-show-on-scroll .navbar-main").headroom({
                    "offset": 800,
                    "tolerance": 5,
                    "classes": {
                        "initial": "animated",
                        "pinned": "slideInDown",
                        "unpinned": "slideOutUp"
                    }
                });
            }
        }
    }
    // Bootstrap - Submenu event for small resolutions
    if ($(window).width() < 991) {
        $('.dropdown-submenu > a').click(function() {
            //event.preventDefault();
            //event.stopPropagation();
            var parentDropdown = $(this).parent();

            if (parentDropdown.hasClass('open')) {
                $(parentDropdown).removeClass('open');
            } else {
                $(parentDropdown).addClass('open');
            }

            return false;
        })
    }

    // Fix the closing problem when clicking inside dopdown menu
    $('ul.dropdown-menu').on('click', function(event) {
        event.stopPropagation();
    });

    // Bootstrap selected
    $('.selectpicker').each(function(index, element) {
        $('.selectpicker').selectpicker({
            style: $(this).data('select-style'),
            size: $(this).data('select-size'),
            liveSearch: $(this).data('select-live-search'),
            mobile: $(this).data('select-mobile')
        });
    });

    // Input mask
    if ($('input-mask')[0]) {
        $('.input-mask').mask();
    }

    // Bootstrap Carousels
    $('.carousel').carousel({
        interval: 5000,
        pause: 'hover'
    });

    // Smooth scroll
    $('.scroll-me').bind('click', function(event) {
        // Animate scroll to the selected section
        $('html, body').stop(true, true).animate({
            scrollTop: $(this.hash).offset().top
        }, 600);

        event.preventDefault();
    });
    // Dynamic height taken from data attr
    if ($(".same-height").length > 0) {
        function sameHeight() {
            if ($(window).width() >= 992) {
                $(".same-height").each(function(index, element) {

                    var container = $(this).data("same-height");
                    var height = $("body").find(container).height();

                    // Set height
                    $(this).css({
                        "height": height + "px"
                    });
                });
            }
        }

        // Call function on window load
        sameHeight();

        // Call sameHeight function when window is resized
        $(window).on('resize', function() {

            sameHeight();
        });

    }

    // Masonry
    if($('.masonry').length > 0) {
        // init Masonry
        $('.masonry').each(function(index, element) {
            var $grid = $(this).masonry({
                itemSelector: '.masonry-item',
                columnWidth: $(this).find('.masonry-sizer').width(),
                percentPosition: true,
                gutter: $(this).find('.masonry-gutter-size').width()
            });

            // layout Masonry after each image loads
            $grid.imagesLoaded().progress( function() {
                $grid.masonry('layout');
            });
        });
    }
    // To top
	var offset = 300,
	//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
	offset_opacity = 1200,
	//duration of the top scrolling animation (in ms)
	scroll_top_duration = 700,
	//grab the "back to top" link
	$back_to_top = $('.back-to-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('back-to-top-is-visible') : $back_to_top.removeClass('back-to-top-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('back-to-top-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body, html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

    // Cube portfolio sorting bar
    if($(".cbp-filters-wrapper-affix").length > 0) {
        var filtersWrapperOffsetTop = 500;
        var animationComplete = false;

        // Affix elements container
        $('.cbp-filters-wrapper-affix').affix({
            offset: {
                top: filtersWrapperOffsetTop - 200,
                bottom: 100
            }
        });

        $(".cbp-filters-wrapper-affix").on('affix.bs.affix', function(){
            // Variables
            var animationIn = "fadeInUp";

            // Add a body class to before the affix event fires
            $('body').addClass('cbp-filters-wrapper-affixed');

            if(animationComplete == false){
                // Animate the affixed menu with Animate CSS (you can add any animation class you want)
                $(this).addClass('animated ' + animationIn);
                $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this).removeClass('animated ' + animationIn);
                    //animationComplete = true;
                });
            }
        });
    }

    // Swiper
    var productSwiper;
    if ($(".product-swiper-container").length > 0) {
        $(".product-swiper-container").each(function(index, element) {
            $(this).addClass('s-' + index);
            $(this).find('.swiper-pagination').addClass('sp-' + index);

            productSwiper = $('.s-' + index).swiper({
                speed: 400,
                loop: true,
                grabCursor: true,
                pagination: '.sp-' + index,
                paginationClickable: true,
                centeredSlides: false,
                preloadImages: false,
                lazyLoading: true,
                observer: true,
                observerParents: true

            });
        });
    }

    // Global swiper init
    if ($(".swiper-container").length > 0) {
        $(".swiper-container").each(function() {
            var swiper = new Swiper($(this), {
                pagination: '.swiper-pagination',
                slidesPerView: $(this).data('swiper-items'),
                paginationClickable: true,
                spaceBetween: $(this).data('swiper-space-between'),
                direction: 'horizontal',
                preventClicks: false,
                preventClicksPropagation: false,
                breakpoints: {
                    460: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 0
                    },
                    767: {
                        slidesPerView: $(this).data('swiper-xs-items'),
                        spaceBetweenSlides: 0
                    },
                    991: {
                        slidesPerView: $(this).data('swiper-sm-items'),
                        spaceBetweenSlides: $(this).data('swiper-sm-space-between')
                    }
                }
            });
        });
    }

    if ($(".swiper-container-centered").length > 0) {
        $(".swiper-container-centered").each(function() {
            var swiper = new Swiper('.swiper-container-centered', {
                pagination: '.swiper-pagination',
                slidesPerView: 'auto',
                centeredSlides: true,
                paginationClickable: true,
                spaceBetween: 30,
                initialSlide: 1,
                breakpoints: {
                    // when window width is <= 320px
                    768: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 0
                    },
                    // when window width is <= 480px
                    991: {
                        slidesPerView: 2,
                        spaceBetweenSlides: 0
                    }
                }
            });
        });
    }
    // Swiper gallery
    if ($(".swiper-gallery").length > 0) {
        $(".swiper-gallery").each(function() {
            var galleryTop = new Swiper('.gallery-top', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                spaceBetween: 10,
            });
            var galleryThumbs = new Swiper('.gallery-thumbs', {
                spaceBetween: 10,
                centeredSlides: true,
                slidesPerView: 'auto',
                touchRatio: 0.2,
                slideToClickedSlide: true
            });
            galleryTop.params.control = galleryThumbs;
            galleryThumbs.params.control = galleryTop;
        });
    }
    // Parallax
    if ($(".parallax-section").length > 0) {
        $(".parallax-section").parallax({
            speed: 0.15
        });
    }
    // Viewport animations
    $('.milestone-count').viewportChecker({
        callbackFunction: function(elem, action) {
            setTimeout(function() {
                $('.milestone-count').countTo({
                    formatter: function(value, options) {
                        return value.toFixed(options.decimals);
                    },
                    onUpdate: function(value) {
                        console.debug(this);
                    },
                    onComplete: function(value) {
                        console.debug(this);
                    }
                });
            }, 500);
        }
    });

    // Optional filters
    $("#btnToggleOptionalFilters").click(function() {
        var animateIn = $(this).data("animate-in");
        var animateOut = $(this).data("animate-out");

        if ($(this).hasClass("opened")) {
            $(".hidden-form-filters").addClass('hide');
            $(this).removeClass("opened");
        } else {
            $(this).addClass("opened");
            $(".hidden-form-filters").removeClass("hide");
        }
        return false;
    });

    // Disable Empty Links
    $("[href=#]").click(function(event) {
        event.preventDefault();
    });

    // Rating Stars
    var star = $(".rating span.star");

    star.hover(
        function() {
            $(this).addClass("over");
            $(this).prevAll().addClass("over");
        },
        function() {
            $(this).removeClass("over");
            $(this).prevAll().removeClass("over");
        }
    );
    star.click(function() {
        $(this).parent().children(".star").removeClass("voted");
        $(this).prevAll().addClass("voted");
        $(this).addClass("voted");
    });

    // Tooltip & Popover
    $('[data-toggle="tooltip"]').tooltip({
        placement: $(this).data('placement'),
        html: true
    });

    $('.pop').popover({
        placement: 'right',
        html: true
    });

    // CSS animate
    $(".css-animate").click(function() {
        var target = $($(this).data("target"));
        if (!target.hasClass("in")) {
            $(this).addClass('active');
            target.addClass('in');
        } else {
            $(this).removeClass('active');
            target.removeClass('in');
        }
    });

    // Animate on click with data attributes (based on the animate.css animations)
    $(".animate-click").click(function() {
        var animateIn = $(this).data("animate-in");
        var animateOut = $(this).data("animate-out");
        var animateTarget = $($(this).data("target"));
        var animateTrigger = $(this);

        if (animateIn != undefined || animateIn != "") {
            if (!animateTarget.hasClass("in")) {
                animateTarget.addClass("in animated " + animateIn);
                animateTarget.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    animateTarget.removeClass("animated " + animateIn);
                    animateTrigger.addClass("active");
                });
            } else if (animateTarget.hasClass("in")) {
                animateTarget.addClass("animated " + animateOut);
                animateTarget.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    animateTarget.removeClass("animated " + animateOut);
                    animateTrigger.removeClass("active");
                    animateTarget.removeClass("in");
                });
            }
        }
        return false;
    });

    // Morphext - Text rotators
	if($(".morphext").length > 0){
		$(".morphext").Morphext({
		    // The [in] animation type. Refer to Animate.css for a list of available animations.
		    animation: 'fadeIn',
		    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
		    separator: ";",
		    // The delay between the changing of each phrase in milliseconds.
		    speed: '3000',
		    complete: function () {
		        //alert($(this).data('animation'))
		    }
		});
	}

    // Collapse
    $('.collapse-wrapper .panel').on('shown.bs.collapse', function() {
        $(this).addClass('open');
    });

    $('.collapse-wrapper .panel').on('hidden.bs.collapse', function() {
        $(this).removeClass('open');
    });

    // WOW animation
    if ($('.has-wow-animation').length > 0) {
        wow = new WOW({
            boxClass: 'has-wow-animation',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        });
        wow.init();
    }

    // Collapse component settings
    $('.panel-group--style-1 .collapse, .panel-group--style-2 .collapse').on('shown.bs.collapse', function() {
        $(this).parent().find(".fa-chevron-right").removeClass("fa-chevron-right").addClass("fa-chevron-down");
    }).on('hidden.bs.collapse', function() {
        $(this).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-right");
    });

    //// SHOP functionalities
    // Plus - Minus control
    $('.spinner .btn:first-of-type').on('click', function() {
        $('.spinner input').val(parseInt($('.spinner input').val(), 10) + 1);
    });

    $('.spinner .btn:last-of-type').on('click', function() {
        $('.spinner input').val(parseInt($('.spinner input').val(), 10) - 1);
    });

    // Grid-List view for shop
    $('#list').click(function(event) {
        event.preventDefault();
        $('#products .grid-list-item').addClass('list-group-item');
    });

    $('#grid').click(function(event) {
        event.preventDefault();
        $('#products .grid-list-item').removeClass('list-group-item');
        $('#products .grid-list-item').addClass('grid-group-item');
    });

    // Product actions
    $('.shop-default-wrapper .product').on('mouseenter', function() {
        if ($(this).find('.product-actions').length > 0 && !$(this).find('.product-actions').hasClass('in')) {
            var productActions = $(this).find('.product-actions');

            productActions.addClass('in animated flipInY');
            productActions.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                productActions.removeClass('animated flipInY');
            });
        }
    });

    $('.shop-default-wrapper .product').on('mouseleave', function() {
        if ($(this).find('.product-actions').length > 0 && $(this).find('.product-actions').hasClass('in')) {
            var productActions = $(this).find('.product-actions');

            productActions.addClass('animated flipOutY');
            productActions.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                productActions.removeClass('in animated flipOutY');
            });
        }
    });
}); // END document ready
