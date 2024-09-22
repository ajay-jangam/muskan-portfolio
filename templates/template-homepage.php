<?php /* Template Name: Homepage */ ?>

<?php get_header() ?>


<!-- Hero -->

<?php echo get_template_part( 'template-parts/homepage/content', 'hero' ); ?>

<!-- Projects -->

<?php echo get_template_part( 'template-parts/homepage/content', 'projects' ); ?>

<!-- Clients -->

<?php echo get_template_part( 'template-parts/homepage/content', 'clients' ); ?>

<!-- Feedback -->

<?php echo get_template_part( 'template-parts/homepage/content', 'feedback' ); ?>

<!-- Principles -->

<?php echo get_template_part( 'template-parts/homepage/content', 'principles' ); ?>

<!-- Blogs -->

<?php echo get_template_part( 'template-parts/homepage/content', 'blogs' ); ?>


<?php get_footer() ?>