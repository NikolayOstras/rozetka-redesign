import Swiper from 'swiper'
import { Pagination, Parallax, Navigation, EffectFade } from 'swiper/modules'
const swiper = new Swiper('.main-slider', {
	modules: [Pagination, Parallax, EffectFade, Navigation],
	// Optional parameters
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
