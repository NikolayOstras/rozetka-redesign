const validate = new window.JustValidate('#reg');
validate
	.addField('#name--reg', [
		{
			rule: 'minLength',
			value: 3,
		},
		{
			rule: 'maxLength',
			value: 30,
		},
		{
			rule: 'required',
			errorMessage: 'Введите имя!',
		},
	])
	.addField('#subname--reg', [
		{
			rule: 'minLength',
			value: 3,
		},
		{
			rule: 'required',
			errorMessage: 'Введите фамилию!',
		},
		{
			rule: 'maxLength',
			value: 30,
		},
	])
	.addField('#email--reg', [
		{
			rule: 'required',
			errorMessage: 'Email необходим!',
		},
		{
			rule: 'email',
			errorMessage: 'Email неверный!',
		},
	])
	.addField('#password--reg', [
		{
			rule: 'customRegexp',
			value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/,
		},
		{
			rule: 'required',
			errorMessage: 'Введите пароль!',
		},
	]);
var element = document.getElementById('tel--reg');
var maskOptions = {
	mask: '+{38\\0}(00)000-00-00',
	placeholderChar: '#'
};
var mask = IMask(element, maskOptions);
function getPosition(element) {
	let rect = element.getBoundingClientRect();
	return {
		x: rect.left,
		y: rect.top
	};
}
const submenuDynamicPosition = () => {
	const marginBottom = 20
	const elements = document.querySelectorAll('.sub-menu')
	const height = window.innerHeight
	elements.forEach(element => {
		if (element.offsetHeight > height) {
			element.parentNode.classList.remove('relative')
			element.style.top = '0px'
			element.style.height = height + 'px'
			element.style.overflowY = "scroll"
		}
		if ((getPosition(element).y + element.offsetHeight) > height) {
			element.parentNode.classList.remove('relative')
			const offset = height - element.offsetHeight
			element.style.top = `${offset - marginBottom}px`
		}
	})
}
submenuDynamicPosition()
const sliderColors = []
const DynamicSliderColor = () => {
	const fac = new FastAverageColor()
	const slider = document.querySelector('.main-slider')
	if (slider) {
		const containers = slider.querySelectorAll('.swiper-slide')
	}
	
	const gradientOffset = 11
	if (slider) {
		containers.forEach(container => {
			const color 							 = fac.getColor(container.querySelector('img')).hex
			hexNumber 								 = parseInt(color.replace(/^#/, ''), 16) - gradientOffset
			container.style.background = `linear-gradient(${color},#${hexNumber.toString(16)})`
			sliderColors.push(color)
			});
	}
	
}
DynamicSliderColor()
const sliderPaginationInit = () => {
	const bullets = document.querySelectorAll('.swiper-pagination-bullet')
	bullets.forEach((element,index) => {
		element.style.backgroundColor = sliderColors[0]
		element.style.filter = 'invert()'
	})
	swiper.on('transitionEnd', function () {
		bullets.forEach(element => {
			element.style.backgroundColor = sliderColors[swiper.realIndex]
			element.style.filter = 'invert()'
		})
	})
}
// sliderPaginationInit()
