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
});
