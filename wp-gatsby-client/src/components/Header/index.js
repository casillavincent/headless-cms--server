import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className="site-header">
      {/* Site Logo */}
      <div className="site-logo">
        <h1>
          <a href="#0">Jynx Kitchen.</a>
        </h1>
      </div>

      {/* Site Navigation */}
      <nav className="site-navigation">
        <ul className="nav-ul">
          <li className="nav-li">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-li">
            <Link to="/">Recipes</Link>
          </li>
          <li className="nav-li">
            <Link to="/">Blog</Link>
          </li>
          <li className="nav-li">
            <Link to="/">Travels</Link>
          </li>
          <li className="nav-li">
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
