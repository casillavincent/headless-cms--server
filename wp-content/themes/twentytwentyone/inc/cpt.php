<?php
/* 
-------------------------------------------
            MY CUSTOM POSTYPES
-------------------------------------------
*/
 function jynx_register_custom_post_types() {
    /* Recipes */
    // $labels = array(
    //     'name'               => _x( 'Services', 'post type general name' ),
    //     'singular_name'      => _x( 'Services', 'post type singular name'),
    //     'menu_name'          => _x( 'Services', 'admin menu' ),
    //     'name_admin_bar'     => _x( 'Services', 'add new on admin bar' ),
    //     'add_new'            => _x( 'Add New', 'Service' ),
    //     'add_new_item'       => __( 'Add New Service' ),
    //     'new_item'           => __( 'New Service' ),
    //     'edit_item'          => __( 'Edit Service' ),
    //     'view_item'          => __( 'View Services' ),
    //     'all_items'          => __( 'All Services' ),
    //     'search_items'       => __( 'Search Services' ),
    //     'parent_item_colon'  => __( 'Parent Services:' ),
    //     'not_found'          => __( 'No Service found.' ),
    //     'not_found_in_trash' => __( 'No Services found in Trash.' ),
    //     'archives'           => __( 'Services Archives'),
    //     'insert_into_item'   => __( 'Insert into Services'),
    //     'uploaded_to_this_item' => __( 'Uploaded to this service'),
    //     'filter_item_list'   => __( 'Filter services list'),
    //     'items_list_navigation' => __( 'Services list navigation'),
    //     'items_list'         => __( 'Services list'),
    //     'featured_image'     => __( 'Service featured image'),
    //     'set_featured_image' => __( 'Set service featured image'),
    //     'remove_featured_image' => __( 'Remove service featured image'),
    //     'use_featured_image' => __( 'Use as featured image'),
    // );

    // $args = array(
    //     'labels'             => $labels,
    //     'public'             => true,
    //     'publicly_queryable' => true,
    //     'show_ui'            => true,
    //     'show_in_menu'       => true,
    //     'show_in_nav_menus'  => true,
    //     'show_in_admin_bar'  => true,
    //     'show_in_rest'       => true,
    //     'query_var'          => true,
    //     'rewrite'            => array( 'slug' => 'services' ),
    //     'capability_type'    => 'post',
    //     'has_archive'        => true,
    //     'hierarchical'       => false,
    //     'menu_position'      => 5,
    //     'menu_icon'          => 'dashicons-food', //! Icon
    //     'supports'           => array( 'title', 'thumbnail', 'editor' ),
    // );
    // register_post_type( 'jynx-services', $args );
    

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
}
add_action( 'init', 'jynx_register_custom_post_types' );



