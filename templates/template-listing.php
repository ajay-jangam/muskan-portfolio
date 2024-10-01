<?php /* Template Name: Project Listing */ ?>

<?php get_header() ?>


<!-- Project Hero -->

<?php echo get_template_part( 'template-parts/listing/content', 'projectsHero' ); ?>

<!-- Projects -->

<?php echo get_template_part( 'template-parts/homepage/content', 'projects' ); ?>

<!-- Experiments -->

<?php echo get_template_part( 'template-parts/listing/content', 'experiments' ); ?>

<!-- Blogs -->

<?php echo get_template_part( 'template-parts/homepage/content', 'blogs' ); ?>

<!-- Footer -->
 
<?php get_footer() ?>