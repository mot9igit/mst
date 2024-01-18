
//Переключение светлой/тёмной темы

// function changeTheme(isChecked) {
//     if (isChecked) {
//       document.body.setAttribute('dark', '');
//     } else {
//       document.body.removeAttribute('dark');
//     }
// }

//Утачнить город
const city_choice = document.querySelector('.change-city .dart-btn-icon-list');
const modal_city = document.querySelector('.change-city');
if(city_choice && modal_city){
    city_choice.addEventListener('click', () => {
        modal_city.classList.toggle('show')
    })
}

//Свайпер Акции большой
let swiper = new Swiper(".promoSwiper", {
    parallax: true,
    speed: 600,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false
    },
	breakpoints: {
		0: {
			slidesPerView: 1.05,
			spaceBetween: 8
		},
		430: {
			slidesPerView: 1.05,
			spaceBetween: 8
		},
		600: {
			slidesPerView: 1.1,
			spaceBetween: 8
		},
		768: {
			slidesPerView: 1.2,
			spaceBetween: 8
		},
		991: {
			slidesPerView: 1.3,
			spaceBetween: 8
		},
		1200: {
			slidesPerView: 1,
			spaceBetween: 8
		}
	}
});

//Свайпер акции сбоку
var swipertwo = new Swiper(".promoSwiperMini", {
    grid: {
        rows: 2,
    },
    slidesPerView: 2,
    spaceBetween: 8,
    loop: true,
    navigation: {
      nextEl: ".swiper-mini-next",
      prevEl: ".swiper-mini-prev",
    },
	breakpoints: {
		0: {
			grid: {
				rows: 1,
			},
			slidesPerView: 2,
		},
		430: {
			grid: {
				rows: 1,
			},
			slidesPerView: 2.5,
		},
		600: {
			grid: {
				rows: 1,
			},
			slidesPerView: 3.5,
		},
		768: {
			grid: {
				rows: 1,
			},
			slidesPerView: 5,
		},
		993: {
			grid: {
				rows: 1,
			},
			slidesPerView: 5,
		},
		1000: {
			grid: {
				rows: 1,
			},
			slidesPerView: 4.5,
		},
		1400: {
			grid: {
				rows: 1,
			},
			slidesPerView: 4,
		},
		1601: {
			grid: {
				rows: 2,
			},
			slidesPerView: 2,
		}
	}
});

//Свайпер новинки
var swipertree = new Swiper(".dartSwiperNew", {
    slidesPerView: 5,
    spaceBetween: 8,
    navigation: {
        nextEl: ".swiper-new-next",
        prevEl: ".swiper-new-prev",
    },
	breakpoints: {
		0: {
			slidesPerView: 1.9,
		},
		430: {
			slidesPerView: 2.8,
		},
		600: {
			slidesPerView: 3.6,
		},
		768: {
			slidesPerView: 4.6,
		},
		991: {
			slidesPerView: 5.6,
		},
		1200: {
			slidesPerView: 3.5,
		},
		1400: {
			slidesPerView: 4.5,
		},
		1800: {
			slidesPerView: 5.5,
		}
	}
});

//Свайпер производители
var swipertree = new Swiper(".dartSwiperManufacturer", {
    slidesPerView: 6,
    spaceBetween: 8,
    navigation: {
        nextEl: ".swiper-manufacturer-next",
        prevEl: ".swiper-manufacturer-prev",
    },
	breakpoints: {
		0: {
			slidesPerView: 2.5,
		},
		430: {
			slidesPerView: 3,
		},
		600: {
			slidesPerView: 4.5,
		},
		768: {
			slidesPerView: 5.5,
		},
		991: {
			slidesPerView: 6,
		}
	}
});

//Свайпер в комментариях

var swipertree = new Swiper(".swiperImageChangeShop", {
    slidesPerView: 4.5,
    spaceBetween: 8,
    navigation: {
        nextEl: ".swiper-image-next",
        prevEl: ".swiper-image-prev",
    }
});

