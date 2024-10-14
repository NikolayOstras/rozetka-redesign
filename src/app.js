import Swiper from 'swiper';
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';
// main slider
const swiper = new Swiper('.swiper', {
	modules: [Pagination, Autoplay],
	loop: true,
	speed: 600,
	autoplay: true,
	slidesPerView: 1,

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
