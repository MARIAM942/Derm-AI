<?php
/**
 * DermAI Basic Theme functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package DermAI_Basic_Theme
 */

if ( ! defined( 'DERMAI_VERSION' ) ) {
    // Theme version.
    define( 'DERMAI_VERSION', '1.0.4' ); // Incremented version
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function dermai_basic_theme_setup() {
    // Make theme available for translation.
    load_theme_textdomain( 'dermai-theme', get_template_directory() . '/languages' );

    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage the document title.
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support( 'post-thumbnails' );

    // Switch default core markup for search form, comment form, and comments to output valid HTML5.
    add_theme_support(
        'html5',
        array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'style', // Allows WordPress to manage <style> tags better
            'script', // Allows WordPress to manage <script> tags better
        )
    );

    // Add theme support for selective refresh for widgets.
    add_theme_support( 'customize-selective-refresh-widgets' );

    // Gutenberg support.
    add_theme_support( 'wp-block-styles' );
    add_theme_support( 'align-wide' );
    add_theme_support( 'responsive-embeds' );
}
add_action( 'after_setup_theme', 'dermai_basic_theme_setup' );

/**
 * Enqueue scripts and styles.
 */
function dermai_basic_theme_scripts() {
    // Main theme stylesheet (style.css).
    wp_enqueue_style( 'dermai-style', get_stylesheet_uri(), array(), DERMAI_VERSION );

    // Main custom JavaScript file (script.js).
    // Ensure the path is correct if script.js is in a subfolder like /js/
    wp_enqueue_script( 'dermai-script', get_template_directory_uri() . '/script.js', array(), DERMAI_VERSION, true );

    // Pass PHP variables to JavaScript.
    wp_localize_script(
        'dermai-script',
        'dermai_vars',
        array(
            'theme_uri' => esc_url( get_template_directory_uri() ),
            'home_url'  => esc_url( home_url( '/' ) ),
            'ajax_url'  => esc_url( admin_url( 'admin-ajax.php' ) ),
            // Add a nonce for feedback form (optional but recommended for security)
            // 'feedback_nonce' => wp_create_nonce('dermai_feedback_nonce'),
        )
    );

    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'dermai_basic_theme_scripts' );


/**
 * Handle feedback form submission via AJAX.
 */
function dermai_handle_feedback_submission() {
    // Optional: Verify nonce for security
    // if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( $_POST['nonce'], 'dermai_feedback_nonce' ) ) {
    //     wp_send_json_error( array( 'message' => 'Nonce verification failed.' ), 403 );
    //     return; // or wp_die();
    // }

    // Sanitize and validate input
    $name = isset( $_POST['feedback_name'] ) ? sanitize_text_field( wp_unslash( $_POST['feedback_name'] ) ) : '';
    $email_from = isset( $_POST['feedback_email'] ) ? sanitize_email( wp_unslash( $_POST['feedback_email'] ) ) : '';
    $message_content = isset( $_POST['feedback_message'] ) ? sanitize_textarea_field( wp_unslash( $_POST['feedback_message'] ) ) : '';

    if ( empty( $name ) || ! is_email( $email_from ) || empty( $message_content ) ) {
        wp_send_json_error( array( 'message' => __( 'Please fill in all required fields correctly.', 'dermai-theme' ) ) );
        return;
    }

    $to = 'mariamabuelez17@gmail.com'; // YOUR GMAIL ADDRESS
    $subject = sprintf( __( 'New Feedback from %s via DermAI Site', 'dermai-theme' ), $name );
    
    $body = "You have received a new feedback submission:\n\n";
    $body .= "Name: " . $name . "\n";
    $body .= "Email: " . $email_from . "\n";
    $body .= "Message:\n" . $message_content . "\n\n";
    $body .= "---\n";
    $body .= "This email was sent from your DermAI website contact form.";

    $headers = array();
    $headers[] = 'From: ' . get_bloginfo('name') . ' <wordpress@' . preg_replace('#^www\.#', '', strtolower($_SERVER['SERVER_NAME'])) . '>'; // Or a no-reply@yourdomain.com
    $headers[] = 'Reply-To: ' . $name . ' <' . $email_from . '>';
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';

    // Set the "from" email address for wp_mail
    add_filter( 'wp_mail_from', function( $original_email_address ) use ($email_from) {
        // Make sure this is a valid email from your domain or configured for sending
        // return 'noreply@yourdomain.com'; // Example
        return 'wordpress@' . preg_replace('#^www\.#', '', strtolower($_SERVER['SERVER_NAME']));
    });
    add_filter( 'wp_mail_from_name', function( $original_from_name ) {
        return get_bloginfo('name');
    });

    $sent = wp_mail( $to, $subject, $body, $headers );

    // Clean up filters
    remove_filter( 'wp_mail_from', function( $original_email_address ) use ($email_from) {
        return 'wordpress@' . preg_replace('#^www\.#', '', strtolower($_SERVER['SERVER_NAME']));
    });
    remove_filter( 'wp_mail_from_name', function( $original_from_name ) {
        return get_bloginfo('name');
    });


    if ( $sent ) {
        wp_send_json_success( array( 'message' => __( 'Thank you for your feedback!', 'dermai-theme' ) ) );
    } else {
        wp_send_json_error( array( 'message' => __( 'There was an error sending your feedback. Please try again later.', 'dermai-theme' ) ) );
    }

    // It's important to wp_die() at the end of AJAX handlers
    wp_die();
}
// Hook for logged-in users
add_action( 'wp_ajax_dermai_send_feedback', 'dermai_handle_feedback_submission' );
// Hook for non-logged-in users
add_action( 'wp_ajax_nopriv_dermai_send_feedback', 'dermai_handle_feedback_submission' );

?>