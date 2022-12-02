

$(document).ready(function(){
	var _window = $(window);
    var _document = $(document);

	$(".eqh").matchHeight();

	// menu
	$(".btn-menu").mouseover(function(){
		$(".dropdown-d-menu").css({display: "block"});
    });
   
   	$(".dropdown-d-menu").mouseleave(function(){
		$(".dropdown-d-menu").css({display: "none"});
   	});

	$('.tabs').tabslet({
		mouseevent: 'hover',
		attribute: 'href',
		animation: false
	});


	// dart-btn click
	const buttons = document.getElementsByClassName('dart-btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (e) {
            const wave = document.createElement('u'),
                waveOffset = this.getBoundingClientRect();
            console.log(waveOffset);

            const waveY = e.pageY - waveOffset.top,
                waveX = e.pageX - waveOffset.left;

            wave.style.top = waveY + 'px',
                wave.style.left = waveX + 'px',
                wave.style.background = this.getAttribute('data-button-background');

            this.appendChild(wave);

            setTimeout(function () {
                wave.parentNode.removeChild(wave);
            }, 1500);
        });
    }

	const elems = document.getElementsByClassName('material');
    for (let i = 0; i < elems.length; i++) {
        elems[i].addEventListener('click', function (e) {
            const wave = document.createElement('u'),
                waveOffset = this.getBoundingClientRect();
            console.log(waveOffset);

            const waveY = e.pageY - waveOffset.top,
                waveX = e.pageX - waveOffset.left;

            wave.style.top = waveY + 'px',
                wave.style.left = waveX + 'px',
                wave.style.background = this.getAttribute('data-button-background');

            this.appendChild(wave);

            setTimeout(function () {
                wave.parentNode.removeChild(wave);
            }, 1500);
        });
    }

	// footer blocks
	$('.footer__subtitle').on('click', function() {
        if (_window.width() < 768) {
            if ($(this).hasClass('is-active')) {
                $(this).removeClass('is-active');
                $(this).next('ul').slideUp(200);
            } else {
                $('.footer__subtitle').removeClass('is-active');
                $('.footer__subtitle').next('ul').slideUp(200);

                $(this).addClass('is-active');
                $(this).next('ul').slideDown(200);
            }
        } else {
            $('.footer__subtitle').removeClass('is-active');
            $('.footer__subtitle').next('ul').slideDown();
        }
	});

	// mobile header
	$(window).scroll(function() {
		if (_window.width() < 991) {
			if ($(this).scrollTop() == 0) {
				$('.dart_header__mobile .search-block').show(200);
			} else {
				$('.dart_header__mobile .search-block').hide(200);
			}
		}
    });
	$(".geo_data a.mobile_city").click(function(e) {
		e.preventDefault();
		$('.city_select').addClass('active');
	});
	$(".city_select a.close").click(function(e) {
		e.preventDefault();
		$('.city_select').removeClass('active');
	});
	$(".mobile-menu").click(function(e) {
		e.preventDefault();
		if($(this).hasClass('noactive')){
			$('.dart_header__mobile').addClass("d_active");
			$(this).removeClass("noactive");
		}else{
			$('.dart_header__mobile').removeClass("d_active");
			$('.mobile_catalog').removeClass("active");
			$(".mobile_catalog .mobile-catalog__inner-block").removeClass("active");
            $('.mobile_catalog .root_menu').addClass("active");
			$('.mobile_navigation a').removeClass('active');
			$(this).addClass("noactive");			
		}
			
		if($('body').hasClass("noscroll")){
			$('body').removeClass("noscroll");
		}else{
			$('body').addClass("noscroll");
		}   
	});
	$(document).on("click", ".toggle_catalog", function(e){
		e.preventDefault();
		$('.mobile_menu_catalog').toggleClass("active");
		if($('body').hasClass("noscroll")){
			$('body').removeClass("noscroll");
		}else{
			$('body').addClass("noscroll");
		}   
	});
	$(document).on("click", ".toggle_lk", function(e){
		e.preventDefault();
		$('.mobile_menu_lk').toggleClass("active");
		if($('body').hasClass("noscroll")){
			$('body').removeClass("noscroll");
		}else{
			$('body').addClass("noscroll");
		}   
	})
	$(".mobile_catalog .root_menu ul>li>a").click(function(e){
        var target = $(this).data("target");
        if(target){
            e.preventDefault();
            $(".mobile_catalog .root_menu").removeClass("active");
            $(target).addClass("active");
        }
    });
    $(".mobile_catalog .back").click(function(e){
        e.preventDefault();
        var target = $(this).data("target");
        if(target){
            $(".mobile_catalog .mobile-catalog__inner-block").removeClass("active");
            $(target).addClass("active");
        }
    });
	$('.mobile_catalog a.close').click(function(e){
		e.preventDefault();
		$(this).closest('.mobile_catalog').removeClass('active');
		if($('body').hasClass("noscroll")){
			$('body').removeClass("noscroll");
		}else{
			$('body').addClass("noscroll");
		}  
	});
	// FILTER HANDLER
	$(".filter-toggler").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("noactive");
		var overlay = $(".overlay");
		$('.widget.filters').toggleClass("active");
		if($('body').hasClass("noscroll")){			
			$('body').removeClass("noscroll");
		}else{
			$('body').addClass("noscroll");
		}   
		overlay.toggleClass("active");
	});	
	$(".overlay").click(function(e) {
		var overlay = $(".overlay");
		$(".filter-toggler").toggleClass("noactive");
		$('.widget.filters').toggleClass("active");
		if($('body').hasClass("noscroll")){			
			$('body').removeClass("noscroll");
		}else{
			$('body').addClass("noscroll");
		}   
		overlay.toggleClass("active");
	});
	$(".filter-close").click(function(e) {
		e.preventDefault();
		var overlay = $(".overlay");
		$(".filter-toggler").toggleClass("noactive");
		$('.widget.filters').toggleClass("active");
		if($('body').hasClass("noscroll")){
			$('body').removeClass("noscroll");
		}else{
			$('body').addClass("noscroll");
		}            
		overlay.toggleClass("active");    
	});
    $(".filters_reset").click(function(){
		$("#mse2_filters").trigger("reset");
	});
	$(".widget-filter .filters-title").click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass("active");
    });
	$(".sort-toggler").click(function(e) { 
		e.preventDefault();
		$(this).parent().toggleClass("active");
	});	
	// ANCHOR HANDLER
    $(document).on("click", '.toanchor', function(e){
        e.preventDefault();
        $("html, body").animate({
		 scrollTop: $($(this).attr("href")).offset().top + "px"
	        }, {
		 duration: 500,
		 easing: "swing"
	    });
	    return false;
    });
	// SLIDERS
	var owlRelated = $('.preview_slider');
	owlRelated.owlCarousel({
        loop: false,
        items: 5,
        margin: 10,
        nav: true,
        dots: true,
        navText: ['<i class="d_icon d_icon-angle-left" aria-hidden="true"></i>', '<i class="d_icon d_icon-angle-right" aria-hidden="true"></i>'],
        responsive: {
			0: {
            	items: 1
            },
            400: {
            	items: 2
            },
            800: {
            	items: 3
            },
            1200: {
            	items: 4
            }
        }
	});

	var owlRelated = $('.related_slider');
	owlRelated.owlCarousel({
        loop: false,
        items: 5,
        margin: 12,
        nav: true,
        dots: true,
        navText: ['<i class="d_icon d_icon-angle-left" aria-hidden="true"></i>', '<i class="d_icon d_icon-angle-right" aria-hidden="true"></i>'],
        responsive: {
			0: {
            	items: 1
            },
            400: {
            	items: 2
            },
            800: {
            	items: 3
            },
            1000: {
            	items: 4
            },
            1200: {
            	items: 5
            }
        }
	});
    // QUANTITY
	$('.dart-quantity .dart-quantity__btn').click(function(e){
        e.preventDefault();
        var elem = $(this).closest('.dart-quantity').find('input.dart-quantity__counter');
        var krat = $(this).closest('.dart-quantity').find('input.dart-quantity__counter').data('krat');
        var min = $(this).closest('.dart-quantity').find('input.dart-quantity__counter').data('min');
        var currentQty= elem.val();
		if(!krat){
			krat = 1;
		}
		if(!min){
			min = 1;
		}
        if( $(this).hasClass('minus') && currentQty>min){
            elem.val(parseInt(currentQty, 10) - krat);
            elem.trigger("change");
        }else{
            if( $(this).hasClass('plus')){
                elem.val(parseInt(currentQty, 10) + krat);
                elem.trigger("change");
            }
        }
    });

	/* ---------------- NOT FOR PROD ----------------- */
	if($("#map").length){
		ymaps.ready(init);
		$(document).on("click", ".map_layout a", function(e){
			e.preventDefault();
			$(this).closest(".deliveries-map__content").addClass("active");
		});
	}	

	function init() {
		var myMap = new ymaps.Map("map", {
			center: [58.004531, 56.238367],
			zoom: 10
		}, {
			searchControlProvider: 'yandex#search'
		});

		myMap.geoObjects
			.add(new ymaps.Placemark([58.004531, 56.238367], {
				balloonContent: 'Пример метки'
			}, {
				preset: 'islands#redIcon'
		}));
	}

	/* ---------------- / NOT FOR PROD ----------------- */
	/*

	NOT FOR PROD

    $('.sl-quantity button.btn-count').click(function(e){
        e.preventDefault();
        var elem = $(this).closest('.sl-quantity').find('input.counter');
        var krat = $(this).closest('.sl-quantity').find('input.counter').data('krat');
        var min = $(this).closest('.sl-quantity').find('input.counter').data('min');
        var currentQty= elem.val();

        if( $(this).hasClass('minus') && currentQty>min){
            elem.val(parseInt(currentQty, 10) - krat);
            elem.trigger("change");
        }else{
            if( $(this).hasClass('plus')){
                elem.val(parseInt(currentQty, 10) + krat);
                elem.trigger("change");
            }
        }
    });
    // ms2 pseudo submit
    $(".pseudo_submit").click(function(e) { 
		e.preventDefault();
		$('body').addClass("sl_noscroll");  
		$('body').addClass('loading');
		$(this).attr("disabled");
		$("#msOrder .ms2_link").trigger("click");
	});	
	*/
    
	
    // phone mask has bug
    // $('input.phone').mask('+9 (999) 999 99 99');
    // tabs
    $(document).on("click", ".tabber", function(e){
        e.preventDefault();
        var target = $(this).attr("href");
        $(".tabber").removeClass("active");
        $(this).addClass("active");
        $(".tabber-c").hide();
        $(target).show();
    });
    
    // sort handlers
    
    var $element_filter = $('.sorting_box');
	if($element_filter.length){
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
			var offset = $element_filter.offset().top + $element_filter.height();        
			if (scroll > offset) {
				$('.flyer_filters').addClass('active');
			}else{
				$('.flyer_filters').removeClass('active');
			}
		});
		$( window ).resize(function() {
			var $element_filter = $('.sorting_box');
			var scroll = $(window).scrollTop();
			var offset = $element_filter.offset().top + $element_filter.height();        
			if (scroll > offset) {
				$('.flyer_filters').addClass('active');
			}else{
				$('.flyer_filters').removeClass('active');
			}
		});
	}

	// PRODUCT GALLERY	
	var sync1 = $(".product-gallery .big-gallery");
    var sync2 = $(".product-gallery .small-gallery");
    var slidesPerPage = 3;
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
		margin: 0,
		nav: true,
		dots: false,
		navText: ['<i class="d_icon d_icon-angle-left" aria-hidden="true"></i>', '<i class="d_icon d_icon-angle-right" aria-hidden="true"></i>'],
        responsive: {
			0: {
				items: 1,
				nav: false,
				dots: true,
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            margin: 16,
			nav: false,
			dots: false,
			navText: ['<i class="d_icon d_icon-angle-left" aria-hidden="true"></i>', '<i class="d_icon d_icon-angle-right" aria-hidden="true"></i>'],
        	responsive: {
				0: {
					items: 4
				},
				600: {
					items: 4
				},
				1000: {
					items: 4
				},
				1200: {
					items: 4
				}
			}
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        var current = el.item.index;
        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
	
	$(document).mouseup(function (e){
		var div = $(".sorting_box_inner");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0
			&& div.hasClass("active")) { 
			div.toggleClass("active");
		}
	});
	
    
    // MAIN SLIDER
	$(function() {
		var main_owl = $('.main-slider'),	
		owlOptions = {
			loop: false,
			navText: ['<i class="d_icon d_icon-angle-left" aria-hidden="true"></i>', '<i class="d_icon d_icon-angle-right" aria-hidden="true"></i>'],
			margin: 8,
			nav: true,
			dots: true,
			items: 1,
			responsive: {
				0: {
					items: 1.025,
					nav: false
				},
				400: {
					items: 1,
					nav: false
				},
				760: {
					items: 1,
					nav: false
				},
				991: {
					items: 1,
					nav: true
				}
			  }
		};	
		var owlActive = main_owl.owlCarousel(owlOptions);		
	});
	// MAIN MENU SLIDER
	$(function() {
		var menu_owl = $('.main_menu_slider'),	
			owlOptions = {
			  	loop: false,
				margin: 8,
				nav: false,
				dots: false,
				items: 6,
				responsive: {
					0: {
					  items: 1,
					  nav: false
					},
					200: {
					  items: 1,
					  nav: false
					},
					300: {
					  items: 2,
					  nav: false
					},
					400: {
						items: 3,
						nav: false
					  },
					760: {
					  items: 4,
					  nav: false
					},
					900: {
					  items: 5,
					  nav: false
					}
				  }
			};	
		if ( $(window).width() < 1200 ) {
			var owlActive = menu_owl.owlCarousel(owlOptions);
		} else {
			menu_owl.addClass('off');
		}
	
		$(window).resize(function() {
			if ( $(window).width() < 1200 ) {
				if ( $('.main_menu_slider').hasClass('off') ) {
					var owlActive = menu_owl.owlCarousel(owlOptions);
					menu_owl.removeClass('off');
				}
			} else {
				if ( !$('.main_menu_slider').hasClass('off') ) {
					menu_owl.addClass('off').trigger('destroy.owl.carousel');
					menu_owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
				}
			}
		});
	});
	
	// TABLETS SLIDER 
	$(function() {
		var tablets_owl = $('.owl-carousel-tablets'),
	
			owlOptions = {
			  	loop: false,
				margin: 16,
				nav: false,
				dots: false,
				items: 1,
				responsive: {
					0: {
						items: 2
					},
					300: {
						items: 3
					},
					600: {
						items: 4
					},
					900: {
						items: 4
					}
				}
			};
	
		if ( $(window).width() < 991 ) {
			var owlActive = tablets_owl.owlCarousel(owlOptions);
		} else {
			tablets_owl.addClass('off');
		}
	
		$(window).resize(function() {
			if ( $(window).width() < 991 ) {
				if ( $('.owl-carousel-tablets').hasClass('off') ) {
					var owlActive = tablets_owl.owlCarousel(owlOptions);
					tablets_owl.removeClass('off');
				}
			} else {
				if ( !$('.owl-carousel-tablets').hasClass('off') ) {
					tablets_owl.addClass('off').trigger('destroy.owl.carousel');
					tablets_owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
				}
			}
		});
	});

	// MOBILE SLIDER 
	$(function() {
		var owl = $('.owl-carousel-mobile'),
	
			owlOptions = {
			  	loop: false,
				margin: 8,
				nav: false,
				dots: false,
				items: 1
			};
	
		if ( $(window).width() < 601 ) {
			var owlActive = owl.owlCarousel(owlOptions);
		} else {
			owl.addClass('off');
		}
	
		$(window).resize(function() {
			if ( $(window).width() < 601 ) {
				if ( $('.owl-carousel-mobile').hasClass('off') ) {
					var owlActive = owl.owlCarousel(owlOptions);
					owl.removeClass('off');
				}
			} else {
				if ( !$('.owl-carousel-mobile').hasClass('off') ) {
					owl.addClass('off').trigger('destroy.owl.carousel');
					owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
				}
			}
		});
	});
	// ANIMATE ON SCROLL
	$(document).bind("scroll",function(){
        $(".owl-carousel-mobile").each(function(){
          	var position = $(this).offset().top;
          	var classToBeAdded = "scroll_hook";
			if (position + 150 > $(window).scrollTop() + $(window).height()){
                $(this).removeClass(classToBeAdded);
          	}
          	if (position + 150 < $(window).scrollTop() + $(window).height()){
            	$(this).addClass(classToBeAdded);
          	}         
			if (position+$(this).height()+600 < $(window).scrollTop() + $(window).height()){
                $(this).removeClass(classToBeAdded);
          	}
        });
      });

	var screen_width = document.documentElement.clientWidth;
    var container_width = $("footer .dart_container").innerWidth();
    var field = (screen_width - container_width) / 2 + 15;
    //alert(field);    
    if($(".slider_card").length){
        $(".slider_card .item:first-child").css("margin-left",field+"px");
        var owl = $(".slider_card").owlCarousel({
            margin: 32,
            loop: false,
            autoWidth: true,
            items: 4
        });  
        $( window ).resize(function(){
            owl = $(".slider_card");
            owl.trigger('destroy.owl.carousel');
            var screen_width = document.documentElement.clientWidth;
            var container_width = $("footer .dart_container").innerWidth();
            var field = (screen_width - container_width) / 2 + 15;
            $(".slider_card .item:first-child").css("margin-left",field+"px");
            var owl = $(".slider_card").owlCarousel({
                margin: 32,
                loop: false,
                autoWidth: true,
                items: 4
            });  
        });
    }     
});

