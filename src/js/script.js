const burgerMenuBtn = document.querySelector('.humburger-menu')
const headerNav = document.querySelector('.header-nav')
const footerDigiecyText = document.querySelector('.footer-digiency-text')
const footerNewsletterText = document.querySelector('.footer-newsletter-text')

burgerMenuBtn.addEventListener('click', ()=> {
	headerNav.classList.toggle('active'),
	burgerMenuBtn.classList.toggle('open')
})

window.addEventListener('resize', function (event) {
	const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
	if (viewportWidth <= 768) {
		footerDigiecyText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, cursus egestas etiam posuere vitae cursus consectetur eu. Cursus vitae porttitor libero est posuere.';

		footerNewsletterText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu feugiat in mollis augue vel aliquam. Ut faucibus elit, libero varius. '
			
	} else if (viewportWidth >= 768, viewportWidth <= 1024) {
		footerDigiecyText.textContent = 'Lorem ipsum dolor sitamet,consectetur adipiscing elit. ';

		footerNewsletterText.textContent = 'Lorem ipsum dolor sitamet,consectetur adipiscing elit.'

	} else if (viewportWidth >= 1024){
		footerDigiecyText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum.';

		footerNewsletterText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget varius viverra in.'
	}
})
