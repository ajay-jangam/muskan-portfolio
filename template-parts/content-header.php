<?php
/**
 * Template part for displaying header
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package portfolio
 */

?>

<nav class="navbar navbar-expand-lg">
	<div class="navbar-wrapper">
		<div class="container">
			<a class="navbar-brand" href="/">
				<img
					src="<?php echo get_template_directory_uri(); ?>/assets/images/home/logo.svg"
					alt="Portfoilio Logo"
				/>
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<!-- <span class="navbar-toggler-icon"></span> -->
				<div class="hamburger">
					<span class="line"></span>
					<span class="line"></span>
					<span class="line"></span>
				</div>
			</button>
			<div
				class="collapse navbar-collapse"
				id="navbarSupportedContent"
			>
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a
							class="nav-link active"
							aria-current="page"
							href="/"
							>Home</a
						>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							href="/project-detail"
							>My projects</a
						>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/about-me"
							>About me</a
						>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/contact-us"
							>Let's talk</a
						>
					</li>
					<li class="nav-item resume-link">
						<a
							class="nav-link"
							href="./assets/resume/MuskanBhatia_Resume_2024.pdf"
							target="_blank"
							>Get My Resume
							<img
								src="<?php echo get_template_directory_uri(); ?>/assets/images/home/download.svg"
								alt=""
								class="resume-downloadIcon"
							/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>