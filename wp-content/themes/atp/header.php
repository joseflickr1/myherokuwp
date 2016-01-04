<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package totomo
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>


</head>

<body <?php body_class(); ?>>
<div id="wrapper">

	<header id="masthead" class="site-header tp" role="banner">
		<div class="top-bar container">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#site-navigation">
					<span class="icon-bars"><?php _e( 'Toggle navigation', 'totomo' ); ?></span>
				</button>
			</div>

			<?php
			$logo         = esc_url( get_theme_mod( 'logo' ) );
			$title_header = $logo ? "<img alt='logo' src='$logo'>" : get_bloginfo( 'name' ) ;
			?>

			<div class="navbar tp navbar-fixed-top">
				<div class="container">
		 			<ul class="nav navbar-nav dropdown">
		 				<li class="logoname">
							<?php
							printf(
								'<a href="%s" title="%s">%s</a>',
								esc_url( home_url( '/' ) ),
								esc_attr( get_bloginfo( 'name' ) ),
								$title_header
							);
							?>
		 				</li>

			 			<nav id="site-navigation" class="site-navigation pull-right dropdown-menu">
							<?php
							wp_nav_menu( array(
								'theme_location'  => 'primary',
								'container_id'    => 'navbar',
								'container_class'    => 'navbar',
								'menu_class'      => 'navigation',
								'menu_id'         => 'navigation',
								'walker'          => new Totomo_Bootstrap_Nav_Walker,
								'fallback_cb'     => 'totomo_bootstrap_menu_callback',
							) );
							?>
						</nav>

						
					</ul>
					
				</div>
			</div>
		</div>
	</header><!-- #masthead -->

	<div id="content" class="site-content container">
