// header scroll meter
const header = document.querySelector("header")
const scrollLine = document.getElementById('scrollLine');
const maxHeightPage = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);
let scrollLineWidthMax = 60
let scrollLineWidthMin = 10
let opacityMaxHeight = 200
let isShow = false

mathWidthOfLine = () => {
	if (window.pageYOffset <= opacityMaxHeight) {
		header.classList.add("show")
		header.style.opacity = 1 - (window.pageYOffset / opacityMaxHeight)
		isShow = true
	} else if (isShow) {
		isShow = false
		header.style.opacity = 0
		header.classList.remove("show")
	}

	scrollLine.style.width = scrollLineWidthMax - (scrollLineWidthMax - scrollLineWidthMin) * (window.pageYOffset / (maxHeightPage - document.documentElement.clientHeight)) + "%"
}
mathWidthOfLine()

addEventListener("scroll", () => {
	mathWidthOfLine()
})


// Poppup 
// const gallery = document.querySelector(".gallery")
const poppupgallery = document.querySelector(".poppupgallery")
document.addEventListener("click", (e) => {
	if (e.target.closest(".gallery__item")) {
		const src = e.target.closest(".gallery__item").querySelector("img").src
		const alt = e.target.closest(".gallery__item").querySelector("img").alt

		document.body.classList.add("locked")
		poppupgallery.querySelector("img").src = src
		poppupgallery.querySelector("img").alt = alt
		poppupgallery.classList.add("show")

		return
	}

	if (e.target.classList.contains("poppupgallery__body") || e.target.closest(".poppupgallery__close")) {
		poppupgallery.classList.remove("show")
		document.body.classList.remove("locked")

		return
	}
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

