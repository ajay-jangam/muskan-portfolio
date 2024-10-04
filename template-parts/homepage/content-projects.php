<?php
/**
 * The template for Projects Section
 */
?>

<!-- Projects Section Start -->

<section class="projects">
    <div class="projects__wrapper container">
        <div class="projects__header">
            <div class="projects__text">
                <img
                    src="<?php echo get_template_directory_uri(); ?>/assets/images/home/doodle-img.svg"
                    alt="Doodle"
                    class="projects__doodleImg"
                />
                <div class="projects__textWrapper">
                    <p class="projects__doodleText">
                        #From Idea to Execution
                    </p>
                    <h2 class="projects__title">My Projects</h2>
                </div>
            </div>

            <a
                href="/projects"
                class="projects__button projects__buttonDesktop"
            >
                View More Projects

                <svg class="projects__buttonArrow" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.995256 7.34009C0.445591 7.34009 -3.51977e-07 7.7878 -3.27835e-07 8.34009C-3.03694e-07 8.89237 0.445591 9.34009 0.995256 9.34009L15.0142 9.34009L10.2441 14.133C9.8554 14.5235 9.8554 15.1567 10.2441 15.5472C10.6327 15.9377 11.2629 15.9377 11.6516 15.5472L17.417 9.7543C18.1943 8.97325 18.1943 7.70692 17.417 6.92587L11.6516 1.13298C11.2629 0.742457 10.6327 0.742457 10.2441 1.13298C9.8554 1.52351 9.8554 2.15667 10.2441 2.54719L15.0142 7.34009L0.995256 7.34009Z" fill="#F7F4F9"/>
                </svg>
            </a>
        </div>
        <div class="projects__list">
            <div class="projects__single projects__projectOne">
                <div class="projects__preview">
                    <img
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/home/project-img.jpg"
                        alt="Project"
                        class="projects__image"
                    />
                    <img
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/home/project-img.jpg"
                        alt="Project"
                        class="projects__image projects__imageMobile"
                    />
                </div>
                <div class="projects__details">
                    <img
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/home/project-logo-1.svg"
                        alt="Yatra"
                        class="projects__projectLogo"
                    />
                    <p class="projects__projectTitle">
                        Revitalizing Yatra's User Experience.
                    </p>
                    <p class="projects__projectDesc">
                        Redesigned Yatra’s flight booking UI with a
                        modern approach to enhance user experience
                        and stay competitive.
                    </p>
                    <div class="projects__projectTags">
                        <p class="projects__projectTag">
                            #TravelAppDesign
                        </p>
                        <p class="projects__projectTag">
                            #UserExperience
                        </p>
                        <p class="projects__projectTag">
                            #UserEnagagement
                        </p>
                    </div>
                    <a href="/portfolio/yatra-flight-booking-revamp/" class="projects__viewButton">
                        View Project
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.995256 7.34009C0.445591 7.34009 -3.51977e-07 7.7878 -3.27835e-07 8.34009C-3.03694e-07 8.89237 0.445591 9.34009 0.995256 9.34009L15.0142 9.34009L10.2441 14.133C9.8554 14.5235 9.8554 15.1567 10.2441 15.5472C10.6327 15.9377 11.2629 15.9377 11.6516 15.5472L17.417 9.7543C18.1943 8.97325 18.1943 7.70692 17.417 6.92587L11.6516 1.13298C11.2629 0.742457 10.6327 0.742457 10.2441 1.13298C9.8554 1.52351 9.8554 2.15667 10.2441 2.54719L15.0142 7.34009L0.995256 7.34009Z" fill="#F7F4F9"/>
                        </svg>
                    </a>
                </div>
            </div>
            <!-- <div class="projects__single projects__projectTwo">
                <div class="projects__preview">
                    <img
                        src="<?php // echo get_template_directory_uri(); ?>/assets/images/home/project-img-1.jpg"
                        alt="Project"
                        class="projects__image"
                    />
                    <img
                        src="<?php // echo get_template_directory_uri(); ?>/assets/images/home/project-img-1-mobile.png"
                        alt="Project"
                        class="projects__image projects__imageMobile"
                    />
                </div>
                <div class="projects__details">
                    <img
                        src="<?php // echo get_template_directory_uri(); ?>/assets/images/home/project-logo.svg"
                        alt="Yatra"
                        class="projects__projectLogo"
                    />
                    <p class="projects__projectTitle">
                        Optimizing Livestock Nutrition with
                        Precision Data through eFeed.
                    </p>
                    <p class="projects__projectDesc">
                        A precision app designed for farmers,
                        optimizing livestock feed and reducing
                        methane emissions.
                    </p>
                    <div class="projects__projectTags">
                        <p class="projects__projectTag">
                            #LivestockManagement
                        </p>
                        <p class="projects__projectTag">
                            #AnimalNutrition
                        </p>
                        <p class="projects__projectTag">
                            #Agritech
                        </p>
                    </div>
                    <a href="#" class="projects__viewButton">
                        View Project
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.995256 7.34009C0.445591 7.34009 -3.51977e-07 7.7878 -3.27835e-07 8.34009C-3.03694e-07 8.89237 0.445591 9.34009 0.995256 9.34009L15.0142 9.34009L10.2441 14.133C9.8554 14.5235 9.8554 15.1567 10.2441 15.5472C10.6327 15.9377 11.2629 15.9377 11.6516 15.5472L17.417 9.7543C18.1943 8.97325 18.1943 7.70692 17.417 6.92587L11.6516 1.13298C11.2629 0.742457 10.6327 0.742457 10.2441 1.13298C9.8554 1.52351 9.8554 2.15667 10.2441 2.54719L15.0142 7.34009L0.995256 7.34009Z" fill="#F7F4F9"/>
                        </svg>

                    </a>
                </div>
            </div> -->
            <div class="projects__single projects__projectThree">
                <div class="projects__preview">
                    <img
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/home/project-img-3.jpg"
                        alt="Project"
                        class="projects__image"
                    />

                    <img
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/home/project-img-3.jpg"
                        alt="Project"
                        class="projects__image projects__imageMobile"
                    />
                </div>
                <div class="projects__details">
                    <img
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/home/project-logo-3.svg"
                        alt="AnandRathi"
                        class="projects__projectLogo"
                    />
                    <p class="projects__projectTitle">
                        Transforming Investment Management with
                        Anand Rathi
                    </p>
                    <p class="projects__projectDesc">
                        Redesigned the onboarding process,
                        increasing the percentage of users
                        successfully completing account setup,
                        leading to a smoother user journey.
                    </p>
                    <div class="projects__projectTags">
                        <p class="projects__projectTag">
                            #Mutual Funds
                        </p>
                        <p class="projects__projectTag">
                            #Fintech
                        </p>
                        <p class="projects__projectTag">
                            #User Journey
                        </p>
                    </div>
                    <a href="/portfolio/transforming-investment-management-with-anand-rathi/" class="projects__viewButton">
                        View Project
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.995256 7.34009C0.445591 7.34009 -3.51977e-07 7.7878 -3.27835e-07 8.34009C-3.03694e-07 8.89237 0.445591 9.34009 0.995256 9.34009L15.0142 9.34009L10.2441 14.133C9.8554 14.5235 9.8554 15.1567 10.2441 15.5472C10.6327 15.9377 11.2629 15.9377 11.6516 15.5472L17.417 9.7543C18.1943 8.97325 18.1943 7.70692 17.417 6.92587L11.6516 1.13298C11.2629 0.742457 10.6327 0.742457 10.2441 1.13298C9.8554 1.52351 9.8554 2.15667 10.2441 2.54719L15.0142 7.34009L0.995256 7.34009Z" fill="#F7F4F9"/>
                        </svg>

                    </a>
                </div>
            </div>
            <!-- <div class="projects__single projects__projectFour">
                <div class="projects__preview">
                    <img
                        src="<?php // echo get_template_directory_uri(); ?>/assets/images/home/project-img-1.jpg"
                        alt="Project"
                        class="projects__image"
                    />
                </div>
                <div class="projects__details">
                    <img
                        src="<?php // echo get_template_directory_uri(); ?>/assets/images/home/project-logo.svg"
                        alt="Yatra"
                        class="projects__projectLogo"
                    />
                    <p class="projects__projectTitle">
                        Optimizing Livestock Nutrition with
                        Precision Data through eFeed.
                    </p>
                    <p class="projects__projectDesc">
                        A precision app designed for farmers,
                        optimizing livestock feed and reducing
                        methane emissions.
                    </p>
                    <div class="projects__projectTags">
                        <p class="projects__projectTag">
                            #LivestockManagement
                        </p>
                        <p class="projects__projectTag">
                            #AnimalNutrition
                        </p>
                        <p class="projects__projectTag">
                            #Agritech
                        </p>
                    </div>
                    <a href="#" class="projects__viewButton">
                        View Project
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.995256 7.34009C0.445591 7.34009 -3.51977e-07 7.7878 -3.27835e-07 8.34009C-3.03694e-07 8.89237 0.445591 9.34009 0.995256 9.34009L15.0142 9.34009L10.2441 14.133C9.8554 14.5235 9.8554 15.1567 10.2441 15.5472C10.6327 15.9377 11.2629 15.9377 11.6516 15.5472L17.417 9.7543C18.1943 8.97325 18.1943 7.70692 17.417 6.92587L11.6516 1.13298C11.2629 0.742457 10.6327 0.742457 10.2441 1.13298C9.8554 1.52351 9.8554 2.15667 10.2441 2.54719L15.0142 7.34009L0.995256 7.34009Z" fill="#F7F4F9"/>
                        </svg>

                    </a>
                </div>
            </div>
            <div class="projects__single projects__projectThree">
                <div class="projects__preview">
                    <img
                        src="<?php // echo get_template_directory_uri(); ?>/assets/images/home/project-img-3.jpg"
                        alt="Project"
                        class="projects__image"
                    />
                </div>
                <div class="projects__details">
                    <img
                        src="<?php // echo get_template_directory_uri(); ?>/assets/images/home/project-logo-3.svg"
                        alt="AnandRathi"
                        class="projects__projectLogo"
                    />
                    <p class="projects__projectTitle">
                        Transforming Investment Management with
                        Anand Rathi
                    </p>
                    <p class="projects__projectDesc">
                        Redesigned the onboarding process,
                        increasing the percentage of users
                        successfully completing account setup,
                        leading to a smoother user journey.
                    </p>
                    <div class="projects__projectTags">
                        <p class="projects__projectTag">
                            #TravelAppDesign
                        </p>
                        <p class="projects__projectTag">
                            #UserExperience
                        </p>
                        <p class="projects__projectTag">
                            #UserEnagagement
                        </p>
                    </div>
                    <a href="#" class="projects__viewButton">
                        View Project
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.995256 7.34009C0.445591 7.34009 -3.51977e-07 7.7878 -3.27835e-07 8.34009C-3.03694e-07 8.89237 0.445591 9.34009 0.995256 9.34009L15.0142 9.34009L10.2441 14.133C9.8554 14.5235 9.8554 15.1567 10.2441 15.5472C10.6327 15.9377 11.2629 15.9377 11.6516 15.5472L17.417 9.7543C18.1943 8.97325 18.1943 7.70692 17.417 6.92587L11.6516 1.13298C11.2629 0.742457 10.6327 0.742457 10.2441 1.13298C9.8554 1.52351 9.8554 2.15667 10.2441 2.54719L15.0142 7.34009L0.995256 7.34009Z" fill="#F7F4F9"/>
                        </svg>

                    </a>
                </div>
            </div> -->
        </div>

        <a href="/projects" class="projects__button projects__buttonMobile">
            View more projects
            <svg class="projects__buttonArrow" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.995256 7.34009C0.445591 7.34009 -3.51977e-07 7.7878 -3.27835e-07 8.34009C-3.03694e-07 8.89237 0.445591 9.34009 0.995256 9.34009L15.0142 9.34009L10.2441 14.133C9.8554 14.5235 9.8554 15.1567 10.2441 15.5472C10.6327 15.9377 11.2629 15.9377 11.6516 15.5472L17.417 9.7543C18.1943 8.97325 18.1943 7.70692 17.417 6.92587L11.6516 1.13298C11.2629 0.742457 10.6327 0.742457 10.2441 1.13298C9.8554 1.52351 9.8554 2.15667 10.2441 2.54719L15.0142 7.34009L0.995256 7.34009Z" fill="#F7F4F9"/>
            </svg>
        </a>
    </div>
</section>

<!-- Projects Section End -->