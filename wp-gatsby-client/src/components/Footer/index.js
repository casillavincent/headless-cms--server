import React from "react"
import { Link } from "gatsby"
import { RiInstagramFill } from "react-icons/ri"
import { FaFacebookF } from "react-icons/fa"
import { IconContext } from "react-icons"
import { IoLogoTwitter } from "react-icons/io"

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-col-01" id="copyright-information">
        <p>All Rights Reserved &copy; 2021</p>
        <p>Designed by Vincent Casilla</p>
      </div>

      <div className="footer-col-02" id="social-icons">
        <IconContext.Provider
          value={{ color: "black", className: "footer-social-icons" }}
        >
          {/* Facebook Icon */}
          <Link to="/">
            <FaFacebookF />
          </Link>

          {/* Instagram Icon */}
          <Link to="/">
            <RiInstagramFill />
          </Link>

          {/* Twitter Icon */}
          <Link to="/">
            <IoLogoTwitter />
          </Link>
        </IconContext.Provider>
      </div>
    </footer>
  )
}

export default Footer
