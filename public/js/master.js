
jQuery( document ).ready( function( $ ) {
"use strict";
	
	//Preloader
	$(window).load(function() {
		$('#preloader').fadeOut();
		$('.loading').delay(350).fadeOut('slow');  
		$('body').delay(250).css({'overflow':'visible'});
	})
  
	// SLIDER
	$('#slides').superslides({
	  animation: 'fade',
	  play:4000, // change value if you want to increase or decrese speed
	  animation_speed:600 // change time interval during slide change
	});
  
	// Services Carousel delay
	$('#serviceList, .carousel').carousel({
		interval:false // set value like 5000 for making auto and increase or decrease for delay
		});
	  
	

  
	
});
