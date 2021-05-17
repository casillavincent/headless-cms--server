# Gatsby + WordPress

### A basic desktop mockup.

<img src="https://user-images.githubusercontent.com/73447863/118385697-1d05bf00-b5c6-11eb-8bd6-a17f4688c452.png" width="600" markdown="1" />
<img src="https://user-images.githubusercontent.com/73447863/118385693-17a87480-b5c6-11eb-8d3d-6a46b9834941.png" width="900" markdown="1" />

### Configuring GraphQL IDE in WordPress

<img src="https://user-images.githubusercontent.com/73447863/118422661-7fb79300-b678-11eb-8702-8fa83eec56ae.jpg" width="900" markdown="1" />

## First Install WP Plugins

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

## Overview

-  Create content using WordPress but build the client-side with another technology
-  Headless wont use WordPress themes
-  All Posts, Custom Post Types, Media will reside in WordPress
-  Can use a Local server to access Admin

## Setup

```
$ npm install gatsby-source-graphql
```

> In the gatsby.config.js

```javascript
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
   /* Your site config here */
   plugins: [
      // Simple config, passing URL
      {
         resolve: "gatsby-source-graphql",
         options: {
            // Arbitrary name for the remote schema Query type
            typeName: "WordPress",
            // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
            fieldName: "wordpress",
            // Url to query from
            url: "http://localhost:8888/headless-cms/graphql",
         },
      },
   ],
};
```

> Page Queries

```javascript
import React from "react";
import { graphql } from "gatsby";

export default function Home({ data }) {
   const { title, content } = data.wordpress.people.edges[0].node;

   return (
      <div>
         <h1>Headless CMS</h1>

         <div className="person">
            <h2>{title}</h2>
            <p>{content}</p>
         </div>
      </div>
   );
}

export const query = graphql`
   query WPQuery {
      wordpress {
         people {
            edges {
               node {
                  title
                  content
               }
            }
         }
      }
   }
`;
```

> Static Queries

```javascript
import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function Home() {
   const data = useStaticQuery(graphql`
      query MyQuery {
         wordpress {
            people {
               edges {
                  node {
                     title
                     content
                     userRoles {
                        roleTitle
                     }
                  }
               }
            }
         }
      }
   `);
   const { title, content } = data.wordpress.people.edges[0].node;
   const { roleTitle } = data.wordpress.people.edges[0].node.userRoles;
   console.log(title, content, roleTitle);

   return (
      <div>
         <h1>Headless CMS</h1>
         <div className="person"></div>
      </div>
   );
}
```

### Whats the difference?

-  In userStaticQueries you cant use query variables
-  Static Queries is known to get errors
-  Static queries can only be used once in a component
