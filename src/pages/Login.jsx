import React from "react"
import "../assets/css/Login.css"
import { PiEye, PiEyeSlash } from "react-icons/pi"
import { NavLink } from "react-router-dom"

const Login = () => {
  return (
    <section className="loginContainer flex justify-center">
      <div className="formContainer">
        <div className="bg"></div>
        <form className="flex justify-center items-center flex-col">
          <h1>Hello, Again... &#128075;</h1>
          <div className="usernameContainer inputContainers">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="passwordContainer">
            <div className="passwordContainer2 inputContainers">
              <label htmlFor="password">Password</label>
              <input type="text" id="password" />
            </div>
            <PiEyeSlash className="img cur-p" />
          </div>
          <input type="submit" value="Log In" />
          <p>Don't have an account? <NavLink to="/signup">Sign Up</NavLink></p>
        </form>
      </div>
    </section>
  )
}

export default Login