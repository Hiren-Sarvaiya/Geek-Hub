import React from "react"
import { NavLink } from "react-router-dom"
import "../assets/css/Footer.css"

const Footer = () => {
  return (
    <footer className="flex justify-center items-center flex-col">
      <div className="socialLinksContainer flex justify-center">
        <NavLink className="footer-links cur-p flex justify-center items-center fb" target="_blank" to="https://www.instagram.com/hiren_sarvaiya_16/"><i className="fab fa-facebook-f"></i></NavLink>
        <NavLink className="footer-links cur-p flex justify-center items-center twitter" target="_blank" to="https://www.instagram.com/hiren_sarvaiya_16/"><i className="fab fa-twitter"></i></NavLink>
        <NavLink className="footer-links cur-p flex justify-center items-center ig" target="_blank" to="https://www.instagram.com/hiren_sarvaiya_16/"><i className="fab fa-instagram"></i></NavLink>
        <NavLink className="footer-links cur-p flex justify-center items-center linkedin" target="_blank" to="https://www.instagram.com/hiren_sarvaiya_16/"><i className="fab fa-linkedin-in"></i></NavLink>
      </div>
      <div className="copyrightSection flex justify-between">
        <div>Hiren Sarvaiya - Creator</div>
        <div>2024 - All rights reserved</div>
      </div>
    </footer>
  )
}

export default Footer