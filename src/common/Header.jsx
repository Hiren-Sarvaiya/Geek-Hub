import React from "react"
import { NavLink } from "react-router-dom"
import "../assets/css/Header.css"

const Header = () => {
  return (
    <header>
      <div className="logo">Geek Hub</div>
      <nav>
        <div className="container1 flex justify-between items-center">
          <div className="navLinksContainer flex justify-center items-center">
            <NavLink className="nav-links cur-p" to="/">Home</NavLink>
            <NavLink className="nav-links cur-p" to="/about">About</NavLink>
            <NavLink className="nav-links cur-p" to="/contact">Contact Us</NavLink>
            <NavLink className="nav-links cur-p" to="/login">Login</NavLink>
            <NavLink className="nav-links cur-p" to="/signup">Sign Up</NavLink>
          </div>
          <div className="searchContainer flex items-center">
            <input type="text" id="search" placeholder="Start exploring..." />
            <label className="cur-p" htmlFor="search"><img src="/src/assets/images/searchIcon.svg" /></label>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header