//Свайпер комментариев
const swiperFeedbackProduct = document.querySelectorAll('.swiperFeedbackProduct');

if(swiperFeedbackProduct){
	for (let i = 0; i < swiperFeedbackProduct.length; i++) {

       //Свайпер новинки
		var swipertree = new Swiper(swiperFeedbackProduct[i], {
			slidesPerView: 12,
			spaceBetween: 8,
			navigation: {
				nextEl: ".swiper-feedback-next-" + (i+1),
				prevEl: ".swiper-feedback-prev-"+ (i+1),
			}
		});
    }
}


// Карточка товара

var mySwiperProduct = new Swiper(".mySwiperProduct", {
	loop: true,
	spaceBetween: 8,
	slidesPerView: 5,
	freeMode: true,
	watchSlidesProgress: true,
  });
  var mySwiperProductTwo = new Swiper(".mySwiperProductTwo", {
	loop: true,
	effect: "fade",
	spaceBetween: 8,
	navigation: {
	  nextEl: ".swiper-product-next",
	  prevEl: ".swiper-product-prev",
	},
	thumbs: {
	  swiper: mySwiperProduct,
	},
  });

const swiperDateOrder = document.querySelectorAll('.swiperDateOrder');
if(swiperDateOrder){
	for (let i = 0; i < swiperDateOrder.length; i++) {

       //Свайпер новинки
		var swipertree = new Swiper(swiperDateOrder[i], {
			slidesPerView: 8,
			spaceBetween: 8,
			navigation: {
				nextEl: ".swiper-date-next-"+ (i+1),
				prevEl: ".swiper-date-prev-"+ (i+1),
			},
		});
    }
}


//Левое меню каталог
const menu_items = document.querySelectorAll('.dart-catalog-menu__el');
if(menu_items){
    for (let i = 0; i < menu_items.length; i++) {
        menu_items[i].addEventListener("click", function() {
            menu_items[i].parentElement.classList.toggle("active");
        });
    }
}

//Левое меню с подкаталогами
const menuItems = document.querySelectorAll('.dart-menu-category__el');
if(menuItems){
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", function() {
            menuItems[i].parentElement.classList.toggle("active");
        });
    }
}

