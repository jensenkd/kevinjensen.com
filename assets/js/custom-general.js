// To setup the template, change the variables below
// Follow instructions in code comments or see documentation for more detail

//  1. Configurations or Settings
//  2. Navigation on click/ on load / on hasch chage scroll to 
// 	3. Menu / Internal / Exteranl links  
//	4. General Sections
//	5. Contact Form Start
//	6. Home page Promotions Sections
//	7. Portfolio on mouseover opactiy
//	8. My Skills Section 
//	9. Custom  Functions Section

/*****************************************************************************
						1. Configurations or Settings
******************************************************************************/

		//Scroll speed and page animation Scrollto.js parameter
		
		var horizontal_scroll_speed=1500 // speed Horizontal Scrollto parameter default #1200.
		
		//animation sliding speed configure 
		var menu_header_speed=300 // on sub page topbar sliding down animation default #350
		var menu_main_header_speed=600   // home page middle bar sliding down animation default #800

        //Scroll speed and page animation end

		//content scrollbar (niceScroll) colour 
		var niceScrollcursorcolor = "#ef9a00"// Set your content niceScroll color here!
		var niceScrollscrollspeed = 100  // Set niceScroll speed, default value is 60
	 	var niceScrollmousescrollstep = 80  // Set niceScroll speed with mouse wheel, default value is 40
		var	niceScrollsmoothscroll = true  // Set true/ false  default true
		var	niceScrollcursorwidth =  "12px" // Set cursor width in pixel, default is 5
		var	niceScrollcursorborder = 0   // Set niceScroll border color here! for example 2px solid #000000
		var	niceScrollcursordragontouch = true  // Enable cursor drag scrolling
		var	niceScrollcursorborderradius = "20px"  // Set niceScroll border radius for cursor, default is "4px"
		var	niceScrollautohidemode = true   // Set the niceScroll visible or hidden
		var	niceScrollbackground = "#e9e9e9"  // Set your niceScroll rails background color
		var	niceScrollhidecursordelay = 2500 // Set your niceScroll rails background color
		var	niceScrollhorizrailenabled = false  // Set nicescroll horizontal scroll
		
		
/********************** 1. Configuration / Settings END**********************/


/******************************************************************************
		  	2. Navigation on click/ on load / on hasch chage scroll to 
******************************************************************************/


