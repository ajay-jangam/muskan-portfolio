<?php
/**
 * Template part for displaying footer
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package portfolio
 */

?>

<footer class="footer">
	<div class="footer__wrapper container">
		<div class="footer__main">
			<div class="footer__left">
				<p class="footer__qoute">
					<span>
						Why Settle for Ordinary?
						<img
							src="<?php echo get_template_directory_uri(); ?>/assets/images/footer/footer-logo1.svg"
							alt=""
							class="footer__logo footer__logo1"
						/>
					</span>
					<span>
						Let’s build
						<img
							src="<?php echo get_template_directory_uri(); ?>/assets/images/footer/footer-logo2.svg"
							alt=""
							class="footer__logo footer__logo2"
						/>
						something groundbreaking
						<img
							src="<?php echo get_template_directory_uri(); ?>/assets/images/footer/footer-logo3.svg"
							alt=""
							class="footer__logo footer__logo3"
						/>
					</span>
					<span>
						that users love!
						<img
							src="<?php echo get_template_directory_uri(); ?>/assets/images/footer/footer-logo4.svg"
							alt=""
							class="footer__logo footer__logo4"
						/>
					</span>
				</p>
				<div class="footer__bottom footer__bottomMobile">
					<ul class="footer__bottomLinks">
						<li
							class="footer__bottomLink footer__connect"
						>
							<a href="#"> Connect </a>
						</li>
						<li class="footer__bottomLink">
							<a href="https://www.linkedin.com/in/muskan-bhatia20/">
								<span>LinkedIn</span>
								<img
									src="<?php echo get_template_directory_uri(); ?>/assets/images/footer/arrow-angle.svg"
									alt=""
									class="footer_linkIcon"
								/>
							</a>
						</li>
						<li class="footer__bottomLink">
							<a href="https://medium.com/@muskanbhatia.design">
								<span>Medium</span>
								<img
									src="<?php echo get_template_directory_uri(); ?>/assets/images/footer/arrow-angle.svg"
									alt=""
									class="footer_linkIcon"
								/>
							</a>
						</li>
						<li class="footer__bottomLink">
							<a href="https://www.behance.net/bhatiamuskan20">
								<span>Behance</span>
								<img
									src="<?php echo get_template_directory_uri(); ?>/assets/images/footer/arrow-angle.svg"
									alt=""
									class="footer_linkIcon"
								/>
							</a>
						</li>
					</ul>
				</div>
				<div class="footer__right footer__rightMobile">
					<img
						src="<?php echo get_template_directory_uri(); ?>/assets/images/footer/profile-img.png"
						alt=""
						class="footer__profileImg"
					/>
					<img
						src="<?php echo get_template_directory_uri(); ?>/assets/images/footer/footer__roundTest.svg"
						alt=""
						class="footer__roundTextImg"
					/>
				</div>
				<p class="footer__title">
					<span class="footer__titleFirst">Let’s</span>
					<span>W</span>ork Together!
				</p>
				<div class="footer__copyEmailWrapper">
					<input
						type="text"
						class="footer__email"
						value="muskanbhatia.design@gmail.com"
						readonly
					/>
					<button
						class="footer__copyLink"
						id="copyButton"
					>
						<img
							src="<?php echo get_template_directory_uri(); ?>/assets/images/footer/copy-email.svg"
							alt=""
							class="footer__copyLinkIcon"
						/>
					</button>
					<span class="footer__copiedText">Copied!</span>
				</div>
				<a href="/contact-us" class="footer__link"
					>Let’s Collaborate
					<img
						src="<?php echo get_template_directory_uri(); ?>/assets/images/footer/arrow-right.svg"
						alt=""
						class="footer__linkIcon"
				/></a>
			</div>
			<div class="footer__right footer__rightDesktop">
				<img
					src="<?php echo get_template_directory_uri(); ?>/assets/images/footer/profile-img.png"
					alt=""
					class="footer__profileImg"
				/>
				<img
					src="<?php echo get_template_directory_uri(); ?>/assets/images/footer/footer__roundTest.svg"
					alt=""
					class="footer__roundTextImg"
				/>
			</div>
		</div>
		<div class="footer__bottom footer__bottomDesktop">
			<p class="footer__copyRights">
				© Copyright 2024. Muskan Bhatia. All rights
				reserved. <span>|</span> Design by Muskan
			</p>
			<ul class="footer__bottomLinks">
				<li class="footer__bottomLink footer__connect">
					<a href="#"> Connect </a>
				</li>
				<li class="footer__bottomLink">
					<a href="https://www.linkedin.com/in/muskan-bhatia20/">
						<span>LinkedIn</span>
						<img
							src="<?php echo get_template_directory_uri(); ?>/assets/images/footer/arrow-angle.svg"
							alt=""
							class="footer_linkIcon"
						/>
					</a>
				</li>
				<li class="footer__bottomLink">
					<a href="https://medium.com/@muskanbhatia.design">
						<span>Medium</span>
						<img
							src="<?php echo get_template_directory_uri(); ?>/assets/images/footer/arrow-angle.svg"
							alt=""
							class="footer_linkIcon"
						/>
					</a>
				</li>
				<li class="footer__bottomLink">
					<a href="https://www.behance.net/bhatiamuskan20">
						<span>Behance</span>
						<img
							src="<?php echo get_template_directory_uri(); ?>/assets/images/footer/arrow-angle.svg"
							alt=""
							class="footer_linkIcon"
						/>
					</a>
				</li>
			</ul>
		</div>
	</div>
</footer>
