<?php
/* 
    Plugin Name: mk - ReactPlugin
    Description: nice ReactPlugin
    Version: 1.0.0
    Author: Manuel Koch
    Author URI: https://instagram.com/manuelkoch
*/

if ( ! defined( 'ABSPATH') ) exit; 

class AreYouPayingAttention {
    function __construct() {
        add_action('init', array($this, 'adminAssets'));
    }

    function adminAssets() {
        wp_register_script('ournewblocktype', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element'));
        register_block_type('ourplugin/text-lottie', array(
            'editor_script' => 'ournewblocktype',
            'render_callback' => array($this, 'theHTML')
        ));
    }

    function theHTML($attributes){
        ob_start(); ?>

        <div class="container text-image">
            <div class="text-section">
                <div class="text">
                    <h2><?php echo esc_html($attributes['headline'])?></h2>
                    <p><?php echo esc_html($attributes['content'])?></p>
                </div>
            </div>
            <div class="image">
                <lottie-player src="<?php echo esc_html($attributes['url'])?>"  background="transparent"  speed="1"  style="width: 100%;"  loop  autoplay></lottie-player>
            </div>
        </div>
        <?php return ob_get_clean();
    }
}

$areYouPayingAttention = new AreYouPayingAttention();