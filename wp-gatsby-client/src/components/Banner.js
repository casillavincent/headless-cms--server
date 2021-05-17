import React from "react"

const Banner = ({ img, title, excerpt, context, link }) => {
  return (
    <section className="site-home-banner">
      {/* Image */}
      <a href={`${link}`}>
        <img alt="Site Banner" srcSet={`${img}`} width="1000" />
      </a>

      {/* Text Content */}
      <div className="text-content">
        <p className="context-title">{context}</p>
        <p className="title">{title}</p>
        <p className="excerpt">{excerpt}</p>
      </div>
    </section>
  )
}

export default Banner
