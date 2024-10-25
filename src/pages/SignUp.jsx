import React, { useState, useRef } from "react"
import "../assets/css/SignUp.css"
import { PiEye, PiEyeSlash } from "react-icons/pi"
import { NavLink } from "react-router-dom"

const SignUp = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [pass1, setPass1] = useState("")
  const [pass2, setPass2] = useState("")
  const [showPass1, setShowPass1] = useState(false)
  const [showPass2, setShowPass2] = useState(false)
  const pass1Input = useRef()
  const pass2Input = useRef()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [mobNo, setMobNo] = useState("")

  const togglShowPass1 = () => {
    setShowPass1(!showPass1)
    if (!showPass1) {
      pass1Input.current.type = "text"
    } else {
      pass1Input.current.type = "password"
    }
  }

  const togglShowPass2 = () => {
    setShowPass2(!showPass2)
    if (!showPass2) {
      pass2Input.current.type = "text"
    } else {
      pass2Input.current.type = "password"
    }
  }

  return (
    <section className="signupContainer flex justify-center">
      <form className="flex justify-center items-center flex-col">
        <h1>Sign Up</h1>
        <div className="nameContainer flex justify-between">
          <div className="fnameContainer">
            <label htmlFor="fname" className={fname ? "inputActive" : ""}>First Name</label>
            <input className="outlineGreen" type="text" id="fname" value={fname} onChange={(e) => setFname(e.target.value)} />
          </div>
          <div className="lnameContainer">
            <label htmlFor="fname" className={lname ? "inputActive" : ""}>Last Name</label>
            <input className="outlineGreen" type="text" id="fname" value={lname} onChange={(e) => setLname(e.target.value)} />
          </div>
        </div>
        <div className="passwordContainer3 flex justify-between">
          <div className="passwordContainer4">
            <div className="passwordContainer5">
              <label htmlFor="pass1" className={pass1 ? "inputActive" : ""}>Password</label>
              <input type="password" id="pass1" value={pass1} onChange={(e) => setPass1(e.target.value)} ref={pass1Input} />
            </div>
            {showPass1 ?
              <PiEye className="passImg cur-p" onClick={togglShowPass1} /> :
              <PiEyeSlash className="passImg cur-p" onClick={togglShowPass1} />
            }
          </div>
          <div className="passwordContainer6">
            <div className="passwordContainer7">
              <label htmlFor="pass2" className={pass2 ? "inputActive" : ""}>Confirm Password</label>
              <input type="password" id="pass2" value={pass2} onChange={(e) => setPass2(e.target.value)} ref={pass2Input} />
            </div>
            {showPass2 ?
              <PiEye className="passImg cur-p" onClick={togglShowPass2} /> :
              <PiEyeSlash className="passImg cur-p" onClick={togglShowPass2} />
            }
          </div>
        </div>
        <div className="usernameContainer2">
          <label htmlFor="username" className={username ? "inputActive" : ""}>Username</label>
          <input className="outlineGreen" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="emailContainer">
          <label htmlFor="email" className={email ? "inputActive" : ""}>Email ID</label>
          <input className="outlineGreen" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mobNoContainer">
          <label htmlFor="mobNo" className={mobNo ? "inputActive" : ""}>Mobile No</label>
          <input className="outlineGreen" type="number" id="mobNo" value={mobNo} onChange={(e) => setMobNo(e.target.value)} />
        </div>
        <input id="submit" className="submit-btns cur-p" type="submit" value="Sign UP" />
        <div>Already have an account? <NavLink className="links cur-p" to="/login">Login</NavLink></div>
      </form>
    </section>
  )
}

export default SignUp