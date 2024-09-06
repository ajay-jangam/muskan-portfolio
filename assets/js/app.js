$(document).ready(function () {
	// Load more Functionality
	$(".projects__single").slice(0, 2).css("display", "flex").show()
	let isExpanded = false

	$(".projects__button").click(function (e) {
		e.preventDefault()

		isExpanded
			? $(".projects__single:visible")
					.slice(-3)
					.slideUp("slow", function () {
						$(this).css("display", "none")
					})
			: $(".projects__single:hidden")
					.slice(0, 3)
					.css("display", "flex")
					.slideDown("slow")

		$(".projects__buttonArrow").css(
			"rotate",
			isExpanded ? "0deg" : "180deg"
		)
		isExpanded = !isExpanded
	})

	// Sliders
	const clientsSliderOptionsPara = {
		// Optional parameters
		loop: true,
		spaceBetween: false,
		autoplay: {
			delay: 0,
			disableOnInteraction: true,
		},
		slidesPerView: "auto",
		speed: 5000,
		grabCursor: false,
		mousewheelControl: false,
		keyboardControl: true,
	}
	const clientsSliderTop = new Swiper(".clients__sliderTop", {
		...clientsSliderOptionsPara,
	})

	const clientsSliderBottom = new Swiper(".clients__sliderBottom", {
		...clientsSliderOptionsPara,
		autoplay: {
			reverseDirection: true,
		},
	})

	const feedbackRibbonSlider = new Swiper(".feedback__ribbon", {
		...clientsSliderOptionsPara,
	})

	let previousIndex = 0 // To track the direction of slide change

	const feedbackSlider = new Swiper(".feedback__slider", {
		loop: true,
		effect: "slide", // Set initial effect
		on: {
			slideChangeTransitionStart: function () {
				const activeSlide = this.slides[this.activeIndex]
				activeSlide.classList.add("rotating-slide")
			},
			slideChangeTransitionEnd: function () {
				const activeSlide = this.slides[this.activeIndex]
				activeSlide.classList.remove("rotating-slide")
			},
		},
		slidesPerView: "auto",
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	})
})