//Карта
let stores_map = {

	options: {
		wrapper: '.dart-menu-left__map',
		map: 'dart-menu-left__map',
		mapModal: 'changeshop__map',
		stores_list: '.modal-stores-map__items',
		search_form: '.modal-stores-map__form',
		toggler: '.dart-menu-left__map .toggler a',
		toggle_class: 'display_map_or_list',
		center: [55.903302, 37.420365], // Координаты пользователя
	},

	init: function(){
		let mainMap = new ymaps.Map(stores_map.options.map, {
			center: stores_map.options.center,
			zoom: 9,
			controls: ['zoomControl']
		});

		let mainMapModal = new ymaps.Map(stores_map.options.mapModal, {
			center: stores_map.options.center,
			zoom: 9,
			controls: ['zoomControl']
		});


		mainMap.geoObjects
			.add(new ymaps.Placemark(stores_map.options.center, {
				balloonContent: "Вы тут",
				hintContent: "Вы тут",
			}, {
				iconLayout: 'default#image',
				iconImageHref: '/img/icons/here.png',
				iconImageSize: [40, 40],
				iconImageOffset: [-20, -20]
		}));

		mainMapModal.geoObjects
			.add(new ymaps.Placemark(stores_map.options.center, {
				balloonContent: "Вы тут",
				hintContent: "Вы тут",
			}, {
				iconLayout: 'default#image',
				iconImageHref: '/img/icons/here.png',
				iconImageSize: [40, 40],
				iconImageOffset: [-20, -20]
		}));
		
		let stores = [
			{
				name: "Самоделкин",
				coordinats: [58.007903, 56.236651],
				address: "ул. Советская улица, 89с1",
				image: "/img/favicon.jpg",
				rating: 3
			},
			{
				name: "Самоделкин 2",
				coordinats: [54.007903, 51.236651],
				address: "ул. Советская улица, 89с1",
				image: "/img/favicon.jpg",
				rating: 5
			},
		]

		stores.forEach((element, index, array) => {

			const circleLayout = ymaps.templateLayoutFactory.createClass('<div class="map-circle-image"><img class="shop-map__icon shop-map__icon-map" src="'+ element['image'] +'" alt=""></div>');

			var myPlacemark = new ymaps.Placemark(element['coordinats'], {
				balloonContentBody: 
				'<div>' +
					'<div class="dart-row">' +
						'<div class="d-col-7">' +
						'<h4>' + element['name'] + '</h4>' +
						'<div class="dart-rating" data-rating='+ element['rating'] + '>' +
							'<i class="d_icon d_icon-star"></i>' +
							'<i class="d_icon d_icon-star"></i>' +
							'<i class="d_icon d_icon-star"></i>' +
							'<i class="d_icon d_icon-star"></i>' +
							'<i class="d_icon d_icon-star"></i>' +
						'</div>' +
						'</div>' + 
						'<div class="d-col-2">' +
						'<img class="shop-map__icon" src="'+ element['image'] +'" alt="">' +
						'</div>' +
					'</div>' +
					'<p class="mt-2 mb-1">'+ element['address'] +'</p>' +
					'<span class="shop-map__light-text">12 км</span>' +
					'<p class="shop-map__timing mt-3">Открыто до 20:00</p>' +
					'<a href="#" class="dart-btn dart-btn-primary-mini mt-2">Выбрать</a>' +
				'</div>'
			}, {
				iconLayout: circleLayout,
				// Описываем фигуру активной области "Круг".
				iconShape: {
					type: 'Circle',
					// Круг описывается в виде центра и радиуса
					
					coordinates: [0, 0],
					radius: 20
				}
			});
			mainMap.geoObjects.add(myPlacemark);
			mainMapModal.geoObjects.add(myPlacemark);
		});
	}
	

}

ymaps.ready(stores_map.init);

//Слайдер на странице поиска
const alldartSwiperSearch = document.querySelectorAll('.dartSwiperSearch');
if(alldartSwiperSearch){
	for (let i = 0; i < alldartSwiperSearch.length; i++) {

       //Свайпер новинки
		var swipertree = new Swiper(alldartSwiperSearch[i], {
			slidesPerView: 5,
			spaceBetween: 8,
			navigation: {
				nextEl: ".swiper-search-next-"+ (i+1),
				prevEl: ".swiper-search-prev-"+ (i+1),
			},
			breakpoints: {
				0: {
					slidesPerView: 1.5,
				},
				410: {
					slidesPerView: 2,
				},
				600: {
					slidesPerView: 3,
				},
				800: {
					slidesPerView: 4,
				},
				1000: {
					slidesPerView: 5,
				},
				1200: {
					slidesPerView: 3,
				},
				1350: {
					slidesPerView: 3.5,
				},
				1450: {
					slidesPerView: 4,
				},
				1700: {
					slidesPerView: 4.5,
				},
				1780: {
					slidesPerView: 5,
				}
			}
		});
    }
}

//Открытие менюшки

const menu_toggler = document.querySelector('.nav-dart-menu');
const sidebar = document.querySelector('.sidebar');
const body = document.querySelector('body');

if(menu_toggler && sidebar){
	menu_toggler.addEventListener('click', () => {
		sidebar.classList.toggle('show');
		body.style.overflow = "hidden"
		
	})
}

//Закрытие менюшки

// function closeSidebar(){
	if(sidebar){
		sidebar.addEventListener('click', () => {
			sidebar.classList.remove('show');
			body.style.overflow = "auto"
		})
		
	}
