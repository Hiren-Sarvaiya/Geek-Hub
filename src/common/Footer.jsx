import React from "react"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="px-4 py-2 bg-[#383FEF] flex justify-center items-center flex-col">
      <div className="socialLinksContainer w-full flex justify-center gap-4 border-b-2 p-4">
        <NavLink className="h-8 w-8 flex justify-center items-center bg-black p-5 rounded-full transition-all hover:text-[#1f7bf2] hover:bg-white" target="_blank" to="https://www.instagram.com/hiren_sarvaiya_16/"><i className="fab fa-facebook-f"></i></NavLink>
        <NavLink className="h-8 w-8 flex justify-center items-center bg-black p-5 rounded-full transition-all hover:text-[#08a5f3] hover:bg-white" target="_blank" to="https://www.instagram.com/hiren_sarvaiya_16/"><i className="fab fa-twitter"></i></NavLink>
        <NavLink className="h-8 w-8 flex justify-center items-center bg-black p-5 rounded-full transition-all hover:text-[#d73685] hover:bg-white" target="_blank" to="https://www.instagram.com/hiren_sarvaiya_16/"><i className="fab fa-instagram"></i></NavLink>
        <NavLink className="h-8 w-8 flex justify-center items-center bg-black p-5 rounded-full transition-all hover:text-[#087bb9] hover:bg-white" target="_blank" to="https://www.instagram.com/hiren_sarvaiya_16/"><i className="fab fa-linkedin-in"></i></NavLink>
      </div>
      <div className="copyrightSection w-full py-4 flex justify-between">
        <div>Hiren Sarvaiya - Creator</div>
        <div>2024 - All rights reserved</div>
      </div>
    </footer>
  )
}

export default Footer