$(document).ready(() => {
	// Sliders
	const clientsSliderOptionsPara = {
		// Optional parameters
		loop: true,
		slidesPerView: "auto",
		speed: 2000,
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
		speed: 4000,
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
				$(".swiper-slide").removeClass(
					"swiper-slide-rotate-next swiper-slide-rotate-prev"
				)

				if (feedbackSlider.swipeDirection === "next") {
					$(
						feedbackSlider.slides[feedbackSlider.activeIndex]
					).addClass("swiper-slide-rotate-next")
				} else if (feedbackSlider.swipeDirection === "prev") {
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
