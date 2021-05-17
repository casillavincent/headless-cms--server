import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      wordpress {
        sections {
          edges {
            node {
              siteBanner {
                postTitle
                postLink
                postExcerpt
                contextTitle
                bannerImage {
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  `)

  const {
    contextTitle,
    postExcerpt,
    postLink,
    postTitle,
  } = data.wordpress.sections.edges[0].node.siteBanner

  const sourceSet =
    data.wordpress.sections.edges[0].node.siteBanner.bannerImage.srcSet

  return (
    <section className="site-home-banner">
      {/* Image */}
      <a href={`${postLink}`}>
        {" "}
        <img
          srcSet={`${sourceSet}`}
          alt="Site Banner"
          className="site-banner-image"
          loading="lazy"
        />
      </a>

      {/* Text Content */}
      <div className="text-content">
        <p className="context">{contextTitle}</p>
        <p className="post-title">{postTitle}</p>
        <p className="excerpt">{postExcerpt}</p>
      </div>
    </section>
  )
}

export default Banner
