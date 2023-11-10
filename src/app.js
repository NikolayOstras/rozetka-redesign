import Swiper from 'swiper'
import { Pagination, Parallax, Navigation, EffectFade, Scrollbar, Autoplay } from 'swiper/modules'
// main slider
const swiper = new Swiper('.main-slider', {
	modules: [Pagination, Parallax, EffectFade, Navigation, Autoplay],
	loop: true,
	speed: 600,
	parallax: true,
	effect: 'fade',
	autoplay: true,

	pagination: {
		el: '.main-slider-pagination',
		clickable: true,
		bulletClass: 'main-slider-bullet',
		bulletActiveClass: 'main-slider-bullet--active'
	},
	navigation: {
		enabled: true,
		prevEl: '.main-slider-prev',
		nextEl: '.main-slider-next',

	}

})
// slider - lg
const swiperLg = new Swiper('.slider-lg', {
	modules: [Scrollbar, Autoplay],
	loop: true,
	speed: 600,
	slidesPerView: 'auto',
	spaceBetween: 20,
	autoplay: true,
	scrollbar: {
		enabled: true,
		el: '.slider-lg-scrollbar',
		hide: false,
		draggable: true
	}



})
