# Headless CMS Setup

A headless CMS setup with WordPress.

## First Install WP Plugins

-  WP GraphiQL
-  WP GraphQL
-  WPGraphQL For ACF
-  Advanced Custom Field

```php
/*
Adding a Custom Post Type that's supported by GraphQL;
Need to include the last 3 arguements
*/
$args = array(
    'public' => true,
    'label' => 'Users',
    'show_in_graphql' => true,
    'graphql_single_name' => 'User',
    'graphql_plural_name' => 'Users',
);

register_post_type( 'jynx-users', $args );
}

add_action( 'init', 'jynx_register_custom_post_types' );
```
