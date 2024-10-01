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
                <img
                    src="<?php echo get_template_directory_uri(); ?>/assets/images/home/arrow-right.svg"
                    alt="My Project"
                    class="projects__buttonArrow"
                />
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
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/home/project-img-mobile.png"
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
                            #TravelAppDesign
                        </p>
                        <p class="projects__projectTag">
                            #UserExperience
                        </p>
                        <p class="projects__projectTag">
                            #UserEnagagement
                        </p>
                    </div>
                    <a href="/portfolio/transforming-investment-management-with-anand-rathi/" class="projects__viewButton">
                        View Project
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
                    </a>
                </div>
            </div> -->
        </div>

        <a href="/projects" class="projects__button projects__buttonMobile">
            View more projects
            <img
                src="<?php echo get_template_directory_uri(); ?>/assets/images/home/arrow-right.svg"
                alt="My Project"
                class="projects__buttonArrow"
            />
        </a>
    </div>
</section>

<!-- Projects Section End -->