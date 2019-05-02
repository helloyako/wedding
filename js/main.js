;(function () {
	
	'use strict';

	// var mobileMenuOutsideClick = function() {
	//
	// 	$(document).click(function (e) {
	//     var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	//     if (!container.is(e.target) && container.has(e.target).length === 0) {
	//
	//     	if ( $('body').hasClass('offcanvas') ) {
	//
    // 			$('body').removeClass('offcanvas');
    // 			$('.js-fh5co-nav-toggle').removeClass('active');
	//     	}
	//     }
	// 	});
	//
	// };


	// var offcanvasMenu = function() {
	//
	// 	$('#page').prepend('<div id="fh5co-offcanvas" />');
	// 	$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
	// 	var clone1 = $('.menu-1 > ul').clone();
	// 	$('#fh5co-offcanvas').append(clone1);
	// 	var clone2 = $('.menu-2 > ul').clone();
	// 	$('#fh5co-offcanvas').append(clone2);
	//
	// 	$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
	// 	$('#fh5co-offcanvas')
	// 		.find('li')
	// 		.removeClass('has-dropdown');
	//
	// 	// Hover dropdown menu on mobile
	// 	$('.offcanvas-has-dropdown').mouseenter(function(){
	// 		var $this = $(this);
	//
	// 		$this
	// 			.addClass('active')
	// 			.find('ul')
	// 			.slideDown(500, 'easeOutExpo');
	// 	}).mouseleave(function(){
	//
	// 		var $this = $(this);
	// 		$this
	// 			.removeClass('active')
	// 			.find('ul')
	// 			.slideUp(500, 'easeOutExpo');
	// 	});
	//
	//
	// 	$(window).resize(function(){
	//
	// 		if ( $('body').hasClass('offcanvas') ) {
	//
    // 			$('body').removeClass('offcanvas');
    // 			$('.js-fh5co-nav-toggle').removeClass('active');
	//
	//     	}
	// 	});
	// };


	// var burgerMenu = function() {
	//
	// 	$('body').on('click', '.js-fh5co-nav-toggle', function(event){
	// 		var $this = $(this);
	//
	//
	// 		if ( $('body').hasClass('overflow offcanvas') ) {
	// 			$('body').removeClass('overflow offcanvas');
	// 		} else {
	// 			$('body').addClass('overflow offcanvas');
	// 		}
	// 		$this.toggleClass('active');
	// 		event.preventDefault();
	//
	// 	});
	// };



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
		});
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	var goToMap = function() {

		$('.js-gomap').on('click', function(event){
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $("#map").offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	//PhotoSwipe
	var initGallery = function() {
		var galleryIdList = ['#gallery-0', '#gallery-1', '#gallery-2', '#gallery-3', '#gallery-4', '#gallery-5', '#gallery-6', '#gallery-7', '#gallery-8'];

		for(var i = 0; i < galleryIdList.length; i++) {
			var galleryId = galleryIdList[i];
			$(galleryId).on("click", function(e) {
				e.preventDefault();

				var pswpElement = document.querySelectorAll('.pswp')[0];

				// build items array
				var items = [
					{
						src: 'images/gallery-1.jpg',
						w: 600,
						h: 400
					},
					{
						src: 'images/gallery-2.jpg',
						w: 600,
						h: 400
					},
					{
						src: 'images/gallery-3.jpg',
						w: 600,
						h: 400
					},
					{
						src: 'images/gallery-4.jpg',
						w: 600,
						h: 400
					}
				];

				// define options (if needed)
				var options = {
					// optionName: 'option value'
					// for example:
					index: 0 // start at first slide
				};

				// Initializes and opens PhotoSwipe
				var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
				gallery.init();
			});

		}
	};

	
	$(function(){
		// mobileMenuOutsideClick();
		parallax();
		// offcanvasMenu();
		// burgerMenu();
		contentWayPoint();
		dropdown();
		testimonialCarousel();
		goToTop();
		goToMap();
		loaderPage();
		counter();
		counterWayPoint();
		initGallery();
	});


}());