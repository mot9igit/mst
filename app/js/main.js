
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
			slidesPerView: 1.05,
			spaceBetween: 8
		},
		768: {
			slidesPerView: 1,
			spaceBetween: 8
		},
		991: {
			slidesPerView: 1,
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
			slidesPerView: 1.5,
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
		991: {
			grid: {
				rows: 2,
			},
			slidesPerView: 2,
		},
		1200: {
			grid: {
				rows: 2,
			},
			slidesPerView: 2,
		},
		1800: {
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
			slidesPerView: 6.3,
		},
		1800: {
			slidesPerView: 5,
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


//Левое меню каталог
const menu_items = document.querySelectorAll('.dart-catalog-menu__el');
if(menu_items){
    for (let i = 0; i < menu_items.length; i++) {
        menu_items[i].addEventListener("click", function() {
            //Выключает активную вкладку
            // for (let j = 0; j < menu_items.length; j++) {
            //     if(menu_items[j] != menu_items[i]){
            //         menu_items[j].parentElement.classList.remove("active")
            //     }
            // }

            menu_items[i].parentElement.classList.toggle("active");
        });
    }
}

//Карта



let stores_map = {

	options: {
		wrapper: '.dart-menu-left__map',
		map: 'dart-menu-left__map',
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
		});
	}
	

}

ymaps.ready(stores_map.init);

//Слайдер на странице поиска

const alldartSwiperSearch = document.querySelectorAll('.dartSwiperSearch');
if(alldartSwiperSearch){
	for (let i = 0; i < alldartSwiperSearch.length; i++) {
		console.log(alldartSwiperSearch[i])

       //Свайпер новинки
		var swipertree = new Swiper(alldartSwiperSearch[i], {
			slidesPerView: 6,
			spaceBetween: 16,
			navigation: {
				nextEl: ".swiper-new-next",
				prevEl: ".swiper-new-prev",
			},
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

function closeSidebar(){
	if(sidebar){
		sidebar.classList.remove('show');
		body.style.overflow = "scroll"
	}
}