// On Document Ready initialise the options 
jQuery(document).ready(function($){
"use strict";

	$("#header").click(function (e) { e.preventDefault(); });
	$("#mainheader").click(function (e) { e.preventDefault(); });
	$(".nav-link").click(function (e) { e.preventDefault(); });
	
//on page load show from hash index.html#about
	/*********************************************************************************/
	var url = window.location.href;
	var type = url.split('#');
	var hash = '';
	if(type.length > 1) 
	{ 
	hash = type[1];
	}
	
	if (hash!=""){
	var hash_fullname= "#" + hash;
	$( "a[href='"+hash_fullname+"']" ).addClass('selected');
		if(hash_fullname=="#home"){ 
		// hiding subpage header 
		$('#header').hide('fade', { direction: 'left', easing: 'easeInQuad' }, 1000);
		Animation("#header","fadeOutUp","200");
		}
		else {
		// hiding Home page header 
		$('#mainheader').hide('fade', { direction: 'left', easing: 'easeInQuad' }, 600);
		Animation("#mainheader","fadinUp","200");
		}
	
			$('#wrapper').scrollTo(hash_fullname, 2000, {easing:'easeInOutExpo', axis:'x', onAfter:function(){ // scrollto callback  function 
				if(hash_fullname=="#home")
				{ // for home page animation
			//	Homepage_Animation();
				}
				else 
				{ // sub page animation
					if ( $('#header').is(':hidden')){ // if header is hidden then do animation
						Subpage_animation();
					}
				} 
					} // scrollto callback function close
			
			});//	scrollto close
	window.location.hash = ''; // for older browsers, leaves a # behind
    history.pushState('', document.title, window.location.pathname); // nice and clean	
	}// hash!="" close


// on click navigation 
/*********************************************************************************/
	$('.main-nav a.nav-link,a.nav-link').click(function () {
		
	var name = $(this).attr('href');
	if(name!="#")  { // if navigation not equalt to "#"
	
	if(name=="#home"){
	$('.selected').removeClass('selected');
	$( "a[href='"+name+"']" ).addClass('selected');
	
	$('#header').hide('fade', { direction: 'left', easing: 'easeInQuad' }, 1000);
	Animation("#header","fadeOutUp","200");
	}
	else {
	if(name!=""){
	$('.selected').removeClass('selected');
	$( "a[href='"+name+"']" ).addClass('selected');
	$('#mainheader').hide('fade', { direction: 'left', easing: 'easeInQuad' }, 600);
	Animation("#mainheader","fadinUp","200");
	}}

//	scrollto start
	$('#wrapper').scrollTo($(this).attr('href'), horizontal_scroll_speed, {easing:'easeInOutExpo', axis:'x', onAfter:function(){ // scrollto callback  function 
	
	if(name=="#home"){ // for home page animation 
	Homepage_Animation();
	$( "a[href='#home']" ).addClass('selected');
	}
	else { // sub page animation
	if ( $('#header').is(':hidden')){
	Subpage_animation();
	}
	} // else close
	
	} // scrollto callback function close
	
	} );//	scrollto close
	window.location.hash = ''; // for older browsers, leaves a # behind
    history.pushState('', document.title, window.location.pathname); // nice and clean
	} // if navigation not equalt to "#" end
	}); // navigation click end


/******************	2. Navigation on click/ on load / on hasch chage scroll to END******************/


/***************************************************
		  		3. Menu / Internal / Exteranl links  
***************************************************/

// Slick navigation for mobile / tablet purpose




$(function(){
	$('#sub-nav').slicknav({
	label: '',
	duration: 1000,
	easingOpen: "easeOutQuint", //available with jQuery UI
	closeOnClick:true
});
});

// on hash change 
window.onhashchange = function() {
$('.selected').removeClass('selected');
var hash = window.location.hash;
if (hash!=""){
$( "a[href='"+hash+"']" ).addClass('selected');
}}

// on click navigation add class selected
$("#header ul.nav li a").click(function () {
	$('ul.nav li a').removeAttr('class');
	$(this).attr('class', 'nav-link selected');
	});

// on click navigation add class selected
$("#header ul.nav li a").click(function () {
	$('ul.nav li a').removeAttr('class');
	$(this).attr('class', 'nav-link selected');
	});

// on external and internal page link 
$('.link').click(function () {
var name = $(this).attr('href');
window.location.href = name;
}); 

$('a.external-link').click(function () {
 return !window.open(this); 
 }); 

$('a.internal-link').click(function () {
var name = $(this).attr('href');
window.location.href = name;
});


/******************	3. Menu / Internal / Exteranl links END******************/


/*************************************************************
		  		4. General Sections
**************************************************************/

//Preloader
		$("body").jpreLoader(
			  {
				splashID:"#jSplash",
				showPercentage:!0,
				autoClose:!0,
				showSplash: true,
				splashFunction:function(){
				$("#circle").delay(1250).animate({opacity:1},700,"linear");
			  }
			 })
//Preloader end


// niceScroll Bar options

		// niceScroll Bar options for Desktop version
			$(".contentscroll").niceScroll({
		cursorcolor:niceScrollcursorcolor,
		scrollspeed:niceScrollscrollspeed,
		mousescrollstep:niceScrollmousescrollstep,
		smoothscroll:niceScrollsmoothscroll,
		cursorwidth:niceScrollcursorwidth,
		cursorborder:niceScrollcursorborder, 
		cursordragontouch:niceScrollcursordragontouch,
		cursorborderradius:niceScrollcursorborderradius,
		autohidemode:niceScrollautohidemode,
		background: niceScrollbackground,
		hidecursordelay:niceScrollhidecursordelay,
		horizrailenabled:niceScrollhorizrailenabled
		});
		$(".contentscroll").mouseover(function() {
		$(".contentscroll").getNiceScroll().resize();
		});
// niceScroll Bar options end


// Home page Social on mouse over slide up / down
		
		jQuery(function($){
				$('.accura-jump a,' +
				'.accura-jump-bg a').each(function () {
					var $el = $(this);
					$el.append($el.find('i').clone());
				});
		$('.accura-social-icons-big a i').wrap('<span></span>');
		});

// Home page Social on mouse over END


//  FIT VID Video for Responsive purpose */
		$(".video_containers").fitVids();
//  FIT VID Video END */

/*  Carousel Slider Used In Project Modal page  */                    
		$('.carousel').carousel({
		  interval: 3000
		})
/* Carousel Slider end */

// Place Holder for IE9
	$('input[type=text], textarea').placeholder();
// Place Holder for IE9

/****************** 4. General Sections END******************/

/*************************************************************
            5. Contact Form Start
**************************************************************/	
	  $('#contact_form').validate(
		{
		rules: {
		name: {
		minlength: 2,
		required: true
		},
		phone: {
		required: true,
		},
		email: {
		required: true,
		email: true
		},
		subject: {
		minlength: 2,
		required: true
		},
		message: {
		minlength: 2,
		required: true
		}
		},
		highlight: function(element) {
		$(element).closest('.control-group').removeClass('success').addClass('error');
		},
		success: function(element) {
		element
		.text('OK!').addClass('valid')
		.closest('.control-group').removeClass('error').addClass('success');
		},
		submitHandler: function(form) {
						// do other stuff for a valid form
						$.post('contact-general-form.php', $("#contact_form").serialize(), function(data) { // action file is here 
							$('#contact_form').html(data);
						});
					}
		});


/****************** 5. Contact Form END******************/


/*************************************************************
		  		6. Home page Promotions Sections
**************************************************************/

/* Promotions BOX1 */
		 $('.spmenu1').hover(function() {
				$(this).addClass('forefront');
			}, function() {
				$(this).removeClass('forefront');
			})
			
			var $lightbox = $('#lightbox');
			$('[data-target="#lightbox"]').on('click', function(event) {
				var $img = $(this).find('img'), 
					src = $img.attr('src'),
					alt = $img.attr('alt'),
					css = {
						'maxWidth': $(window).width() - 100,
						'maxHeight': $(window).height() - 100
					};
			
				$lightbox.find('.close').addClass('hidden');
				$lightbox.find('img').attr('src', src);
				$lightbox.find('img').attr('alt', alt);
				$lightbox.find('img').css(css);
			});
			
			$lightbox.on('shown.bs.modal', function (e) {
				var $img = $lightbox.find('img');
					
				$lightbox.find('.modal-dialog').css({'width': $img.width()});
				$lightbox.find('.close').removeClass('hidden');
			});
/*   Promotions BOX1 End   */





/* Promotions BOX3 */
		$('.spmenu3').hover(function() {
			$(this).addClass('forefront');
		}, function() {
			$(this).removeClass('forefront');
		})
		
		var $lightbox = $('#lightbox3');
			
		$lightbox.on('shown.bs.modal', function (e) {
			var $img = $lightbox.find('img');
				
			$lightbox.find('.modal-dialog').css({'width': $img.width()});
			$lightbox.find('.close').removeClass('hidden');
		});
/*   Promotions BOX3 End   */

		$('body').click(function(){
		   if( $('#lightbox1').dialog("isOpen") ) {
			  $('#lightbox1').dialog("close")
		   }
		
		});
		
/* Promotions BOX2 */
		$('.spmenu2').hover(function() {
			$(this).addClass('forefront');
		}, function() {
			$(this).removeClass('forefront');
		})
		
		var $lightbox = $('#lightbox2');
		
		$('[data-target="#lightbox2"]').on('click', function(event) {
			var $img = $(this).find('iframe'), 
				src = $img.attr('src'),
				alt = $img.attr('alt'),
				css = {
					'maxWidth': $(window).width() - 100,
					'maxHeight': $(window).height() - 100
				};
		
			$lightbox.find('.close').addClass('hidden');
			$lightbox.find('iframe').attr('src', src);
			$lightbox.find('iframe').attr('alt', alt);
			$lightbox.find('iframe').css(css);
		});
		
		$lightbox.on('shown.bs.modal', function (e) {
			var $img = $lightbox.find('iframe');
				
			$lightbox.find('.modal-dialog').css({'width': $img.width()});
			$lightbox.find('.close').removeClass('hidden');
	});
/*   Promotions BOX2 End   */



/****************** 6. Home page Promotions Sections END******************/



/*************************************************************
		  	 7. Portfolio on mouseover opactiy
*************************************************************/

		jQuery("area[data-rel^='prettyPhoto']").prettyPhoto();
		jQuery("#portfolio-grid:first a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'pp_default',slideshow:3000, autoplay_slideshow: false,deeplinking:false});
		jQuery(".portfolio-grid:gt(0) a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',slideshow:3000, deeplinking:false});
		jQuery("#custom_content a[data-rel^='prettyPhoto']:first").prettyPhoto({
		custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
		changepicturecallback: function(){ initialize(); }
		});
		jQuery("#custom_content a[data-rel^='prettyPhoto']:last").prettyPhoto({
		custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
		changepicturecallback: function(){ _bsap.exec(); }
		});

//prettyPhoto END


 //mixitup Portfolio filters
	  $('#portfolio-grid').mixitup({
		effects: ['fade','scale'],
		easing: 'snap'
	  });
		$('#portfolio-grid-modal').mixitup({
		effects: ['fade','scale'],
		easing: 'snap'
	  });
//mixitup Portfolio END


/****************** 7. Portfolio on mouseover opactiy END******************/


/*************************************************************
                  8. My Skills Section 
//************************************************************/

//Our Skills Bar
	if(jQuery('.our-skills').length != 0){
		var skillbar_active = false;
		jQuery('.progress-bar').hide();
				
		if(jQuery(window).scrollTop() == 0 && isScrolledIntoView(jQuery('.our-skills')) == true){
			skillbarActive();
			skillbar_active = true;
		}
				else if(isScrolledIntoView(jQuery('.our-skills')) == true){
					skillbarActive();
					skillbar_active = true;
				}
		jQuery(window).bind('scroll', function(){
			if(skillbar_active === false && isScrolledIntoView(jQuery('.our-skills')) == true ){
				skillbarActive();
				skillbar_active = true;
			}
		});
	}

//Animated Progress Bars
	$('.progress_bars li').each(function () {
		$(this).appear(function() {
		  $(this).animate({opacity:1,left:"0px"},1200);
		  var b = $(this).find("span").attr("data-width");
		  $(this).find("span").animate({
			width: b + "%"
		  }, 1700, "easeOutCirc");
		});	
	});
//Animated Progress Bars end

/* Piechart Bar */
	$(function() {
			$('.chart').easyPieChart({
				easing: 'easeOutBounce',
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});
			var chart = window.chart = $('.chart').data('easyPieChart');
			$('.js_update').on('click', function() {
				chart.update(Math.random()*200-100);
			});
		});
/* Piechart Bar */

/****************** 8. My Skills Section END******************/



}); 
// On Document Ready initialise the options 


/*************************************************************
		    9. Custom  Functions Section
*************************************************************/

// used to show the modals
	function modalshow(modalid)  
	{
		$(modalid).modal('show');
	}

// this is used add animation Class  
	function Animation(element,effect,timedelay) 
	{
		$(element).delay(timedelay).removeClass().addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		 $(this).removeClass();
		});
	};

