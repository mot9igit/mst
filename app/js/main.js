
var swiper = new Swiper('.swiper', {
	slidesPerView: getDirection(),
	direction: 'horizontal',
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	on: {
	  resize: function () {
		swiper.changeDirection(getDirection());
	  },
	},

	breakpoints: {
		0: {
			slidesPerView: 1.5,
			spaceBetween: 20
		},
		590: {
			slidesPerView: 2.5,
			spaceBetween: 20
		},
		767: {
			slidesPerView: 1.5,
			spaceBetween: 20
		},
		990: {
			slidesPerView: 2.5,
			spaceBetween: 20
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 40
		},
		1500: {
			slidesPerView: 4,
			spaceBetween: 40
		}
	  }
  });
  
  function getDirection() {
	var windowWidth = window.innerWidth;
	var slidesPerView = window.innerWidth <= 1200 ? 3 : 3;
  
	return slidesPerView;
  }

function init_t () {
	var myMap = new ymaps.Map("ya_map", {
	  center: [ 55.903610, 37.434476 ],
	  zoom: 16
	}, {
	  searchControlProvider: 'yandex#search'
	}),
	myPlacemark = new ymaps.Placemark([ 55.903269, 37.420483 ], {
		balloonContentHeader: "152934, Россия, Московская область, г. Химки, ул. Ленинградская, 29, этаж 9, помещение 4",
		balloonContentBody: '<div class="contacts"><div class="item">' +
			'<i class="fa fa-envelope"></i>' +
			'<a href="mailto:info@mst.tools" class="email" itemprop="email">info@mst.tools</a>' +
		'</div>' + 
		'<div class="item">' +
			'<meta itemprop="telephone" content="+74951242024">' +
			'<i class="d_icon d_icon-phone"></i>' +
			'<a href="tel:+74951242024" class="phone">+7 (495) 124-20-24</a>' +
		'</div></div>',
		balloonContentFooter: "",
		hintContent: "СнегоТехника г. Рыбинск, тел. 8 (908) 029-45-44"
	});	
	myMap.geoObjects.add(myPlacemark);
	myPlacemark.balloon.open();
	myMap.behaviors.disable('scrollZoom');
}
$(document).ready(function() {
	if($('#ya_map').length){
		ymaps.ready(init_t);
	}
});

// SEARCH

/*
$(document).ready(function(){
	$(document).on("focusin", ".dart_header_search-block input", function(e){
		$('.dart-search').addClass('active');
	})
	$(document).on("focusout", ".dart_header_search-block input", function(e){
		$('.dart-search').removeClass('active');
	})
})
*/

var dart_search = {
	options: {
		input: '.dart_header_search-block input',
		inputAlt: '.search-block input',
		formInput: '.dart-search__form input',
		search: '.dart-search',
		activeClass: 'active',
		overlay: '.dart-search__overlay',
		dialog: '.dart-search__dialog',
		clear: '.dart-search__clear'
	},
	initialize: function(){
		const searchField = document.querySelector(this.options.input)
		searchField.addEventListener( 'focusin', (e) => {
			const body = document.querySelector('body')
			const formInput = document.querySelector(this.options.formInput)
			var elementOffset = e.target.getBoundingClientRect().top;
			var availableHeight = window.innerHeight
			const field = document.querySelector(this.options.search)
			field.classList.add(this.options.activeClass)
			if(elementOffset > 0){
				field.style.paddingTop = elementOffset + 'px'
			}else{
				field.style.paddingTop = 0
			}			
			this.getHeight(availableHeight)	
			body.classList.add('noscroll')	
			formInput.focus()			
		})
		const searchFieldAlt = document.querySelector(this.options.inputAlt)
		searchFieldAlt.addEventListener( 'focusin', (e) => {
			const body = document.querySelector('body')
			const formInput = document.querySelector(this.options.formInput)
			var elementOffset = e.target.getBoundingClientRect().top;
			var availableHeight = window.innerHeight
			const field = document.querySelector(this.options.search)
			field.classList.add(this.options.activeClass)
			if(elementOffset > 0){
				field.style.paddingTop = elementOffset + 'px'
			}else{
				field.style.paddingTop = 0
			}			
			this.getHeight(availableHeight)	
			body.classList.add('noscroll')
			formInput.focus()				
		})
		const overlay = document.querySelector(this.options.overlay)
		overlay.addEventListener( 'click', (e) => {
			const body = document.querySelector('body')
			const field = document.querySelector(this.options.search)
			field.classList.remove(this.options.activeClass)
			body.classList.remove('noscroll')	
		})
		const clear = document.querySelector(this.options.clear)
		clear.addEventListener( 'click', (e) => {
			e.preventDefault();
			const body = document.querySelector('body')
			const searchField = document.querySelector(this.options.formInput)
			searchField.value = ""
			const field = document.querySelector(this.options.input)
			field.value = ""
			const search = document.querySelector(this.options.search)
			search.classList.remove(this.options.activeClass)
			body.classList.remove('noscroll')
		})
		window.addEventListener( 'resize', (e) => {
			var availableHeight = window.innerHeight
			this.getHeight(availableHeight)		
		})
	},
	getHeight: function(availableHeight){
		const dialog = document.querySelector(this.options.dialog)
		const height = availableHeight * 0.7
		if(availableHeight < 1000){			
			dialog.style.maxHeight = height + 'px'
		}
	}
}


