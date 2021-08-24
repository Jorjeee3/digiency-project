const burgerMenuBtn = document.querySelector('.humburger-menu')
const headerNav = document.querySelector('.header-nav')

burgerMenuBtn.addEventListener('click', ()=> {
	headerNav.classList.toggle('active'),
	burgerMenuBtn.classList.toggle('open')
})

