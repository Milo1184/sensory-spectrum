/*
Sensory Spectrum Core JavaScript
By: Junaid Bhura
www.junaidbhura.com
*/

/* DROPDOWN MENU START */
$('header nav li').each(function(){
	if($(this).find('ul').length == 0)
		$(this).addClass('lonely-parent');
});

var timeout    = 0;
var closetimer = 0;
var ddmenuitem = 0;
var ddmenuitem_sub = 0;

function jsddm_open() {
	jsddm_canceltimer();
	jsddm_close();
	ddmenuitem = $(this).find('ul').css('visibility', 'visible');
}

function jsddm_close() {
	if(ddmenuitem)
		ddmenuitem.css('visibility', 'hidden');
}

function jsddm_timer() { closetimer = window.setTimeout(jsddm_close, timeout); }

function jsddm_canceltimer() {
	if(closetimer) {
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

$('#nav > li').bind('mouseover', jsddm_open);
$('#nav > li').bind('mouseout',  jsddm_timer);
/* DROPDOWN MENU END */

/* NIVOSLIDER START */
$('#slider').nivoSlider({
	effect: 'fade', // Specify sets like: 'fold,fade,sliceDown'
	animSpeed: 2000, // Slide transition speed
    pauseTime: 6000, // How long each slide will show
	directionNav: false, // Next & Prev navigation
	beforeChange: function(){
			$('.nivo-main-image').css('visibility','hidden');
		} // Triggers before a slide transition
});
/* NIVOSLIDER END */

/* VALIDATE REGISTRATION FORM START */
if ( $('.registration-form').length != 0 ) {
	$('#registration-form').validate({
		errorElement: 'div'
	});
}
/* VALIDATE REGISTRATION FORM END */

/* LOCATION PAGE IMAGE SWAP START */
$('.location-thumb-holder li a').click( function() {
	$(this).parent().parent().parent().find('.slideshow-holder img').attr('src', $(this).attr('data-full-path'));

	return false;
});
/* LOCATION PAGE IMAGE SWAP END */

/* VIDEOS PAGE START */
if ( $('#videos').length != 0 ) {
	$('#videos a').mouseenter( function () {
		$(this).find('span').slideDown('fast');
	});
	
	$('#videos a').mouseleave( function () {
		$(this).find('span').slideUp('fast');
	});
}
/* VIDEOS PAGE END */

// Fancybox
$('.lightbox').fancybox({
	prevEffect:'none',
    nextEffect:'none',
	autoCenter:true,
	autoSize:false,
	autoHeight:true,
	width:800
});

// Fancybox for leadership team page
$('.team-lightbox').fancybox({
	autoSize:false,
	autoHeight:true,
	autoCenter:true,
	width:800,
	prevEffect:'none',
    nextEffect:'none'
});

// Fancybox for News Detail page
$('.news-detail-lightbox').fancybox({
	autoSize:false,
	autoHeight:true,
	autoCenter:true,
	width:800,
	prevEffect:'none',
    nextEffect:'none'
});