document.addEventListener("DOMContentLoaded", function(event) { 
	dart_search.initialize();
});


$(document).ready(function(){
	var _window = $(window);
  	var _document = $(document);

	

	$(".eqh").matchHeight();

	// menu
	const menu = document.querySelector('.dart_desktop_menu');
	const menu_btn = document.querySelector('.btn-menu');
	document.addEventListener( 'click', (e) => {
		const withinBoundaries = e.composedPath().includes(menu);	
		const withinBtn = e.composedPath().includes(menu_btn);	
		if (!withinBoundaries && !withinBtn){
			menu.classList.remove('show', 'active');
			$(".dart_desktop_menu__items a.has-children").removeClass('active');
			$(".dart_desktop_menu__item").removeClass("active");
		}
	});
	$(document).on("click", ".btn-menu", function(e){
		e.preventDefault();
		$(".dart_desktop_menu").toggleClass("show");
	});
	$(".dart_desktop_menu__items a.has-children").mouseover(function(){
		$(".dart_desktop_menu__items a.has-children").removeClass('active');
		$(this).addClass("active");
		$(".dart_desktop_menu").addClass("active");
		$(".dart_desktop_menu__item").removeClass("active");
		var target = $(this).data("target")
		$(target).addClass("active");
  });
   
  $(".dart_desktop_menu__item").mouseleave(function(){
		$(".dart_desktop_menu__items a.has-children").removeClass('active');
		$(".dart_desktop_menu__item").removeClass("active");
		$(".dart_desktop_menu").removeClass("active");
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
	$(document).on('click', '.toggle-characteristic', function(e){
		e.preventDefault();
		$(this).closest('.dart-characters').toggleClass('active');
	})
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
		$('.mobile_menu_lk').removeClass("active");
		$('.mobile_menu_catalog').toggleClass("active");
		if($('body').hasClass("noscroll")){
			$('body').removeClass("noscroll");
		}else{
			$('body').addClass("noscroll");
		}   
	});
	$(document).on("click", ".toggle_lk", function(e){
		e.preventDefault();
		$('.mobile_menu_catalog').removeClass("active");
		$('.mobile_menu_lk').toggleClass("active");
		if($('body').hasClass("noscroll")){
			$('body').removeClass("noscroll");
		}else{
			$('body').addClass("noscroll");
		}   
	});
	$('.mobile_catalog li.has-children>a').click(function(e) {
		e.preventDefault();
		$(this).find('ul').toggleClass('active');
		$(this).parent().parent().toggleClass('inmenu');
		$(this).parent().toggleClass('active');		
	});
	
	$('.mobile_catalog li.has-children ul .closer a').click(function(e) {
		e.preventDefault();
		$(this).parent().parent().toggleClass('active');
		$(this).parent().parent().parent().parent().toggleClass('inmenu');
		$(this).parent().parent().parent().toggleClass('active');		
	});
	$('.mobile_catalog a.close').click(function(e){
		e.preventDefault();
		$(this).closest('.mobile_catalog').find(".mobile-vertical-menu-list").removeClass("inmenu");
		$(this).closest('.mobile_catalog').find(".has-children").removeClass("active");
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

	var owlStores = $('.stores-slider-js');
	owlStores.owlCarousel({
        loop: false,
        items: 6,
        margin: 12,
        nav: true,
        dots: false,
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
            	items: 6
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
	

	// stores map filter
	if($("#stores-map").length){
		ymaps.ready(init_stores_map);
	}	

	function init_stores_map() {
		var myMap = new ymaps.Map("stores-map", {
			center: [58.004531, 56.238367],
			zoom: 10,
			controls: ['zoomControl']
		}, {
			searchControlProvider: 'yandex#search'
		});

		var element = {
			image: 'img/stores/store.jpg',
			phones: '+7 (900) 123-45-67',
			workTime: 'с 08:00 до 17:00'
		};
		var text = '<div class="sl_baloon_header"><img src="img/stores/store.jpg" width="15"/>"СпецПрофОборудование”</div>';
		if(element['phones']){
				text = text+'<div class="sl_baloon_phones sl_baloon_block"><b>Телефоны:</b><br/>+7 (900) 123-45-67</div>';
		}
		if(element['workTime']){
				text = text+'<div class="sl_baloon_works sl_baloon_block"><b>Время работы:</b><br/>с 08:00 до 17:00</div>';
		}
		text = text+'<div class="sl_baloon_submit sl_baloon_block"><button type="button" class="sl_check">Забрать отсюда</button></div>';

		myMap.geoObjects
			.add(new ymaps.Placemark([58.004531, 56.238367], {
				balloonContent: text
			}, {
				preset: 'islands#redIcon'
		}));
	}

	$('.stores-map .toggler a').click(function(e){
		e.preventDefault();
		$(this).closest('.stores-map').toggleClass('map-mode');
	})

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
	$(function() {
		var main_full_owl = $('.main-full-slider'),	
		owlOptions = {
			loop: false,
			navText: ['<i class="d_icon d_icon-angle-left" aria-hidden="true"></i>', '<i class="d_icon d_icon-angle-right" aria-hidden="true"></i>'],
			margin: 0,
			nav: true,
			dots: true,
			items: 1,
			responsive: {
				0: {
					items: 1,
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
		var owlMainActive = main_full_owl.owlCarousel(owlOptions);		
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

	// PERSONAL SLIDER 
	$(function() {
		var tablets_owl = $('.owl-carousel-personal'),	
			owlOptions = {
			  	loop: false,
				margin: 16,
				nav: true,
				dots: false,
				autoWidth: true,
				navText: ['<i class="d_icon d_icon-angle-left" aria-hidden="true"></i>', '<i class="d_icon d_icon-angle-right" aria-hidden="true"></i>'],
				items: 1,
				responsive: {
					0: {
						items: 1
					},
					300: {
						items: 1
					},
					600: {
						items: 2
					},
					900: {
						items: 4
					}
				}
			};
	
		if ( $(window).width() < 1436 ) {
			var owlActive = tablets_owl.owlCarousel(owlOptions);
		} else {
			tablets_owl.addClass('off');
		}
	
		$(window).resize(function() {
			if ( $(window).width() < 1436 ) {
				if ( $('.owl-carousel-personal').hasClass('off') ) {
					var owlActive = tablets_owl.owlCarousel(owlOptions);
					tablets_owl.removeClass('off');
				}
			} else {
				if ( !$('.owl-carousel-personal').hasClass('off') ) {
					tablets_owl.addClass('off').trigger('destroy.owl.carousel');
					tablets_owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
				}
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

const scrollTable = document.querySelector('.scroll-attention');
if(scrollTable){
	scrollTable.addEventListener("scroll", (event) => {
		if(scrollTable.scrollLeft > 20){
			scrollTable.classList.add("scroll-right");
		}else{
			scrollTable.classList.remove("scroll-right");
		}
	});
}


// Выбор По алфавиту/По региону в выборе города
function toggleFilterCity(){
	//Получаем индекс нажатой кнопки
	let cheackFilter = document.getElementsByName("sity_filter_id");

	if(cheackFilter[0].checked){
		document.getElementById("choice_city").classList.add("filter_city")
	}else{
		document.getElementById("choice_city").classList.remove("filter_city")
	}
}

function toggleMapAndList(){
	document.getElementById('choice_store').classList.toggle("display_map_or_list")
}

//кнопка на странице return_creating

const buttonNext = document.querySelector('.return-next-page');

if(buttonNext){
	buttonNext.addEventListener('click', function() {
		document.querySelector('.return-container_one').classList.add('return-page-two')
		document.querySelector('.return-container_two').classList.add('return-page-two')
	})
}

// Dropdown menu

// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

	// Клик по кнопке. Открыть/Закрыть select
	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('dropdown__list--visible');
        this.classList.add('dropdown__button--active');
	});

	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list--visible');
		});
	});

	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});

	// Нажатие на Tab или Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});
});

// Конец Dropdown menu

// Выделение всех cheackbox на странице возврата

document.querySelector('input[name=table-return-cheack-select-all]').addEventListener('click', function (e) {
	console.log("Клик")
    var els = document.querySelectorAll(
      'input[name=table-return-cheack]'
    );

    Array.prototype.forEach.call(els, function(cb){
      cb.checked = e.target.checked;
    });
  })
;

// document.querySelector('.return-container_display-flex').addEventListener('scroll', function() {
// 	// document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
// 	console.log("Скрол");
//   });
