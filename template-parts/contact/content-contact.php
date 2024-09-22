<?php
/**
 * The template for Contact Section
 */
?>

<!-- Contact Section Start -->

<section class="contact">
    <div class="contact__wrapper container">
        <div class="contact__icon">
            <img
                src="<?php echo get_template_directory_uri(); ?>/assets/images/footer/profile-img.png"
                alt=""
                class="contact__profileImg"
            />
        </div>
        <h2 class="contact__title">
            <span class="footer__titleFirst">Let’s</span>
            <span>W</span>ork Together!
        </h2>
        <ul class="contact__socialLinks">
            <li class="contact__socialLink">
                <a href="https://www.instagram.com/muscancreate/">
                    <img
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/contact-us/Instagram.svg"
                        alt=""
                        class="contact__socaialIcons"
                    />
                </a>
            </li>

            <li class="contact__socialLink">
                <a href="https://medium.com/@muskanbhatia.design">
                    <img
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/contact-us/Medium.svg"
                        alt=""
                        class="contact__socaialIcons"
                    />
                </a>
            </li>
            <li class="contact__socialLink">
                <a
                    href="https://www.linkedin.com/in/muskan-bhatia20/"
                >
                    <img
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/contact-us/LinkedIn.svg"
                        alt=""
                        class="contact__socaialIcons"
                    />
                </a>
            </li>
            <li class="contact__socialLink">
                <a href="https://www.behance.net/bhatiamuskan20">
                    <img
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/contact-us/behance.svg"
                        alt=""
                        class="contact__socaialIcons"
                    />
                </a>
            </li>
        </ul>
        <div
            class="footer__copyEmailWrapper contact__copyEmailWrapper"
        >
            <input
                type="text"
                class="footer__email contact__email"
                value="muskanbhatia.design@gmail.com"
                readonly
            />
            <button
                class="footer__copyLink contact__copyLink"
                id="copyButton"
            >
                <img
                    src="<?php echo get_template_directory_uri(); ?>/assets/images/footer/copy-email.svg"
                    alt=""
                    class="footer__copyLinkIcon contact__copyLinkIcon"
                />
            </button>
            <span class="footer__copiedText contact__copiedText"
                >Copied!</span
            >
        </div>
    </div>
</section>

<!-- Contact Section End -->