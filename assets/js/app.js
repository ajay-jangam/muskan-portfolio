$(document).ready(() => {
	// Hamburger Menu
	$(".navbar .navbar-toggler").click(function () {
		console.log("kjndlkjn");

		$(".navbar").toggleClass("hamburgerMenu");
	});
	// Sliders
	const clientsSliderOptionsPara = {
		// Optional parameters
		loop: true,
		slidesPerView: "auto",
		speed: 1500,
		parallax: true,
		grabCursor: false,
		mousewheelControl: false,
		keyboardControl: true,
	};
	const clientsSliderTop = new Swiper(".clients__sliderTop", {
		...clientsSliderOptionsPara,
		autoplay: {
			delay: 0,
			disableOnInteraction: true,
		},
	});

	const clientsSliderBottom = new Swiper(".clients__sliderBottom", {
		...clientsSliderOptionsPara,
		autoplay: {
			delay: 0,
			reverseDirection: true,
			disableOnInteraction: false,
		},
	});

	const clientsSliderLeft = new Swiper(".projectHero__sliderLeft", {
		slidesPerView: 5,
		speed: 1000,
		mousewheel: true,
		grabCursor: true,
		loop: true,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
		breakpoints: {
			300: {
				direction: "horizontal",
			},
			769: {
				direction: "vertical",
			},
		},
	});

	const clientsSlider = new Swiper(".projectHero__sliderRight", {
		direction: "vertical",
		slidesPerView: 5,
		speed: 1000,
		mousewheel: true,
		grabCursor: true,
		loop: true,
		autoplay: {
			delay: 0,
			reverseDirection: true,
			disableOnInteraction: false,
		},
		breakpoints: {
			300: {
				direction: "horizontal",
			},
			769: {
				direction: "vertical",
			},
		},
	});

	const feedbackRibbonSlider = new Swiper(".feedback__ribbon", {
		...clientsSliderOptionsPara,
		speed: 1000,
		autoplay: {
			delay: 0,
			disableOnInteraction: true,
		},
	});

	const aboutSlide = new Swiper(".about__slider", {
		...clientsSliderOptionsPara,
		speed: 1000,
		autoplay: {
			delay: 0,
			pauseOnMouseEnter: true,
			disableOnInteraction: false,
		},
	});

	let previousIndex = 0; // To track the direction of slide change

	const feedbackSlider = new Swiper(".feedback__slider", {
		loop: true,
		on: {
			slideChangeTransitionStart: () => {
				$(".swiper-slide").removeClass(
					"swiper-slide-rotate-next swiper-slide-rotate-prev"
				);

				if (feedbackSlider.swipeDirection === "next") {
					$(
						feedbackSlider.slides[feedbackSlider.activeIndex]
					).addClass("swiper-slide-rotate-next");
				} else if (feedbackSlider.swipeDirection === "prev") {
					$(
						feedbackSlider.slides[feedbackSlider.activeIndex]
					).addClass("swiper-slide-rotate-prev");
				}
			},
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	console.log("working");

	// Copy email functionality
	function handleCopy() {
		let copyText = $(".footer__email").val();
		console.log("hdkha");

		if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard.writeText(copyText).then(success).catch(fail);
		} else {
			let $tempInput = $("<textarea>")
				.val(copyText)
				.appendTo("body")
				.select();
			try {
				document.execCommand("copy");
				success();
			} catch (err) {
				fail(err);
			}
			$tempInput.remove();
		}
	}

	function success() {
		$(".footer__copyLink").hide();
		$(".footer__copiedText").show();
		setTimeout(() => {
			$(".footer__copyLink").show();
			$(".footer__copiedText").hide();
		}, 3000);
	}

	function fail(err) {
		alert("Failed to copy: " + err);
	}

	$(".footer__copyLink").on("click", handleCopy);

	// Get current URL
	var currentUrl = window.location.href;

	// Loop through each menu item
	$(".navbar-nav li a.nav-link").each(function () {
		var menuItemUrl = $(this).attr("href");

		// Check if the current URL matches the menu item URL
		if (currentUrl === menuItemUrl) {
			$(this).parent().addClass("active"); // Add the active class
		}
	});

	// Projects Singles count

	if ($("body").hasClass("project-listing")) {
		console.log("aflknaskj");

		// Count the number of elements with the class '.projects__single'
		let projectsCount = $(".projects__single").length;

		// Remove the existing '.projects__buttonDesktop' element
		$(".projects__buttonDesktop").remove();

		// Create a new <p> tag with the count and add it to the DOM
		$(
			`<p class="projects__count"><span>${projectsCount}</span> Projects</p>`
		).appendTo(".projects__header");
	}
});

/**
 * Animations
 */
$(document).ready(function () {
	// Register ScrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);

	// Common ScrollTrigger settings
	const scrollConfig = {
		start: "top bottom-=300",
		toggleActions: "play none none reverse",
	};

	// Remove hide-init class and set proper initial states for GSAP
	const setupAnimations = () => {
		$(".hide-init").each(function () {
			$(this).removeClass("hide-init").css("opacity", 0);
		});
	};

	if ($(".page-template-template-homepage").length > 0) {
		// Add initial classes
		$(
			".hero__profile, .hero__profileContent, .hero__doodleArrow, .hero__doodleText, .hero__title, .hero__subTitle, .hero__stats"
		).addClass("hide-init");

		gsap.set(".hero__statNumber", {
			opacity: 0,
		});

		// Main Content Animation Timeline
		const mainTl = gsap.timeline({
			defaults: {
				ease: "power3.out",
				duration: 1,
			},
		});

		mainTl
			.fromTo(
				".hero__profile",
				{
					y: -50,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 1.2,
					clearProps: "visibility", // Clear visibility property after animation
				}
			)
			.fromTo(
				".hero__profileContent",
				{
					y: 20,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 1,
					clearProps: "visibility",
				},
				"-=0.8"
			)
			.fromTo(
				".hero__doodleArrow",
				{
					scale: 0,
					rotation: -45,
					opacity: 0,
				},
				{
					scale: 1,
					rotation: 0,
					opacity: 1,
					duration: 0.8,
					clearProps: "visibility",
				},
				"-=0.5"
			)
			.fromTo(
				".hero__doodleText",
				{
					x: -30,
					opacity: 0,
				},
				{
					x: 0,
					opacity: 1,
					duration: 0.8,
					clearProps: "visibility",
				},
				"-=0.3"
			)
			.fromTo(
				".hero__title",
				{
					y: 50,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 1,
					stagger: 0.2,
					clearProps: "visibility",
				},
				"-=0.5"
			)
			.fromTo(
				".hero__subTitle",
				{
					y: 20,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					clearProps: "visibility",
				},
				"-=0.3"
			)
			.fromTo(
				".hero__stats",
				{
					y: 30,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					clearProps: "visibility",
				},
				"-=0.4"
			)
			.add(() => {
				$(".hero__statNumber").each(function () {
					const endValue = parseInt($(this).text());

					gsap.fromTo(
						this,
						{
							textContent: 0,
						},
						{
							duration: 2,
							textContent: endValue,
							roundProps: "textContent",
							ease: "power1.inOut",
							onStart: () => {
								gsap.to(this, {
									opacity: 1,
									duration: 0.5,
								});
							},
							onUpdate: (item) => {
								$(this).append("+");
							},
						}
					);
				});
			}, "-=0.5")
			.fromTo(
				".hero__doodleImage",
				{
					scale: 0,
					rotation: -45,
					opacity: 0,
				},
				{
					scale: 1,
					rotation: 0,
					opacity: 1,
					duration: 0.8,
					clearProps: "visibility",
				},
				"-=0.5"
			)
			.fromTo(
				".hero__doodleTextTwo",
				{
					x: -30,
					opacity: 0,
				},
				{
					x: 0,
					opacity: 1,
					duration: 0.8,
					clearProps: "visibility",
				},
				"-=0.3"
			)
			.fromTo(
				".hero__mainSecondFoldTitle",
				{
					y: 20,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 1,
					clearProps: "visibility",
				},
				"-=0.6"
			)
			.from(
				".hero__accordion .accordion-item",
				{
					y: 40,
					opacity: 0,
					stagger: 0.1,
					duration: 0.5,
				},
				"-=0.5"
			);
	}

	if ($(".page-template-template-listing").length > 0) {
		// Main Content Animation Timeline
		const mainTl = gsap.timeline({
			defaults: {
				ease: "power3.out",
				duration: 1,
			},
		});

		mainTl
			.from(".projectHero__title", {
				y: 30,
				opacity: 0,
				stagger: 0.3,
				duration: 1.2,
				clearProps: "visibility", // Clear visibility property after animation
			})
			.from(
				".projectHero__socialLinks .projectHero__socialLink",
				{
					y: 20,
					opacity: 0,
					stagger: 0.1,
					duration: 0.5,
					clearProps: "visibility", // Clear visibility property after animation
				},
				"-=0.5"
			);

		const tl = gsap.timeline({
			scrollTrigger: {
				...scrollConfig,
				trigger: ".projects__header",
			},
		});

		// Hero section animation
		tl.from(".experiments__doodleText", {
			y: 30,
			opacity: 0,
			duration: 1,
			ease: "power3.out",
		})
			.from(
				".experiments__doodleImg",
				{
					rotate: 360,
					opacity: 0,
					duration: 1,
					ease: "power2.out",
				},
				"-=0.5"
			)
			.from(
				".experiments__title",
				{
					y: 30,
					opacity: 0,
					duration: 1,
					ease: "power3.out",
				},
				"-=0.5"
			)
			.from(
				".experiments__card",
				{
					y: 50,
					opacity: 0,
					stagger: 0.2,
					duration: 0.8,
					ease: "power2.out",
				},
				"-=0.5"
			);
	}

	if ($(".single-portfolio").length > 0) {
		// Main Content Animation Timeline
		const mainTl = gsap.timeline({
			defaults: {
				ease: "power3.out",
				duration: 1,
			},
		});

		mainTl
			.from(".project__title", {
				y: 30,
				opacity: 0,
				stagger: 0.3,
				duration: 1.2,
				clearProps: "visibility", // Clear visibility property after animation
			})
			.from(
				".project__desc",
				{
					y: 30,
					opacity: 0,
					stagger: 0.3,
					duration: 1.2,
					clearProps: "visibility", // Clear visibility property after animation
				},
				"-=0.8"
			)
			.from(
				".project__stats .project__stat",
				{
					y: 20,
					opacity: 0,
					stagger: 0.1,
					duration: 0.5,
					clearProps: "visibility", // Clear visibility property after animation
				},
				"-=0.8"
			)
			.from(
				".project__imageWrapper",
				{
					y: 100,
					opacity: 0,
					duration: 0.5,
					clearProps: "visibility", // Clear visibility property after animation
				},
				"-=0.8"
			);
	}

	// Navbar Animation Timeline
	const navTl = gsap.timeline({
		defaults: {
			ease: "power3.out",
			duration: 1,
		},
		onStart: setupAnimations, // Remove hide-init classes when animations start
	});

	navTl
		.fromTo(
			".navbar-wrapper",
			{
				clipPath: "inset(0 100% 0 0)",
			},
			{
				clipPath: "inset(0 0% 0 0)",
				duration: 1.2,
				ease: "power4.inOut",
			}
		)
		.fromTo(
			".navbar-brand img",
			{
				scale: 0,
				rotation: -20,
			},
			{
				scale: 1,
				rotation: 0,
				duration: 0.8,
				ease: "back.out(1.7)",
			},
			"-=0.8"
		)
		.fromTo(
			".nav-item",
			{
				y: -40,
				opacity: 0,
				scaleY: 0,
			},
			{
				y: 0,
				opacity: 1,
				scaleY: 1,
				stagger: 0.1,
				duration: 0.6,
				ease: "back.out(1.7)",
			},
			"-=0.4"
		)
		.fromTo(
			".resume-link",
			{
				scale: 0,
				opacity: 0,
			},
			{
				scale: 1,
				opacity: 1,
				duration: 0.6,
				ease: "back.out(1.7)",
			},
			"-=0.2"
		)
		.fromTo(
			".line",
			{
				scaleX: 0,
			},
			{
				scaleX: 1,
				stagger: 0.1,
				duration: 0.4,
			},
			"-=0.6"
		);

	// Resume link hover
	$(".resume-link").hover(
		function () {
			gsap.to(this, {
				scale: 1.05,
				duration: 0.3,
				ease: "back.out(1.7)",
			});
			gsap.to($(this).find("img")[0], {
				rotation: 360,
				duration: 0.6,
				ease: "power1.inOut",
			});
		},
		function () {
			gsap.to(this, {
				scale: 1,
				duration: 0.3,
				ease: "back.out(1.7)",
			});
			gsap.to($(this).find("img")[0], {
				rotation: 0,
				duration: 0.6,
				ease: "power1.inOut",
			});
		}
	);

	// Stats hover
	$(".hero__stat").hover(
		function () {
			gsap.to(this, {
				y: -5,
				duration: 0.3,
				ease: "power2.out",
			});
		},
		function () {
			gsap.to(this, {
				y: 0,
				duration: 0.3,
				ease: "power2.out",
			});
		}
	);

	// Profile card hover
	$(".hero__profile").hover(
		function () {
			gsap.to(this, {
				scale: 1.02,
				duration: 0.3,
				ease: "power2.out",
			});
		},
		function () {
			gsap.to(this, {
				scale: 1,
				duration: 0.3,
				ease: "power2.out",
			});
		}
	);

	/**************************************************************************************************/

	// Projects Section

	// Initial page load animations
	const tl = gsap.timeline({
		scrollTrigger: {
			...scrollConfig,
			trigger: ".projects__header",
		},
	});

	// Hero section animation
	tl.from(".projects__header", {
		y: 30,
		opacity: 0,
		duration: 1,
		ease: "power3.out",
	})
		.from(
			".projects__doodleImg",
			{
				rotate: 360,
				opacity: 0,
				duration: 1,
				ease: "power2.out",
			},
			"-=0.5"
		)
		.from(
			".projects__single",
			{
				y: 50,
				opacity: 0,
				stagger: 0.2,
				duration: 0.8,
				ease: "power2.out",
			},
			"-=0.5"
		);

	// Clients Section
	gsap.from(".clients__header", {
		scrollTrigger: {
			...scrollConfig,
			trigger: ".clients__header",
		},
		y: 50,
		opacity: 0,
		duration: 1,
	});

	// Feedback Section
	gsap.from(".feedback__header", {
		scrollTrigger: {
			...scrollConfig,
			trigger: ".feedback__header",
		},
		y: 50,
		opacity: 0,
		duration: 1,
	});

	// Feedback slides with stagger
	$(".feedback__slide").each(function (index) {
		gsap.from(this, {
			scrollTrigger: {
				...scrollConfig,
				trigger: this,
			},
			opacity: 0,
			duration: 0.8,
			delay: index * 0.2,
		});
	});

	// Principles Section with creative reveals
	gsap.from(".principles__header", {
		scrollTrigger: {
			...scrollConfig,
			trigger: ".principles__header",
		},
		y: 50,
		opacity: 0,
		duration: 1,
	});

	$(".principles__single").each(function (index) {
		gsap.from(this, {
			scrollTrigger: {
				...scrollConfig,
				trigger: this,
				start: "top bottom-=50", // Slightly different offset for better visual
			},
			scale: 0.8,
			opacity: 0,
			rotation: -10,
			duration: 1,
			delay: index * 0.2,
			ease: "back.out(1.7)",
		});
	});

	// Blogs Section
	gsap.from(".blogs__title", {
		scrollTrigger: {
			...scrollConfig,
			trigger: ".blogs__title",
		},
		y: 50,
		opacity: 0,
		duration: 1,
	});

	// Blog cards with stagger
	$(".blogs__blog").each(function (index) {
		gsap.from(this, {
			scrollTrigger: {
				...scrollConfig,
				trigger: this,
			},
			opacity: 0,
			duration: 2,
			delay: index * 0.2,
			ease: "back.out(1.7)",
		});
	});

	// Footer animations
	const footerTl = gsap.timeline({
		scrollTrigger: {
			...scrollConfig,
			trigger: ".footer",
		},
	});

	footerTl
		.from(".footer__qoute", {
			y: 30,
			opacity: 0,
			duration: 1,
		})
		.from(
			".footer__profileImg",
			{
				scale: 0.8,
				opacity: 0,
				duration: 0.8,
			},
			"-=0.5"
		)
		.from(
			".footer__roundTextImg",
			{
				rotation: -180,
				opacity: 0,
				duration: 0.5,
			},
			"-=0.5"
		)
		.from(
			".footer__qoute span",
			{
				y: 30,
				opacity: 0,
				stagger: 0.1,
				duration: 0.5,
			},
			"-=1"
		)
		.from(
			".footer__title",
			{
				y: 30,
				opacity: 0,
				duration: 0.5,
			},
			"-=0.5"
		)
		.from(
			".footer__copyEmailWrapper",
			{
				y: 30,
				opacity: 0,
				duration: 0.5,
			},
			"-=0.3"
		)
		.from(
			".footer__link",
			{
				y: 30,
				opacity: 0,
				duration: 0.5,
			},
			"-=0.1"
		)
		.from(
			".footer__bottomLinks li",
			{
				y: 20,
				opacity: 0,
				stagger: 0.1,
				duration: 0.5,
			},
			"-=1"
		)
		.from(
			".footer__copyRights",
			{
				y: 20,
				opacity: 0,
				duration: 0.5,
			},
			"-=1"
		);

	// Hover animations remain unchanged as they're not scroll-triggered
	$(".projects__single").hover(
		function () {
			gsap.to(this, {
				y: -10,
				duration: 0.3,
				ease: "power2.out",
			});
		},
		function () {
			gsap.to(this, {
				y: 0,
				duration: 0.3,
				ease: "power2.out",
			});
		}
	);
});

// Make sure to include these scripts in your HTML
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

$(document).ready(function () {
	// Register ScrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);

	// Initial page load animations
	const tl = gsap.timeline();

	// Animate the main title
	tl.from(".about__title", {
		y: 50,
		opacity: 0,
		duration: 1,
		ease: "power3.out",
	})
		// Animate the slider
		.from(
			".about__slider",
			{
				x: -100,
				opacity: 0,
				duration: 1,
				ease: "power3.out",
			},
			"-=0.5"
		)
		// Animate profile section
		.from(
			".about__profileImg",
			{
				scale: 0,
				opacity: 0,
				duration: 0.8,
				ease: "back.out(1.7)",
			},
			"-=0.5"
		)
		.from(
			".about__text",
			{
				y: 30,
				opacity: 0,
				duration: 0.5,
			},
			"-=0.3"
		)
		.from(
			".about__profileStats",
			{
				x: 30,
				opacity: 0,
				duration: 0.5,
				stagger: 0.2,
			},
			"-=0.3"
		);

	// Stats counter animation
	$(".about__profileStatNum").each(function () {
		let $this = $(this);
		let countTo = $this.text().replace("+", "");

		gsap.to($this, {
			scrollTrigger: {
				trigger: $this,
				start: "top 80%",
				toggleActions: "play none none reverse",
			},
			duration: 2,
			innerText: countTo,
			snap: { innerText: 1 },
			ease: "power2.out",
		});
	});

	// Details section animations
	gsap.from(".details__text", {
		scrollTrigger: {
			trigger: ".details__text",
			start: "top 80%",
			toggleActions: "play none none reverse",
		},
		y: 50,
		opacity: 0,
		duration: 1,
		stagger: 0.3,
		ease: "power3.out",
	});

	// Description paragraphs reveal
	gsap.from(".details__description", {
		scrollTrigger: {
			trigger: ".details__description",
			start: "top 80%",
			toggleActions: "play none none reverse",
		},
		y: 30,
		opacity: 0,
		duration: 0.8,
		stagger: 0.2,
		ease: "power2.out",
	});

	// Cards animation
	$(".details__card").each(function (index) {
		let $this = $(this);
		gsap.from($this, {
			y: 100,
			opacity: 0,
			duration: 0.8,
			ease: "power2.out",
			delay: index * 0.2,
		});
	});

	// Doodle animation
	gsap.from(".details__doodle", {
		scrollTrigger: {
			trigger: ".details__doodle",
			start: "top 80%",
			toggleActions: "play none none reverse",
		},
		scale: 0.5,
		rotation: -10,
		opacity: 0,
		duration: 1,
		ease: "elastic.out(1, 0.5)",
	});
});
