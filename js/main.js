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

	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	var shuffleSpecialThanks = function() {
		var items = $("#fh5co-special-thanks").find(".item");
		items = shuffle(items);
		$("#special-thanks-items").html(items)
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

			gaEvent('common', 'click', 'go_to_top');
			
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

			gaEvent('map', 'click', 'go_to_map');

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
		var gallery0 = {
			"#wedding-gallery": [
				{
					src: 'images/wedding/wedding_0.jpg',
					w: 1280,
					h: 853
				},
				{
					src: 'images/wedding/wedding_1.jpg',
					w: 1280,
					h: 853
				},
				{
					src: 'images/wedding/wedding_2.jpg',
					w: 1280,
					h: 853
				},
				{
					src: 'images/wedding/wedding_3.jpg',
					w: 853,
					h: 1280
				},
				{
					src: 'images/wedding/wedding_4.jpg',
					w: 1280,
					h: 853
				},
				{
					src: 'images/wedding/wedding_6.jpg',
					w: 2000,
					h: 1334
				},
				{
					src: 'images/wedding/wedding_7.jpg',
					w: 2000,
					h: 1334
				},
				{
					src: 'images/wedding/wedding_8.jpg',
					w: 2000,
					h: 1334
				},
				{
					src: 'images/wedding/wedding_9.jpg',
					w: 2000,
					h: 1334
				},
				{
					src: 'images/wedding/wedding_10.jpg',
					w: 2000,
					h: 1334
				},
				{
					src: 'images/wedding/wedding_5.jpg',
					w: 1280,
					h: 853
				}
			]
		};

		var gallery1 = {
			"#laos-gallery": [
				{
					src: 'images/laos/laos_2.jpg',
					w: 1108,
					h: 1478
				},
				{
					src: 'images/laos/laos_3.jpg',
					w: 1108,
					h: 1478
				},
				{
					src: 'images/laos/laos_4.jpg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/laos/laos_5.jpg',
					w: 1108,
					h: 1478
				},
				{
					src: 'images/laos/laos_6.jpg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/laos/laos_7.jpg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/laos/laos_8.jpg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/laos/laos_9.jpg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/laos/laos_10.jpg',
					w: 1108,
					h: 1478
				},
				{
					src: 'images/laos/laos_11.jpg',
					w: 1108,
					h: 1478
				},
				{
					src: 'images/laos/laos_12.jpg',
					w: 1108,
					h: 1478
				},
				{
					src: 'images/laos/laos_13.jpg',
					w: 1108,
					h: 1478
				},
				{
					src: 'images/laos/laos_14.jpg',
					w: 1108,
					h: 1478
				},
				{
					src: 'images/laos/laos_15.jpg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/laos/laos_16.jpg',
					w: 1478,
					h: 1108
				}
			]
		};

		var gallery2 = {
			"#fin-gallery": [
				{
					src: 'images/fin/fin-1.jpg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/fin/fin-2.jpg',
					w: 2048,
					h: 2019
				},
				{
					src: 'images/fin/fin-3.jpg',
					w: 2364,
					h: 1773
				},
				{
					src: 'images/fin/fin-4.jpg',
					w: 2048,
					h: 1994
				},
				{
					src: 'images/fin/fin-5.jpg',
					w: 1108,
					h: 1109
				},
				{
					src: 'images/fin/fin-6.jpg',
					w: 1477,
					h: 1108
				},
				{
					src: 'images/fin/fin-7.jpg',
					w: 1773,
					h: 2364
				},
				{
					src: 'images/fin/fin-8.jpg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/fin/fin-9.jpg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/fin/fin-10.jpg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/fin/fin-11.jpg',
					w: 1108,
					h: 1402
				},
				{
					src: 'images/fin/fin-12.jpg',
					w: 1773,
					h: 2259
				},
				{
					src: 'images/fin/fin-13.jpg',
					w: 1773,
					h: 1773
				},
				{
					src: 'images/fin/fin-14.jpg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/fin/fin-15.jpg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/fin/fin-16.jpg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/fin/fin-17.jpg',
					w: 1974,
					h: 2048
				},
				{
					src: 'images/fin/fin-18.jpg',
					w: 1936,
					h: 1936
				},
				{
					src: 'images/fin/fin-19.jpg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/fin/fin-20.jpg',
					w: 1108,
					h: 1108
				},
				{
					src: 'images/fin/fin-21.jpg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/fin/fin-22.jpg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/fin/fin-23.jpg',
					w: 2364,
					h: 1773
				},
				{
					src: 'images/fin/fin-24.jpg',
					w: 1108,
					h: 1108
				},
				{
					src: 'images/fin/fin-25.jpg',
					w: 1773,
					h: 2364
				},
				{
					src: 'images/fin/fin-26.jpg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/fin/fin-27.jpg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/fin/fin-28.jpg',
					w: 2364,
					h: 1773
				},
				{
					src: 'images/fin/fin-29.jpg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/fin/fin-30.jpg',
					w: 1280,
					h: 1280
				}
			]
		};

		var gallery3 = {
			"#vv-gallery": [
				{
					src: 'images/vv/vv_1.jpg',
					w: 1536,
					h: 1536
				},
				{
					src: 'images/vv/vv_2.jpg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/vv/vv_3.jpg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/vv/vv_4.jpg',
					w: 1536,
					h: 1536
				},
				{
					src: 'images/vv/vv_5.jpg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/vv/vv_6.jpg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/vv/vv_7.jpg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/vv/vv_8.jpg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/vv/vv_9.jpg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/vv/vv_10.jpg',
					w: 1108,
					h: 1478
				},
				{
					src: 'images/vv/vv_11.jpg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/vv/vv_12.jpg',
					w: 1108,
					h: 1478
				},
				{
					src: 'images/vv/vv_13.jpg',
					w: 1109,
					h: 1478
				},
				{
					src: 'images/vv/vv_14.jpg',
					w: 1536,
					h: 1536
				},
				{
					src: 'images/vv/vv_15.jpg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/vv/vv_16.jpg',
					w: 2048,
					h: 1969
				}
			]
		};

		var gallery4 = {
			"#tw-gallery": [
				{
					src: 'images/tw/tw_1.jpg',
					w: 1528,
					h: 994
				},
				{
					src: 'images/tw/tw_2.jpg',
					w: 1478,
					h: 1012
				},
				{
					src: 'images/tw/tw_3.jpg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/tw/tw_4.jpg',
					w: 1280,
					h: 1280
				},
				{
					src: 'images/tw/tw_5.jpg',
					w: 1280,
					h: 960
				},
				{
					src: 'images/tw/tw_6.jpg',
					w: 1280,
					h: 1280
				},
				{
					src: 'images/tw/tw_7.jpg',
					w: 1108,
					h: 1478
				},
				{
					src: 'images/tw/tw_8.jpg',
					w: 960,
					h: 1280
				},
				{
					src: 'images/tw/tw_9.jpg',
					w: 1110,
					h: 1476
				},
				{
					src: 'images/tw/tw_10.jpg',
					w: 1280,
					h: 960
				},
				{
					src: 'images/tw/tw_11.jpg',
					w: 1280,
					h: 1280
				},
				{
					src: 'images/tw/tw_12.jpg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/tw/tw_13.jpg',
					w: 1280,
					h: 960
				}
			]
		};

		var gallery5 = {
			"#hk-gallery": [
				{
					src: 'images/hk/hk_1.jpg',
					w: 960,
					h: 1117
				},
				{
					src: 'images/hk/hk_2.jpg',
					w: 1108,
					h: 1478
				},
				{
					src: 'images/hk/hk_3.jpg',
					w: 1280,
					h: 1280
				},
				{
					src: 'images/hk/hk_3-1.jpg',
					w: 1053,
					h: 960
				},
				{
					src: 'images/hk/hk_4.jpg',
					w: 960,
					h: 1185
				},
				{
					src: 'images/hk/hk_5.jpg',
					w: 960,
					h: 1280
				},
				{
					src: 'images/hk/hk_6.jpg',
					w: 960,
					h: 1280
				},
				{
					src: 'images/hk/hk_7.jpg',
					w: 1280,
					h: 960
				},
				{
					src: 'images/hk/hk_8.jpg',
					w: 960,
					h: 1200
				},
				{
					src: 'images/hk/hk_9.jpg',
					w: 1280,
					h: 1280
				},
				{
					src: 'images/hk/hk_10.jpg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/hk/hk_11.jpg',
					w: 1280,
					h: 1280
				},
				{
					src: 'images/hk/hk_12.jpg',
					w: 1108,
					h: 1478
				},
				{
					src: 'images/hk/hk_13.jpg',
					w: 1500,
					h: 1500
				}
			]
		};

		var galleryList = [gallery0, gallery1, gallery2, gallery3, gallery4, gallery5];

		for(var i = 0; i < galleryList.length; i++) {
			var gallery = galleryList[i];
			var galleryId = Object.keys(gallery)[0];
			$(galleryId).on("click", {items : gallery[galleryId]}, function(e) {
				e.preventDefault();

				// build items array
				var items = e.data.items;

				openPhotoSwipeView(items);

				gaEvent('gallery', 'click', e.currentTarget.id);

				return false;
			});

		}
	};

	function openPhotoSwipeView(items) {
		var pswpElement = document.querySelectorAll('.pswp')[0];

		// define options (if needed)
		var options = {
			// optionName: 'option value'
			// for example:
			index: 0 // start at first slide
		};

		// Initializes and opens PhotoSwipe
		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();

	}

	var initNaverMap = function() {
		var HOME_PATH = window.HOME_PATH || '.';
		var position = new naver.maps.LatLng(37.559473, 127.041575);
		var mapOptions = {
			center: position,
			zoom: 12,
			minZoom: 7,
			maxZoom: 14
		};

		var map = new naver.maps.Map('map', mapOptions);

		var marker = new naver.maps.Marker({
			map: map,
			position: position,
			icon: {
				url: HOME_PATH + '/images/heart_marker_coral.png',
				scaledSize: new naver.maps.Size(50, 69)
			},
			animation: naver.maps.Animation.BOUNCE
		});

		naver.maps.Event.addListener(marker, 'click', function () {
			if (marker.getAnimation() !== null) {
				marker.setAnimation(null);
			} else {
				marker.setAnimation(naver.maps.Animation.BOUNCE);
			}

			gaEvent('map', 'click', 'pin_animation');
		});

		$("#to-center").on("click", function (e) {
			e.preventDefault();
			map.setCenter(position);
			map.setZoom(12, true);
			buttons.fadeOut();
			gaEvent('map', 'click', 'center_button_hide');
		});
		var buttons = $("#map").find(".buttons");
		buttons.hide();
		var eventList = ['mouseup', 'touchup', 'dragend', 'pinchend', 'click', 'dblclick', 'tap', 'longtap', 'twofingertap', 'doubletap', 'zoom_changed'];
		eventList.forEach(function (eventName) {
			naver.maps.Event.addListener(map, eventName, function (e) {
				if (buttons.is(':visible')) {
					return;
				}
				buttons.fadeIn();
				gaEvent('map', eventName, 'center_button_show');
			});
		});
	};

	var initCountDown = function() {
		var d = new Date(2019, 5, 16, 21, 30);// Jan is 0, Dec is 11

		var onEnd = function() {
			$('.simply-countdown').hide();
			$('.just-married').show();
		};

		simplyCountdown('.simply-countdown-one', {
			year: d.getFullYear(),
			month: d.getMonth() + 1,
			day: d.getDate(),
			hours: d.getHours(),
			minutes: d.getMinutes(),
			enableUtc: true,
			onEnd: onEnd
		});
	};

	var addTimelinePopupEvent = function() {
		$(".photo-viewer").on("click", function (e) {
			e.preventDefault();

			var image = $(this).attr('data-image');
			var width = $(this).attr('data-width');
			var height = $(this).attr('data-height');

			var items = [{
				src: image,
				w: width,
				h: height
			}];


			openPhotoSwipeView(items);

			var split = image.split("/");
			var fileName = split[split.length - 1];

			gaEvent('photoviewer', 'click', fileName);

			return false;
		});
	};

	function gaEvent(category, action, label) {
		ga('send', 'event', {
			eventCategory: category,
			eventAction: action,
			eventLabel: label
		});
	}

	
	$(function(){
		// mobileMenuOutsideClick();
		parallax();
		// offcanvasMenu();
		// burgerMenu();
		contentWayPoint();
		dropdown();
		shuffleSpecialThanks();
		testimonialCarousel();
		goToTop();
		goToMap();
		loaderPage();
		counter();
		counterWayPoint();
		initGallery();
		initNaverMap();
		initCountDown();
		addTimelinePopupEvent();
	});


}());