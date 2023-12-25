
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
});

//Свайпер новинки
var swipertree = new Swiper(".dartSwiperNew", {
    slidesPerView: 5,
    spaceBetween: 8,
    navigation: {
        nextEl: ".swiper-new-next",
        prevEl: ".swiper-new-prev",
    },
});

//Свайпер производители
var swipertree = new Swiper(".dartSwiperManufacturer", {
    slidesPerView: 6,
    spaceBetween: 8,
    navigation: {
        nextEl: ".swiper-manufacturer-next",
        prevEl: ".swiper-manufacturer-prev",
    },
});
dartSwiperManufacturer