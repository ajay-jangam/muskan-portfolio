$(document).ready(() => {
	// Load more Functionality
	$(".projects__single").slice(0, 2).css("display", "flex").show()
	let isExpanded = false

	$(".projects__button").click((e) => {
		e.preventDefault()

		isExpanded
			? $(".projects__single:visible")
					.slice(-3)
					.slideUp("slow", () => {
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
		slidesPerView: "auto",
		speed: 4000,
		grabCursor: false,
		mousewheelControl: false,
		keyboardControl: true,
	}
	const clientsSliderTop = new Swiper(".clients__sliderTop", {
		...clientsSliderOptionsPara,
		autoplay: {
			delay: 0,
			disableOnInteraction: true,
		},
	})

	const clientsSliderBottom = new Swiper(".clients__sliderBottom", {
		...clientsSliderOptionsPara,
		autoplay: {
			delay: 0,
			reverseDirection: true,
			disableOnInteraction: true,
		},
	})

	const feedbackRibbonSlider = new Swiper(".feedback__ribbon", {
		...clientsSliderOptionsPara,
		autoplay: {
			delay: 0,
			disableOnInteraction: true,
		},
	})

	let previousIndex = 0 // To track the direction of slide change

	const feedbackSlider = new Swiper(".feedback__slider", {
		loop: true,
		on: {
			slideChangeTransitionStart: () => {
				// Remove rotation classes from all slides
				$(".swiper-slide").removeClass(
					"swiper-slide-rotate-next swiper-slide-rotate-prev"
				)

				// Check the direction of the slide change
				if (feedbackSlider.swipeDirection === "next") {
					// Add clockwise rotation for the next slide
					$(
						feedbackSlider.slides[feedbackSlider.activeIndex]
					).addClass("swiper-slide-rotate-next")
				} else if (feedbackSlider.swipeDirection === "prev") {
					// Add counterclockwise rotation for the previous slide
					$(
						feedbackSlider.slides[feedbackSlider.activeIndex]
					).addClass("swiper-slide-rotate-prev")
				}
			},
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	})

	// Copy email functionality
	$(".footer__copyLink").click(() => {
		let copyText = $(".footer__email").val()
		navigator.clipboard
			.writeText(copyText)
			.then(() => {
				$(".footer__copyLink").remove()
				$(".footer__copiedText").show()
			})
			.catch((err) => {
				alert("Failed to copy the link: ", err)
			})
	})
})
