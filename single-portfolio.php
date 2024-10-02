<?php get_header(); ?>

	<main id="primary" class="site-main">
		<?php
			if ( have_posts() ) :
				while ( have_posts() ) : the_post(); ?>

					<!-- Project Section Start -->
					<section class="project">
						<div class="project__wrapper container">
							<div class="project__header">
								<div class="project__headerLeft">
									<h2 class="project__title">
										<?php echo the_title(); ?>
									</h2>
									<p class="project__desc">
										<?php the_field( 'description' ); ?>
									</p>
								</div>
								<a href="#" class="project__headerLink">
									View on Behance
									<img src="<?php echo get_template_directory_uri(); ?>/assets/images/footer/arrow-angle.svg" alt="">
								</a>
							</div>
							<div class="project__stats">
								<div class="project__stat">
									<p class="project__statName">Client</p>
									<?php if ( have_rows( 'client' ) ) : ?>
										<?php while ( have_rows( 'client' ) ) : the_row(); ?>
											<a href="<?php the_sub_field( 'client_url' ); ?>" class="project__statValue"><?php the_sub_field( 'client_name' ); ?></a>
										<?php endwhile; ?>
									<?php endif; ?>
								</div>
								<div class="project__stat">
									<p class="project__statName">Industry</p>
									<p class="project__statValue"><?php the_field( 'industry' ); ?></p>
								</div>
								<div class="project__stat">
									<p class="project__statName">Role</p>
									<p class="project__statValue">
										<?php the_field( 'role' ); ?>
									</p>
								</div>
								<div class="project__stat">
									<p class="project__statName">Timeline</p>
									<p class="project__statValue"><?php the_field( 'timeline' ); ?></p>
								</div>
								<div class="project__stat">
									<p class="project__statName">Designers</p>
									<p class="project__statValue"><?php the_field( 'designers' ); ?></p>
								</div>
								<div class="project__stat">
									<p class="project__statName">Screens</p>
									<p class="project__statValue"><?php the_field( 'screens' ); ?></p>
								</div>
							</div>
						</div>
						<div class="project__imageWrapper">
							<?php if ( have_rows( 'snapshots' ) ) : ?>
								<?php while ( have_rows( 'snapshots' ) ) : the_row(); ?>
									<?php
									// Counter to track the first image
									$first_image = true;

									// Loop through snapshot fields from 1 to 8
									for ( $i = 1; $i <= 8; $i++ ) :
										$snapshot = get_sub_field( 'snapshot_' . $i );
										if ( $snapshot ) :

											// If it's the first image, wrap it in a container div
											if ( $first_image ) :
									?>
												<div class="container">
													<img src="<?php echo esc_url( $snapshot ); ?>" class="project__image" alt="Snapshot <?php echo $i; ?>" />
												</div>
									<?php
												// Set $first_image to false after the first image is processed
												$first_image = false;
											else :
									?>
												<img src="<?php echo esc_url( $snapshot ); ?>" class="project__image" alt="Snapshot <?php echo $i; ?>" />
									<?php
											endif;

										endif;
									endfor;
									?>
								<?php endwhile; ?>
							<?php endif; ?>
						</div>


						</div>
					</section>

					<!-- Project Section End -->

					<!-- Explore Section Start -->


					<section class="explore">
						<div class="explore__wrapper container">
							<div class="explore__header">
								<img
									src="<?php echo get_template_directory_uri(); ?>/assets/images/home/principles-doodle.svg"
									alt=""
									class="explore__doodleImg"
								/>
								<p class="explore__doodleText">#midnight experiments</p>
								<h2 class="explore__title">
									<span>Explore</span> More Projects
								</h2>
							</div>
							<!-- <div class="explore__cards"> -->
								
							<?php if ( have_rows( 'more_project' ) ) : ?>
								<div class="explore__cards">
									<?php while ( have_rows( 'more_project' ) ) : the_row(); ?>
										<?php
										// Loop through project groups dynamically from 1 to 3
										for ( $i = 1; $i <= 3; $i++ ) :
											$project_group = 'project_' . $i;
											if ( have_rows( $project_group ) ) :
												while ( have_rows( $project_group ) ) : the_row();
													$project_image = get_sub_field( 'project_image' );
													$project_name = get_sub_field( 'project_name' );
													$project_description = get_sub_field( 'project_description');
													?>
													<a href="<?php echo the_sub_field( 'project_link' ); ?>" class="explore__card">
														<?php if ( $project_image ) : ?>
															<img
																src="<?php echo esc_url( $project_image ); ?>"
																alt="<?php echo esc_attr( $project_name ); ?>"
																class="explore__cardImg"
															/>
														<?php endif; ?>
														<p class="explore__cardTitle"><?php echo esc_html( $project_name ); ?></p>
														<p class="explore__cardDesc"><?php echo esc_html( $project_description ); ?></p>
													</a>
													<?php
												endwhile;
											endif;
										endfor;
									?>
									<?php endwhile; ?>
								</div>
							<?php endif; ?>

							<!-- </div> -->
						</div>
					</section>

					<!-- Explore Section End -->

				<?php endwhile;
			endif;
		?>
	</main><!-- #main -->

<?php get_footer();
