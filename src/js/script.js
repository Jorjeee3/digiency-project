const burgerMenuBtn = document.querySelector('.humburger-menu')
const headerNav = document.querySelector('.header-nav')
const toggleThemeButton = document.querySelector('.header-icon-light')
const headerItemLinks = document.querySelectorAll('.header-item-link')
const body = document.querySelector('body')

burgerMenuBtn.addEventListener('click', () => {
	headerNav.classList.toggle('active'),
	burgerMenuBtn.classList.toggle('open')
})


// headerItemLink.addEventListener('click', () => {
// 	headerNav.classList.remove('active'),
// 	burgerMenuBtn.classList.remove('open')
// })

let number = document.querySelector('.number'),
	numberTop = number.getBoundingClientRect().top,
	start = +number.innerHTML, end = +number.dataset.max;

window.addEventListener('scroll', function onScroll() {
	if (window.pageYOffset > numberTop - window.innerHeight / 2) {
		this.removeEventListener('scroll', onScroll);
		var interval = setInterval(function() {
			number.innerHTML = ++start;
			if(start == end) {
				clearInterval(interval);
			}
		}, 10);
	}
});

let number1 = document.querySelector('.number1'),
	number1Top = number1.getBoundingClientRect().top,
	start1 = +number1.innerHTML, end1 = +number1.dataset.max;

window.addEventListener('scroll', function onScroll() {
	if(window.pageYOffset > number1Top - window.innerHeight / 2) {
		this.removeEventListener('scroll', onScroll);
		var interval1 = setInterval(function() {
			number1.innerHTML = ++start1;
			if(start1 == end1) {
				clearInterval(interval1);
			}
		}, 10);
	}
});
  
let number2 = document.querySelector('.number2'),
	number2Top = number2.getBoundingClientRect().top,
	start2 = +number2.innerHTML, end2 = +number2.dataset.max;

window.addEventListener('scroll', function onScroll() {
	if(window.pageYOffset > number2Top - window.innerHeight / 2) {
		this.removeEventListener('scroll', onScroll);
		var interval2 = setInterval(function() {
			number2.innerHTML = ++start2;
			if(start2 == end2) {
				clearInterval(interval2);
			}
		}, 5);
	}
});
 
let number3 = document.querySelector('.number3'),
	number3Top = number3.getBoundingClientRect().top,
	start3 = +number3.innerHTML, end3 = +number3.dataset.max;

window.addEventListener('scroll', function onScroll() {
	if(window.pageYOffset > number3Top - window.innerHeight / 2) {
		this.removeEventListener('scroll', onScroll);
		var interval3 = setInterval(function() {
			number3.innerHTML = ++start3;
			if(start3 == end3) {
				clearInterval(interval3);
			}
		}, 5);
	}
});



$(document).ready(function () {
	$('.people-list').slick({
		dots: false,
		infinite: false,
		speed: 300,
		buttons: false,
		prevArrow: false,
		nextArrow: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
})

$(document).ready(function () {
	$('.feedback-slider-list').slick({
		dots: true,
		infinite: false,
		speed: 300,
		buttons: false,
		prevArrow: false,
		nextArrow: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
})

$(document).ready(function () {
	$('.blog-slider-list').slick({
		dots: true,
		infinite: false,
		speed: 300,
		buttons: false,
		prevArrow: false,
		nextArrow: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
})


headerItemLinks.forEach(headerItemLink => {
	headerItemLink.addEventListener('click', () => {
		headerNav.classList.remove('active'),
		burgerMenuBtn.classList.remove('open')
	})
})

toggleThemeButton.addEventListener('click', () => {
	body.classList.toggle('dark-theme')
})

