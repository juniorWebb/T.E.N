var THEMEMASCOT = {};
(function($) {

	"use strict";


  THEMEMASCOT.isRTL = {
    check: function() {
      if( $( "html" ).attr("dir") === "rtl" ) {
        return true;
      } else {
        return false;
      }
    }
  };

  THEMEMASCOT.isLTR = {
    check: function() {
      if( $( "html" ).attr("dir") !== "rtl" ) {
        return true;
      } else {
        return false;
      }
    }
  };
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}

	//Training Carousel
	if ($('.training-carousel').length) {
		$('.training-carousel').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 30,
			nav: false,
			smartSpeed: 400,
			autoplay: true,
			navText: ['<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				768: {
					items: 2
				},
				1023: {
					items: 3
				},
			}
		});
	}


	//Training CarouselTwo
	if ($('.training-carousel-two').length) {
		$('.training-carousel-two').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 30,
			nav: false,
			smartSpeed: 400,
			autoplay: true,
			navText: ['<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				768: {
					items: 2
				},
				1023: {
					items: 3
				},
				1200:{
					items: 4
				},
			}
		});
	}


	//Countries-carousel
	if ($('.countries-carousel').length) {
		$('.countries-carousel').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 10,
			nav: false,
			smartSpeed: 500,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout: 10000,
			navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				380: {
					items: 2,
				},
				600: {
					items: 3,
				},
				991: {
					items: 4
				},
				1200: {
					items: 5
				},
				1400: {
					items: 6
				},
			}
		});
	}

	
	// Testinomials Slider With Thumb
	if ($('.testimonial-content').length) {
		var testimonial_thumbs = new Swiper('.testimonial-thumbs', {
			spaceBetween: 10,
			loop: false,
			slidesPerView: 3,
			breakpoints: {
				320: {
					slidesPerView: 3,
				},
				600: {
					slidesPerView: 3,
				},
				600: {
					slidesPerView: 3,
				},
			}
		});

		var testimonial_content = new Swiper('.testimonial-content', {
			spaceBetween: 0,
			effect: 'fade',
			loop: true,
			thumbs: {
				swiper: testimonial_thumbs
			},
			navigation: {
				nextEl: ".testi-button-next",
				prevEl: ".testi-button-prev",
			},
			pagination: {
				el: ".testimonial-pagination",
			},
		});
	}


	//Services Carousel
	if ($('.services-carousel').length) {
		$('.services-carousel').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 0,
			nav: false,
			smartSpeed: 400,
			autoplay: true,
			navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1200: {
					items: 3
				},
			}
		});
	}


	// Testimonial Carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 30,
			nav: false,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				991: {
					items: 3
				},
				1200: {
					items: 3
				},
			}
		});
	}

	
	//Services Slider
	if ($('.services-slider').length) {
		var swiper = new Swiper(".services-slider", {
			slidesPerView: 1,
			spaceBetween: 30,
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1023: {
					slidesPerView: 3,
				},
			},
			pagination: {
				el: ".services-pagination",
				type: "progressbar",
			},
		});
	}


	//Services-Slider With Coverflow Effect
	if ($('.team-slider').length) {
		var swiper = new Swiper(".team-slider", {
			effect: "coverflow",
			grabCursor: true,
			centeredSlides: false,
			slidesPerView: "3",
			coverflowEffect: {
				rotateY: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: false,
			},
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar",
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 3,
				},
				1023: {
					slidesPerView: 3,
				},
			},
		});
	}


	//Clients Carousel
	if ($('.clients-carousel').length) {
		$('.clients-carousel').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 10,
			nav: true,
			smartSpeed: 400,
			autoplay: true,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				600: {
					items: 3
				},
				768: {
					items: 3
				},
				1200: {
					items: 4
				},
				1400: {
					items: 5
				},
			}
		});
	}

	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}

	
	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);