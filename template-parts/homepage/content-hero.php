<?php
/**
 * The template for Hero Section
 */
?>

<!-- Hero Section Start -->

<section class="hero">
    <div class="hero__wrapper container">
        <div class="hero__sidebar hero__sidebarDesktop">
            <!-- <div class="hero__sidebarWrapper"> -->
            <div class="hero__profile">
                <img
                    src="<?php echo get_template_directory_uri(); ?>/assets/images/home/profile-img.png"
                    alt="Profile Image"
                    class="hero__profileImg"
                />
            </div>
            <div class="hero__profileContent">
                <p class="hero__profileName">Muskan Bhatia</p>
                <p class="hero__profileLocation">
                    Based in Delhi, India
                </p>
                <img
                    src="<?php echo get_template_directory_uri(); ?>/assets/images/home/quote.svg"
                    alt=""
                    class="hero__quoteIcon"
                />
                <p class="hero__profileDescription">
                    Helping businesses by designing human ✧ centered digital experiences ✺︎
                </p>
            </div>
            <!-- </div> -->
        </div>
        <div class="hero__main">
            <div class="hero__mainFirstFold">
                <div class="hero__text">
                    <img
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/home/graphic-arrow.svg"
                        alt=""
                        class="hero__doodleArrow"
                    />
                    <p class="hero__doodleText">Innovative</p>
                    <h2 class="hero__title">
                        PRODUCT <span>DESIGNER</span>
                    </h2>
                    <p class="hero__subTitle">
                        My core focus revolves around understanding
                        people and leveraging empathy to craft
                        optimised user experiences that genuinely
                        resonate with their needs and aspirations.
                    </p>
                    <div class="hero__stats">
                        <div class="hero__stat">
                            <p class="hero__statNumber">3+</p>
                            <p class="hero__statText">
                                Years of Experience
                            </p>
                        </div>
                        <div class="hero__stat">
                            <p class="hero__statNumber">15+</p>
                            <p class="hero__statText">
                                Projects Completed
                            </p>
                        </div>
                        <div class="hero__stat">
                            <p class="hero__statNumber">10+</p>
                            <p class="hero__statText">
                                Client Sectors
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero__sidebarWrapper hero__sidebar">
                <div class="hero__profile">
                    <img
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/home/profile-img.png"
                        alt="Profile Image"
                        class="hero__profileImg"
                    />
                </div>
                <div class="hero__profileContent">
                    <p class="hero__profileName">Muskan Bhatia</p>
                    <p class="hero__profileLocation">
                        Based in Delhi, India
                    </p>
                    <img
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/home/quote.svg"
                        alt=""
                        class="hero__quoteIcon"
                    />
                    <p class="hero__profileDescription">
                        I help businesses by designing human ✧
                        centered digital experiences ✺︎
                    </p>
                </div>
            </div>
            <div class="hero__mainSecondFold">
                <div class="hero__mainSecondFoldText">
                    <img
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/home/graphic-arrow-1.svg"
                        alt=""
                        class="hero__doodleImage"
                    />
                    <p class="hero__doodleTextTwo">
                        #The Visionary Path
                    </p>
                    <p class="hero__mainSecondFoldTitle">
                        My Design <span>Approach</span>
                    </p>
                </div>
                <div class="hero__accordion">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    AI-Enhanced design with a personal twist
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                class="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                   AI drives the data, but my design adds the human touch. Together, they create personalized, impactful experiences.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    Design for empathy, not just usability
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    Usability is a baseline. True design goes beyond that, it understands users’ emotions, needs, and frustrations. I design with empathy, creating solutions that connect on a human level.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                   See design as a journey, not a destination
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    Every design is part of a larger journey. I create with an eye toward the future, ensuring each step of the user’s experience is connected, thoughtful, and evolving with them.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                >
                                    Design for evolution, not perfection
                                </button>
                            </h2>
                            <div
                                id="collapseFour"
                                class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    Perfection doesn’t exist, evolution does. I design with flexibility in mind, creating designs that grow and adapt as users’ needs and expectations change over time.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive"
                                    aria-expanded="false"
                                    aria-controls="collapseFive"
                                >
                                    Believe in co-creation with clients
                                </button>
                            </h2>
                            <div
                                id="collapseFive"
                                class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    Collaboration is at the heart of my design process. I don’t just design for clients. I design with them, ensuring every product is a shared vision brought to life.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Hero Section End -->