// }

// Выбор По алфавиту/По региону в выборе города

const toggleFilterCity = document.querySelectorAll('.toggleFilterCity');

if(toggleFilterCity){
	for(let i = 0; i < toggleFilterCity.length; i++){
		toggleFilterCity[i].addEventListener('click', () => {

			//Получаем индекс нажатой кнопки
			let cheackFilter = document.getElementsByName("sity_filter_id");

			if(cheackFilter[0].checked){
				document.getElementById("choice_city").classList.add("filter_city")
			}else{
				document.getElementById("choice_city").classList.remove("filter_city")
			}
		})
	}
}

//Карта desctop

// const showCardButton = document.querySelectorAll('.showMap');
// const changeshop = document.querySelector('.changeshop')

// if(showCardButton && changeshop){
// 	for(let i = 0; i < showCardButton.length; i++){
// 		showCardButton[i].addEventListener('click', () => {
// 			changeshop.classList.toggle('show');
// 			body.style.overflow = "hidden"
// 		})
// 	}
// }

// const closeChangeShop = document.querySelectorAll('.closeChangeShop');

// if(closeChangeShop){
// 	for(let i = 0; i < closeChangeShop.length; i++){
// 		closeChangeShop[i].addEventListener('click', () => {

// 			changeshop.classList.remove('show');
// 			body.style.overflow = "auto"
// 		})
// 	}
// }

// const changeshopToggler = document.querySelectorAll('.changeshop-toggler');

// if(changeshopToggler){
// 	for (let i = 0; i < changeshopToggler.length; i++) {
// 		changeshopToggler[i].addEventListener('click', () => {
// 			changeshop.classList.toggle('showList')
// 		})
// 	}
	
// }

// //changeshop переход в отзывам
// const btnToggleRating = document.querySelectorAll('.btnToggleRating')

// if(btnToggleRating){
// 	for(let i = 0; i < btnToggleRating.length; i++){
// 		btnToggleRating[i].addEventListener('click', () => {
// 			changeshop.classList.toggle('showList')
// 		})
// 	}
// }

const changeshop = document.querySelector('.changeshop') //Модалка

const btnActiveChangeshopOn = document.querySelectorAll('.btnActiveChangeshopOn'); //Открывает модалку
const btnActiveChangeshopOff = document.querySelectorAll('.btnActiveChangeshopOff'); //Закрывает модалку
const btnMapOn = document.querySelectorAll('.btnMapOn'); //Открываем карту на мобильных устройствах
const btnListOn = document.querySelectorAll('.btnListOn'); //Открываем список на мобильных устройствах
const btnRatingOn = document.querySelectorAll('.btnRatingOn') //Открываем рейтинг
const btnRatingOff = document.querySelectorAll('.btnRatingOff') //Закрываем рейтинг

function clearAllChangeshop(){
	changeshop.classList.remove('showList')
	changeshop.classList.remove('showRating')
}

if(btnActiveChangeshopOn){
	for(let i = 0; i < btnActiveChangeshopOn.length; i++){
		btnActiveChangeshopOn[i].addEventListener('click', () => {
			clearAllChangeshop()
			changeshop.classList.add('show')
			body.style.overflow = "hidden"
		})
	}
}

if(btnActiveChangeshopOff){
	for(let i = 0; i < btnActiveChangeshopOff.length; i++){
		btnActiveChangeshopOff[i].addEventListener('click', () => {
			changeshop.classList.remove('show')
			body.style.overflow = "auto"
		})
	}
}

if(btnMapOn){
	for(let i = 0; i < btnMapOn.length; i++) {
		btnMapOn[i].addEventListener('click', () => {
			clearAllChangeshop()
			changeshop.classList.remove('showList')
		})
	}
}

