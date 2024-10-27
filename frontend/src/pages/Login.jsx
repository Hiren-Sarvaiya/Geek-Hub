import React, { useState, useRef } from "react"
import "../assets/css/Login.css"
import { PiEye, PiEyeSlash } from "react-icons/pi"
import { NavLink } from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const passwordInput = useRef()

  const togglShowPassword = () => {
    setShowPassword(!showPassword)
    if (!showPassword) {
      passwordInput.current.type = "text"
    } else {
      passwordInput.current.type = "password"
    }
  }

  return (
    <section className="loginContainer flex justify-center">
      <div className="formContainer">
        <div className="bg"></div>
        <form className="flex justify-center items-center flex-col">
          <h1>Hello, Again... &#128075;</h1>
          <div className="usernameContainer">
            <label htmlFor="username" className={username ? "usernameActive" : ""}>Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="passwordContainer" onClick={() => passwordInput.current.focus()}>
            <div className="passwordContainer2">
              <label htmlFor="password" className={password ? "passwordActive" : ""}>Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} ref={passwordInput} />
            </div>
            {showPassword ?
              <PiEye className="passImg cur-p" onClick={togglShowPassword} /> :
              <PiEyeSlash className="passImg cur-p" onClick={togglShowPassword} />
            }
          </div>
          <input className="submit-btns cur-p" type="submit" value="Log In" />
          <div className="formFooter">Don't have an account? <NavLink className="links cur-p" to="/signup">Sign Up</NavLink></div>
        </form>
      </div>
    </section>
  )
}

export default Login