<?php
/**
* Plugin Name: Newsletter Subscriber
* Description: A form to subscriber to a newsletter
* Version: 1.0
* Author: Shane Muirhead
*
**/

// Exit if Accessed Directly
if(!defined('ABSPATH')){
	exit;
}

// Load Scripts
require_once(plugin_dir_path(__FILE__) . '/includes/newsletter-subscriber-scripts.php');

// Load Class
require_once(plugin_dir_path(__FILE__) . '/includes/newsletter-subscriber-class.php');

// Register Widget
function register_newsletter_subscriber(): void {
	register_widget('Newsletter_Subscriber_Widget');
}

add_action('widgets_init', 'register_newsletter_subscriber');