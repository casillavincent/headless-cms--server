import React from "react"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Recipes from "../components/Recipes"

export default function Home() {
  /* My Query */
  const data = useStaticQuery(graphql`
    query MyQuery {
      wordpress {
        sections {
          edges {
            node {
              siteBanner {
                contextTitle
                postExcerpt
                postLink
                postTitle
                bannerImage {
                  srcSet
                }
              }
            }
          }
        }
        recipes {
          edges {
            node {
              recipes {
                recipeTitle
                recipeOverview
                recipeAuthor
                articleLink
                mainThumbnail {
                  srcSet(size: POST_THUMBNAIL)
                }
              }
            }
          }
        }
      }
    }
  `)

  console.log(data)
  /* Banner Variables */
  const {
    postTitle,
    postLink,
    postExcerpt,
    contextTitle,
  } = data.wordpress.sections.edges[0].node.siteBanner
  const srcSet =
    data.wordpress.sections.edges[1].node.siteBanner.bannerImage.srcSet

  /* Featured Recipes */
  const recipesArr = data.wordpress.recipes.edges

  return (
    <Layout>
      <Banner
        img={srcSet}
        title={postTitle}
        excerpt={postExcerpt}
        context={contextTitle}
        link={postLink}
      />
      <Recipes arr={recipesArr} />
    </Layout>
  )
}
