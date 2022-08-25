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
	const containers = slider.querySelectorAll('.swiper-slide')

	const gradientOffset = 11
	if (containers) {
		containers.forEach(container => {
			const color = fac.getColor(container.querySelector('img')).hex
			hexNumber = parseInt(color.replace(/^#/, ''), 16) - gradientOffset
			container.style.background = `linear-gradient(${color},#${hexNumber.toString(16)})`
			sliderColors.push(color)
		});
	}

}
DynamicSliderColor()
( function() {

  var youtube = document.querySelectorAll( ".youtube" );
  
  for (var i = 0; i < youtube.length; i++) {
    
    var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
    
    var image = new Image();
        image.src = source;
        image.addEventListener( "load", function() {
          youtube[ i ].appendChild( image );
        }( i ) );
    
        youtube[i].addEventListener( "click", function() {

          var iframe = document.createElement( "iframe" );

              iframe.setAttribute( "frameborder", "0" );
              iframe.setAttribute( "allowfullscreen", "" );
              iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

              this.innerHTML = "";
              this.appendChild( iframe );
        } );  
  };
  
} )();