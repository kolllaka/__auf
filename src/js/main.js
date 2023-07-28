// header scroll meter
const scrollLine = document.getElementById('scrollLine');
const maxHeightPage = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);
let scrollLineWidthMax = 60
let scrollLineWidthMin = 10

mathWidthOfLine = () => {
	scrollLine.style.width = scrollLineWidthMax - (scrollLineWidthMax - scrollLineWidthMin) * (window.pageYOffset / (maxHeightPage - document.documentElement.clientHeight)) + "%"
}
mathWidthOfLine()

addEventListener("scroll", () => {
	mathWidthOfLine()
})




// Custom Scripts
// Burger menu
const burger = document.querySelector('.burger'),
	body = document.querySelector('body');

function burgerMenuFunc() {
	const burgerMenu = burger.querySelector('.burger__menu'),
		burgerBtn = burger.querySelector('.burger__btn');

	burgerBtn.addEventListener('click', () => {
		if (!burgerMenu.classList.contains('active')) {
			burgerMenu.classList.add('active')
			burgerBtn.classList.add('active-burger')
			body.classList.add('locked')
		} else {
			burgerMenu.classList.remove('active')
			burgerBtn.classList.remove('active-burger')
			body.classList.remove('locked')
		}
	})

	// navbar breakpoints
	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98) {
			burgerMenu.classList.remove('active')
			burgerBtn.classList.remove('active-burger')
			body.classList.remove('locked')
		}
	})
}
if (burger) {
	burgerMenuFunc()
}

// Fixed menu when scroll
function fixedNav() {
	const nav = document.querySelector('nav')

	// 
	const breakpoints = 1
	if (window.scrollY >= breakpoints) {
		nav.classList.add('fixed__nav')
	} else {
		nav.classList.remove('fixed__nav')
	}
}
window.addEventListener('scroll', fixedNav)


// Swiper
const swiper = new Swiper('.swiper', {
	// Optional parameters
	slidesPerView: 3,
	centeredSlides: true,
	centerInsufficientSlides: true,
	spaceBetween: 60,
	speed: 800,
	initialSlide: 1,

	// If we need pagination
	pagination: {
		el: document.querySelector('.slider__dotts'),
		clickable: true,
	},
});