if(btnListOn){
	for(let i = 0; i < btnListOn.length; i++) {
		btnListOn[i].addEventListener('click', () => {
			clearAllChangeshop()
			changeshop.classList.add('showList')
		})
	}
}

if(btnRatingOn){
	for(let i = 0; i < btnRatingOn.length; i++) {
		btnRatingOn[i].addEventListener('click', () => {
			clearAllChangeshop()
			changeshop.classList.add('showRating')
		})
	}
}

if(btnRatingOff){
	for(let i = 0; i < btnRatingOff.length; i++) {
		btnRatingOff[i].addEventListener('click', () => {
			changeshop.classList.remove('showRating')
			changeshop.classList.add('showList')
		})
	}
}

//Ползунок

$(".polzunok-5").slider({
    min: 0,
    max: 100000,
    values: [0, 100000],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
        $(".polzunok-input-5-left").val(ui.values[ 0 ]);   
        $(".polzunok-input-5-right").val(ui.values[ 1 ]);  
    }    
});
$(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
$(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
$(".polzunok-container-5 input").change(function() {
    var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),    
    opt_left = $(".polzunok-5").slider("option", "min"),
    where_right = $(".polzunok-5").slider("values", 1),
    input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),    
    opt_right = $(".polzunok-5").slider("option", "max"),
    where_left = $(".polzunok-5").slider("values", 0); 
    if (input_left > where_right) { 
        input_left = where_right; 
    }
    if (input_left < opt_left) {
        input_left = opt_left; 
    }
    if (input_left == "") {
    input_left = 0;    
    }        
    if (input_right < where_left) { 
        input_right = where_left; 
    }
    if (input_right > opt_right) {
        input_right = opt_right; 
    }
    if (input_right == "") {
    input_right = 0;    
    }    
    $(".polzunok-input-5-left").val(input_left); 
    $(".polzunok-input-5-right").val(input_right); 
    if (input_left != where_left) {
        $(".polzunok-5").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
        $(".polzunok-5").slider("values", 1, input_right);
    }
});

//Модальное окно фильтров
const showModalFiltrs = document.querySelectorAll('.showModalFiltrs');
const allFiltrsModal = document.querySelector('.allFiltrsModal');
let isModalFiltrs = false;

if(showModalFiltrs && allFiltrsModal){
	for(let i = 0; i < showModalFiltrs.length; i++){
		showModalFiltrs[i].addEventListener('click', () => {
			if(isModalFiltrs){
				allFiltrsModal.classList.remove('show')
				body.style.overflow = "auto"
				isModalFiltrs = false
			}else{
				allFiltrsModal.classList.add('show')
				body.style.overflow = "hidden"
				isModalFiltrs = true
			}	
		})
	}
}

//Фильтры раскрытие пунктов
const widget_filter = document.querySelectorAll('.widget-filter__title');
if(widget_filter){
    for (let i = 0; i < widget_filter.length; i++) {
        widget_filter[i].addEventListener("click", function() {
            widget_filter[i].parentElement.classList.toggle("active");
        });
    }
}

// Модальное окно поиска

const headerSearchToggle = document.querySelectorAll('.headerSearchToggle');
const headerSearch = document.querySelector('.dart-header__search');
const headerSearchAdd = document.querySelector('.dart-header__search input')

if(headerSearchToggle){
	for(let i = 0; i < headerSearchToggle.length; i++){
		headerSearchToggle[i].addEventListener('click', () => {
			headerSearch.classList.toggle('show');
			document.querySelector('.searchModal__content').classList.remove('show')
			body.style.overflow = "auto"
		})
	}
}

if(headerSearchAdd){
	headerSearchAdd.addEventListener('click', () => {
		headerSearch.classList.add('show');
		body.style.overflow = "hidden"
	})

	// Временно!
	headerSearchAdd.addEventListener('input', () => {
		if(headerSearchAdd.value.length > 4){
			document.querySelector('.searchModal__content').classList.add('show')
		}else{
			document.querySelector('.searchModal__content').classList.remove('show')
		}
	})
}