// home page animation functions
	function Homepage_Animation()
	{
	$('#mainheader').show('fade', { easing: 'easeInQuad' }, menu_main_header_speed); //on homepage topbar sliding up animation 
	Animation("#mainheader","fadeInUp","200");
	Animation("#spmenu1","fadeInRight","300");
	Animation("#spmenu2","fadeInRight","800");
	Animation("#spmenu3","fadeInRight","5000");
	Animation("#1","fadeInLeft","800");
	Animation("#2","fadeInUp","1800");
	Animation("#3","fadeInDown","800");
	Animation("#4","fadeInLeft","1800");
	Animation("#5","fadeInRight","800");
	}

// sub page animation functions
	function Subpage_animation ()
	{
	Animation("#header","fadeInDown","200");
	$('#header').show('fade', { direction: 'top', easing: 'easeInQuad' }, menu_header_speed); //on sub page topbar sliding down animation 
	}


/* // Progress bar animation start  */
// scroll to view element and used for bar and skills 
	function isScrolledIntoView(elem) {
		var docViewTop = jQuery(window).scrollTop();
		var docViewBottom = docViewTop + jQuery(window).height();
	
		var elemTop = jQuery(elem).offset().top;
		var elemBottom = elemTop + jQuery(elem).height();
	
		return ((elemBottom <= (docViewBottom + jQuery(elem).height())) && (elemTop >= (docViewTop - jQuery(elem).height())));
	}
