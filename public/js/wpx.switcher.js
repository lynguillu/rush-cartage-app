$(document).ready(function(){

	// GLOBAL VARIABLES
	var filename = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
	var fileExtension = filename.substr( (filename.lastIndexOf('.') + 0) );

	filename = filename.replace(fileExtension, "");

	// STYLE SWITCHER
	$("#cmdShowStyleSwitcher").click(function(){
		if($("#divStyleSwitcher").hasClass("opened")){
			$("body").removeClass("style-switcher-in");
			$("#divStyleSwitcher").removeClass("opened");
		}
		else{
			$("body").addClass("style-switcher-in");
			$("#divStyleSwitcher").addClass("opened");
		}
		return false;
	});

	// DEMO SWITCHER
	$('#divDemoSwitcher').mouseenter(function(e){
	  	$('#divDemoSwitcher > .demos-wrapper').show().addClass('animated bounceInLeft');
	});
	$('#divDemoSwitcher').mouseleave(function(e){
	  	$('#divDemoSwitcher > .demos-wrapper').removeClass('animated bounceInLeft').hide();
	});

	// Cookie expire date
	var date = new Date();
	date.setTime(date.getTime() + (5 * 60 * 1000));

	// LAYOUT STYLE
	$("#layoutType button").click(function(){
		$("#layoutType button").each(function(){
			$(this).removeClass("active");
		});

		if($(this).data("value") == "boxed"){
			$(this).addClass("active");
			$(".body-wrap").addClass("body-boxed");
			$.cookie('layout', "boxed", { expires:date});
		}
		else if($(this).data("value") == "fluid" && filename != "page-boxed"){
			$(".body-wrap").removeClass("body-boxed");
			$.cookie('layout', "fluid", {expires: date});
		}
	});

	// Cookie reading
	var layoutStyle = $.cookie('layout');

	// Add active class to selected value button
	$("#layoutType").find('button[data-value="'+ layoutStyle +'"]').addClass("active");

	// Set option from cookie
	if(layoutStyle == "boxed"){
		$(".body-wrap").addClass("body-boxed");
	}
	else if(layoutStyle == "fluid" && filename != "page-boxed"){
		$(".body-wrap").removeClass("body-boxed");
	}

	// BODY BACKGROUND
	$("#bodyBackground a").click(function(){
		// Trigger click for boxed layout type
		$("#layoutType button[data-value='boxed']").trigger("click");

		var value = $(this).data("value");

		$("body").removeClass("body-bg-1 body-bg-2 body-bg-3 body-bg-4 body-bg-5 body-bg-6 body-bg-7 body-bg-8 body-bg-9");
		$("body").addClass(value);
		$("#bodyBackground a").removeClass("active");
		$(this).addClass("active");
		$.cookie('body-background', value, {expires: date});

		return false;
	});

	// Cookie reading
	var bodyBackground = $.cookie('body-background');

	// Add active class to selected value button
	$("#bodyBackground").find('a[data-value="'+ bodyBackground +'"]').addClass("active");

	// Set option from cookie
	$("body").addClass(bodyBackground);

	// TEMPLATE SKIN - Skin starters
	$("#skinColor a").click(function(){
		var $this = $(this);
		var value = $(this).data("value");
		var type = $(this).data("type");

		$("#stylesheet").attr("href", "css/global-style-" + value + ".min.css");

		$this.removeClass("active");
		$this.addClass("active");

		$.cookie('skin-starter', value, {expires: date});

		if(type == "dark"){
			$("#headerStyle button[data-value='navbar-main-inverse']").trigger("click");
		} else{
			if($(".navbar-main").hasClass("navbar-main-inverse")){
				$("#headerStyle button[data-value='navbar-main-inverse']").trigger("click");
			}
		}
		return false;
	});

	// Cookie reading
	var skinColor = $.cookie('skin-starter');

	// Add active class to selected value button
	$("#skinColor").find('a[data-value="'+ skinColor +'"]').addClass("active");

	// Set option from cookie
	if(skinColor != undefined){
		$("#stylesheet").attr("href", "css/global-style-" + skinColor + ".min.css");
	}

	// ORIENTATION

	// daca se muta pe versiunea RTL trebuie sa schimbam si data-owl-rtl pe true

	$("#layoutOrientation button").click(function(){

		var value = $(this).data("value");
		if(value == "rtl"){
			$('<link id="stylesheetBootstrapRTL" rel="stylesheet" href="assets/bootstrap-rtl/css/bootstrap-rtl.min.css" type="text/css">').insertAfter('#stylesheetGlobal');
			$('<link id="stylesheetRTL" rel="stylesheet" href="css/rtl-style.min.css" type="text/css">').insertAfter('#stylesheetBootstrapRTL');
		} else{
			$('#stylesheetBootstrapRTL').remove();
			$('#stylesheetRTL').remove();
		}

		$("#layoutOrientation button").removeClass("active");
		$(this).addClass("active");

		$.cookie('layout-orientation', value, {expires: date});
		return false;
	});

	var layoutOrientation = $.cookie('layout-orientation');
	if(layoutOrientation == "rtl"){
		$('<link id="stylesheetBootstrapRTL" rel="stylesheet" href="assets/bootstrap-rtl/css/bootstrap-rtl.min.css" type="text/css">').insertAfter('#stylesheetGlobal');
		$('<link id="stylesheetRTL" rel="stylesheet" href="css/rtl-style.min.css" type="text/css">').insertAfter('#stylesheetBootstrapRTL');
	} else{
		$('#stylesheetBootstrapRTL').remove();
		$('#stylesheetRTL').remove();
	}

	// HEADER STYLE
	$("#headerStyle button").click(function(){

		var value = $(this).data("value");

		if(value != "navbar--inverse"){
			$(".header").removeClass("header-1--opaque header-1--transparent");
			$(".header").addClass(value);
			if(value == "header-1--transparent"){
				$(".navbar-main").removeClass("navbar--shadow");
			}
			$.cookie('header-style', value, {expires: date});
		} else{
			if($(".navbar-main").hasClass("navbar--inverse")){
				$(".navbar-main").removeClass(value);
				$("#logoTwo").removeClass("hide");
				$("#logoOne").addClass("hide");

				$.cookie('navbar-style', "", {expires: date});
			} else{
				$(".navbar-main").addClass(value);
				$("#logoOne").removeClass("hide");
				$("#logoTwo").addClass("hide");

				$.cookie('navbar-style', value, {expires: date});
			}
		}

		$("#headerStyle button").removeClass("active");
		$(this).addClass("active");

		return false;
	});

	// Cookie reading
	var headerStyle = $.cookie('header-style');
	var navbarStyle = $.cookie('navbar-style');

	// Add active class to selected value button
	$("#headerStyle").find('button[data-value="'+ headerStyle +'"]').addClass("active");
	if(headerStyle != "navbar-main-inverse"){
		$(".header").removeClass("header-opaque header-transparent");
		$(".header").addClass(headerStyle);
		if(headerStyle == "header-transparent"){
			$(".navbar-main").removeClass("navbar-shadow");
		}
	}

	if(navbarStyle == "navbar-main-inverse"){
		if($(".navbar-main").hasClass("navbar-main-inverse")){
			$(".navbar-main").removeClass(navbarStyle);
		} else{
			$(".navbar-main").addClass(navbarStyle);
			$("#logoOne").removeClass("hide");
			$("#logoTwo").addClass("hide");
		}
	}


	$("#btnResetStyles").click(function(){
		$.removeCookie('header-style');
		$.removeCookie('navbar-style');
		$.removeCookie('layout-orientation');
		$.removeCookie('layout');
		$.removeCookie('body-background');
		$.removeCookie('skin-starter');

		location.reload();

		return false();
	});
});
