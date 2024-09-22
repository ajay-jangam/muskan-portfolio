<?php /* Template Name: About Me */ ?>

<?php get_header() ?>


<!-- About -->

<?php echo get_template_part( 'template-parts/about/content', 'about' ); ?>

<!-- Details -->

<?php echo get_template_part( 'template-parts/about/content', 'details' ); ?>

<!-- Feedback -->

<?php echo get_template_part( 'template-parts/homepage/content', 'feedback' ); ?>

<!-- Snapshot -->

<?php echo get_template_part( 'template-parts/about/content', 'snapshot' ); ?>

<!-- Footer -->
 
<?php get_footer() ?>