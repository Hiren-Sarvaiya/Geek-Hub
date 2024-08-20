import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="p-4">
      <div className="logo text-5xl leading-none tracking-wider text-center">Geek Hub</div>
      <nav className="p-2 border-b-2">
        <div className="flex justify-between items-center text-xl">
          <div className="navLinksContainer flex justify-center items-center gap-4">
            <NavLink className="transition-all duration-100 ease-in-out hover:border-b-2 active:border-none" to="/">Home</NavLink>
            <NavLink className="transition-all duration-100 ease-in-out hover:border-b-2 active:border-none" to="/about">About</NavLink>
            <NavLink className="transition-all duration-100 ease-in-out hover:border-b-2 active:border-none" to="/contact">Contact Us</NavLink>
            <NavLink className="transition-all duration-100 ease-in-out hover:border-b-2 active:border-none" to="/login">Login</NavLink>
            <NavLink className="transition-all duration-100 ease-in-out hover:border-b-2 active:border-none" to="/signup">Sign Up</NavLink>
          </div>
          <div className="searchContainer p-2 flex items-center transition-all duration-100 ease-in-out border-b-2 border-transparent focus-within:border-white">
            <input className="outline-none bg-transparent" type="text" id="search" placeholder="Start exploring..." />
            <label className="cursor-pointer" htmlFor="search"><img src="/src/assets/images/searchIcon.svg" /></label>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header