// skills bar
	function skillbarActive(){
		setTimeout(function(){
	
			jQuery('.progress-bar').each(function() {
				jQuery(this)
					.data("origWidth", jQuery(this)[0].style.width)
					.css('width','1%').show();
				jQuery(this)
					.animate({
					width: jQuery(this).data("origWidth")
					}, 50);
			});
	
			jQuery('.progress-bar .dot').each(function() {
				var me = jQuery(this);
				var perc = me.attr("data-percentage");
	
				var current_perc = 0;
	
				var progress = setInterval(function() {
					if (current_perc>=perc) {
						clearInterval(progress);
							} else {
								current_perc +=1;
								me.text((current_perc)+'%');
							}
				}, 10);
			});
		}, 10);}

/* // Progress bar animation end  */

// resize panel function
	$(window).resize(function () {
			resizePanel();
		});
	
	function resizePanel() {
		width = $(window).width();
		height = $(window).height();
	
		mask_width = width * $('.item').length;
			
		$('#debug').html(width  + ' ' + height + ' ' + mask_width);
			
		$('#wrapper, .item').css({width: width, height: height});
		$('#mask').css({width: mask_width, height: height});
		$('#wrapper').scrollTo($('a.selected').attr('href'), 0);
			
	}
	$(window).load(function() {    
		var theWindow        = $(window),
			$bg              = $(".bg"),
			aspectRatio      = $bg.width() / $bg.height();
	
		function resizeBg() {
	
			if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
				$bg
					.removeClass()
					.addClass('bgheight');
			} else {
				$bg
					.removeClass()
					.addClass('bgwidth');
			}
		}
		theWindow.resize(function() {
			resizeBg();
		}).trigger("resize");
	
	});
	
/*   Spmenu video Stop On Click Close Button  */

$('button.close').click(function() {
   video_containers = $('.video_containers');
   video_containers.html( video_containers.html() );
});

$('.modal').click(function() {
   video_containers = $('.video_containers');
   video_containers.html( video_containers.html() );
});

/*   Spmenu video Stop On Click Close Button  */


/******************  9. Custom  Functions Section END******************/

