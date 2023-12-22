<!DOCTYPE html>
<html>
<head>
	<title>Common HTML</title>

	<link rel="preload" href="<?php echo get_template_directory_uri();?>/assets/fonts/OpenSans-Bold.woff2" as="font" type="font/woff2" crossorigin>
	<link rel="preload" href="<?php echo get_template_directory_uri();?>/assets/fonts/OpenSans-SemiBold.woff2" as="font" type="font/woff2" crossorigin>
	<link rel="preload" href="<?php echo get_template_directory_uri();?>/assets/fonts/OpenSans-Regular.woff2" as="font" type="font/woff2" crossorigin>
	<link rel="preload" href="<?php echo get_template_directory_uri();?>/assets/fonts/OpenSans-Light.woff2" as="font" type="font/woff2" crossorigin>

</head>
<body>

	<!-- Header Start -->
	<header id="masthead" class="site-header">
		<div class="container">
			<div class="row">
				<div class="col-lg-3">
					<div class="site-branding">
						<?php the_custom_logo(); ?>
					</div>
				</div>
				<div class="col-lg-9">					
					<div class="header-menu">
						<nav id="site-navigation" class="main-navigation">
							<button class="menu-toggle" type="button" name="Hamburger Menu" aria-controls="primary-menu" aria-expanded="false">
								<span></span>
								<span></span>
								<span></span>
							</button>
							<div class="header-mobile-menu">
								<?php
								wp_nav_menu(
									array(
										'theme_location' => 'menu-1',
										'menu_id'        => 'primary-menu',
									)
								);
								?>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</header>
	<!-- Header End -->

	<!-- Footer Start -->
	<div class="footer-bottom-box">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-12">
					<div class="footer-bottom-text">
						<div class="copy-right">
							<p>© <?php echo date('Y');?> <?php echo get_bloginfo('name'); ?></p>
						</div>
						<div class="footer-bottom-link">
							<?php
								wp_nav_menu(array(
									'theme_location' => 'policy-menu',
								));
							?>
						</div>
						<div class="footer-other-link">
							<p>Web Design &amp; Digital Marketing with <span><i class="fa fa-heart" aria-hidden="true"></i></span> by <a href="https://www.dotcomdesign.com" target="_blank" title="Dotcom Design" class="dotcom-link">Dotcom Design</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Footer End -->

	<!-- Scroll To Top Start -->
	<button type="button"  id="scrollToTop" class="scrolltop" name="Back To Top"><i class="fas fa-angle-double-up"></i></button>
	<!-- Scroll To Top End -->

	<!-- CTA  Button Start -->
    <div class="cta-btn">
        <button class="sec-btn" data-toggle="modal" data-target="#schedule_an_estimate_Modal" type="button" name="Schedule an Estimate"><span>Schedule an Estimate</span></button>
    </div>
    <!-- CTA  Button Start -->

	<!-- Modal Start -->
	<div class="modal common-popup" id="schedule_an_estimate_Modal">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="popup-title">
					<h2 class="h2-title">Schedule an <span>Estimate</span></h2>
					<button type="button" class="close close-popup" name="Close Popup" data-bs-dismiss="modal"><i class="fas fa-times"></i></button>
				</div>
				<div class="common-popup-overflow">
					<div class="common-popup-text" data-simplebar>
						<div class="contact-form">
							<?php echo do_shortcode('[contact-form-7 id="117" title="Schedule an Estimate"]'); ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Modal End -->

	<!-- Contact Form 7 HTML structure Start -->
		<!-- For Select Tag -->
		<div class="form-element">[select* menu-573 class:form-select select-hidden flooring-input class:form-input first_as_label "Select Service*" "Carpet Cleaning" "Upholstery Cleaning" "Tile & Grout Cleaning" "Other"]<i aria-hidden="true" class="fa fa-chevron-down"></i></div>
		<!-- For Select Tag -->

		<!-- Submit Button -->
		<div class="submit-btn">[submit class:sec-btn "Submit"]</div>
		<!-- Submit Button -->

		<!-- File Upload -->
		<div class="form-box form-input-file">[file* file-509]<span class="input-file-icon"></span><span class="input-file-text"></span></div>
		<!-- File Upload -->

	<!-- Contact Form 7 HTML structure End -->
	
</body>
</html>