//Комментарии показать/скрыть ответ
const answerChangeShow = document.querySelectorAll('.answerChangeShow');
if(answerChangeShow){
    for (let i = 0; i < answerChangeShow.length; i++) {
        answerChangeShow[i].addEventListener("click", function() {
            answerChangeShow[i].parentElement.classList.toggle("show");
        });
    }
}

//Свои модалки

const dartModal = document.querySelectorAll('.dart-modal');
const dartModalTogglers = document.querySelectorAll('.dart-modal-toggler');

if(dartModalTogglers){
	for(let i = 0; i < dartModalTogglers.length; i++){
		const dartModallAttribute = dartModalTogglers[i].getAttribute('data-dart-modal');
		if(dartModallAttribute && dartModal){
			dartModalTogglers[i].addEventListener('click', () => {
				const getModal = document.getElementById(dartModallAttribute);
				if(getModal){
					if(!getModal.classList.contains('show')){
						getModal.classList.add('show')
						body.style.overflow = "hidden"
					}
				}
			})
		}
	}
}

//Закрытие модалок

const closeDartModal = document.querySelectorAll('.dart-modal');
if(closeDartModal){
	for(let i = 0; i<closeDartModal.length; i++){
		closeDartModal[i].addEventListener('click', () => {
			closeDartModal[i].classList.remove('show')
			body.style.overflow = "auto"
		})
	}
}

const closeDartModalBtn = document.querySelectorAll('.dart-modal-close');
if(closeDartModalBtn && dartModalTogglers){
    for (let i = 0; i < closeDartModalBtn.length; i++) {
        closeDartModalBtn[i].addEventListener("click", function() {
            closeDartModalBtn[i].parentElement.parentElement.classList.remove("show");
			body.style.overflow = "auto"
        });
    }

	for (let i = 0; i < dartModalTogglers.length; i++) {
        dartModalTogglers[i].addEventListener("click", function() {
            dartModalTogglers[i].closest('.dart-modal').classList.remove("show");
        });
    }
}

//Кликер в корзине

const dartQuantityMinus = document.querySelectorAll('.dart-quantity__btn.minus');
const dartQuantityPlus = document.querySelectorAll('.dart-quantity__btn.plus');


if(dartQuantityMinus && dartQuantityPlus){
	for(let i = 0; i < dartQuantityMinus.length; i++){
		dartQuantityMinus[i].addEventListener('click', () => {
			const getInput = dartQuantityMinus[i].parentElement.querySelector('.dart-quantity__counter');
			if(getInput.value != 1){
				getInput.value = Number(getInput.value) - 1
			}
		})
	}

	for(let i = 0; i < dartQuantityPlus.length; i++){
		dartQuantityPlus[i].addEventListener('click', () => {
			const getInput = dartQuantityMinus[i].parentElement.querySelector('.dart-quantity__counter');
			getInput.value = Number(getInput.value) + 1
		})
	}
}

//Каталог в шапке

const dartHeaderCatalogToggler = document.querySelectorAll('.dartHeaderCatalogToggler');
const dartHeaderCatalog = document.querySelector('.dart-header__catalog')

if(dartHeaderCatalogToggler && dartHeaderCatalog){
	for(let i = 0; i < dartHeaderCatalogToggler.length; i++){
		dartHeaderCatalogToggler[i].addEventListener('click', () => {
			dartHeaderCatalog.classList.toggle('show')
		})
	}
}

//Фейковые чекбоксы

const fake = document.querySelectorAll('.fake');

if(fake){
	for(let i = 0; i < fake.length; i++){
		fake[i].addEventListener('click', () => {
			fake[i].classList.toggle('active')
		})
	}
}

//Промокод

