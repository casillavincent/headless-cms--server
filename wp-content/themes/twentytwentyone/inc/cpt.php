<?php
/* 
-------------------------------------------
            MY CUSTOM POSTYPES
-------------------------------------------
*/
 function jynx_register_custom_post_types() {
    /* Register Sections */
    $args = array(
        'public'                => true,
        'label'                 => 'Sections',
        'menu_icon'             => 'dashicons-grid-view',
        'show_in_graphql'       => true,
        'graphql_single_name'   => 'Section',
        'graphql_plural_name'   => 'Sections',
        'supports'              => array( 'title' ),
    );
    register_post_type( 'jynx-sections', $args );

    /* Recipes */
    $args = array(
        'public'                => true,
        'label'                 => 'Recipes',
        'menu_icon'          => 'dashicons-food',
        'show_in_graphql'       => true,
        'graphql_single_name'   => 'Recipe',
        'graphql_plural_name'   => 'Recipes',
        'supports'              => array( 'title' ),
    );
    register_post_type( 'jynx-recipes', $args );
}
add_action( 'init', 'jynx_register_custom_post_types' );


