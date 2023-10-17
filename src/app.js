import Swiper from 'swiper';
import { Pagination, Parallax, EffectFade } from 'swiper/modules';
const swiper = new Swiper('.main-slider', {
	modules: [Pagination,Parallax,EffectFade],
  // Optional parameters
  loop: true,
	speed: 600,
	parallax: true,
	effect:'fade',

  pagination: {
    el: '.main-slider-pagination',
    clickable: true,
		bulletClass: 'main-slider-bullet',
		bulletActiveClass: 'main-slider-bullet--active'
	}

});
