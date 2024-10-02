<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package portfolio
 */

?>
<?php get_template_part( 'template-parts/content', 'footer' ); ?>

</main><!-- #page -->

<!-- Jquery Script -->
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
</script>

<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>


<!-- RoughEase, ExpoScaleEase and SlowMo are all included in the EasePack file -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/EasePack.min.js"></script>

<?php wp_footer(); ?>

<!-- Main JS -->
<!-- <script src="./assets/dist/js/app.js"></script> -->
</body>

</html>