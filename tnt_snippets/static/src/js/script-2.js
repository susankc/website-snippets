$(document).ready(function () {
	'use strict';
	$('[data-toggle="tooltip"]').tooltip();
	$( ".datepicker" ).datepicker();

	//Owl Carousel 
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		controlNav: true,
		rtl:true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 2,
				nav: false
			},
			1000: {
				items: 3,
				nav: true,
				loop: false
			}
		}
	});
	$(".slider-for").slick({
    fade: true,
    arrows: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider-nav"
  });
  $(".slider-nav").slick({
    dots: false,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: ".slider-for"
  });
});
