import React from "react"
import { NavLink } from "react-router-dom"
import "../assets/css/Header.css"

const Header = () => {
  return (
    <nav className="flex">
      <NavLink className="logo-link cur-p" to="/"><div className="logo">Geek Hub</div></NavLink>
      <div className="navContainer flex justify-center items-center">
        <div className="searchContainer flex">
          <input type="text" id="search" placeholder="Start exploring..." />
          <label className="cur-p" htmlFor="search"><img src="/src/assets/images/searchIcon.svg" /></label>
        </div>
        <div className="navLinksContainer flex justify-center items-center">
          <NavLink className="nav-links cur-p" to="/">Home</NavLink>
          <NavLink className="nav-links cur-p" to="/about">About</NavLink>
          <NavLink className="nav-links cur-p" to="/contact">Contact Us</NavLink>
          <NavLink className="nav-links cur-p" to="/login">Login</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Header