import Swiper from 'swiper';
import { Autoplay, EffectFade, Navigation, Pagination, Parallax, Scrollbar } from 'swiper/modules';
// main slider
const swiper = new Swiper('.main-slider', {
	modules: [Pagination, Parallax, EffectFade, Navigation, Autoplay],
	loop: true,
	speed: 600,
	// parallax: true,
	effect: 'fade',
	autoplay: true,
	centeredSlides: true,
	slidesPerView: 3,
	// breakpoints: {
	// 	// when window width is >= 768px
	// 	768: {
	// 		slidesPerView: 3,
	// 		spaceBetween: 10
	// 	}
	// },

	pagination: {
		el: '.main-slider-pagination',
		clickable: true,
		bulletClass: 'main-slider-bullet',
		bulletActiveClass: 'main-slider-bullet--active'
	},
	navigation: {
		enabled: true,
		prevEl: '.main-slider-prev',
		nextEl: '.main-slider-next'
	}
});
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
});
// slider - md
const swiperMd = new Swiper('.slider-md', {
	modules: [Scrollbar, Autoplay],
	loop: true,
	speed: 600,
	slidesPerView: 'auto',
	spaceBetween: 20,
	autoplay: true,
	scrollbar: {
		enabled: true,
		el: '.slider-md-scrollbar',
		hide: false,
		draggable: true
	}
});

// slider - md
const swiperYoutube = new Swiper('.slider-youtube', {
	modules: [Scrollbar],
	loop: true,
	speed: 600,
	slidesPerView: 'auto',
	spaceBetween: 20,
	scrollbar: {
		enabled: true,
		el: '.slider-yt-scrollbar',
		hide: false,
		draggable: true
	}
});