const promocode = document.querySelector('input[name="promocode"]');
const promocodeContainer = document.querySelector('.dart-order__promo')
const savePromo = document.querySelector('.savePromo'); // Применить / Удалить промокод
let isPromo = false;

if(promocode){
	promocode.addEventListener('input', () => {
		if(promocode.value.length > 0){
			promocodeContainer.classList.add('active');
		}else{
			promocodeContainer.classList.remove('active');
		}
	})
}

if(savePromo){
	savePromo.addEventListener('click', () => {
		if(!isPromo){
			promocodeContainer.classList.add('apply');
			savePromo.innerHTML = "Удалить"
			promocode.disabled = true;
			isPromo = true;
		}else{
			promocodeContainer.classList.remove('apply')
			savePromo.innerHTML = "Применить"
			promocodeContainer.classList.remove('active');
			isPromo = false;
			promocode.disabled = false;
			promocode.value = ""
		}
	})
}

//Методы доставки

const deliveryMethods = document.querySelectorAll('input[name=delivery-method]');
const deliveryInputsContainer = document.querySelector('.dart-order__inputs-container')

function setNullDelivery(){
	deliveryInputsContainer.classList.remove('express')
	deliveryInputsContainer.classList.remove('courier')
	deliveryInputsContainer.classList.remove('receivingPoint')
	deliveryInputsContainer.classList.remove('store')
}

if(deliveryMethods){
	for(let i = 0; i < deliveryMethods.length; i++){
		deliveryMethods[i].addEventListener('change', () => {
			setNullDelivery()
			deliveryInputsContainer.classList.add(deliveryMethods[i].value)
		})
	}
}

//Открытие доставки
const basketToggleModal = document.querySelectorAll('.basketToggleModal');
const DartOrder = document.querySelector('.dart-order');

if(basketToggleModal){
	for(let i = 0; i<basketToggleModal.length; i++){
		basketToggleModal[i].addEventListener('click', () => {
			if(DartOrder.classList.contains('show')){
				DartOrder.classList.remove('show')
				body.style.overflow = "auto"
			}else{
				DartOrder.classList.add('show')
				body.style.overflow = "hidden"
			}

		})
	}
}

//Новый адрес

const newAddresToggleModal = document.querySelectorAll('.newAddresToggleModal');
const newAddresDelivery = document.querySelector('.newAddresDelivery');

if(newAddresToggleModal){
	for(let i = 0; i<newAddresToggleModal.length; i++){
		newAddresToggleModal[i].addEventListener('click', () => {
			if(newAddresDelivery.classList.contains('show')){
				newAddresDelivery.classList.remove('show')
				body.style.overflow = "auto"
			}else{
				newAddresDelivery.classList.add('show')
				body.style.overflow = "hidden"
			}

		})
	}
}

//Модалка "Выберите пункт выдачи"

const changePointToggleModal = document.querySelectorAll('.changePointToggleModal');
const changeAddresPoint = document.querySelector('.changeAddresPoint');

if(changePointToggleModal){
	for(let i = 0; i<changePointToggleModal.length; i++){
		changePointToggleModal[i].addEventListener('click', () => {
			if(changeAddresPoint.classList.contains('show')){
				changeAddresPoint.classList.remove('show')
				body.style.overflow = "auto"
			}else{
				changeAddresPoint.classList.add('show')
				body.style.overflow = "hidden"
			}
		})
	}
}

//Изменить кнопочка на модалке мои адреса
const changeAddresBtn = document.querySelectorAll('.change-addres-btn');

if(changeAddresBtn){
	document.querySelector('.dart-modal__content').addEventListener('click', () => {
		console.log('click')
		for(let i = 0; i<changeAddresBtn.length; i++){
			changeAddresBtn[i].classList.remove('show')
		}
	})

	for(let i = 0; i<changeAddresBtn.length; i++){
		changeAddresBtn[i].addEventListener('click', () => {
			changeAddresBtn[i].classList.toggle('show')
		})
	}
}