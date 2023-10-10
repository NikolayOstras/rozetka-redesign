import 'boxicons'
import Alpine from 'alpinejs'
import Swiper from 'swiper';
import JustValidate from 'just-validate';

import {langDropdown}	from './components/header/index' 
// import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// // Now you can use Swiper
// const swiper = new Swiper('.swiper', {
//   // Install modules
//   modules: [Navigation, Pagination, Scrollbar],
//   speed: 500,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   // ...
// });
Alpine.data('langDropdown', () => langDropdown)
window.Alpine = Alpine
Alpine.start()