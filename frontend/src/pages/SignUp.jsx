import React, { useState, useRef } from "react"
import "../assets/css/SignUp.css"
import { PiEye, PiEyeSlash } from "react-icons/pi"
import { NavLink } from "react-router-dom"
import { useForm } from "react-hook-form";

const SignUp = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [pass1, setPass1] = useState("")
  const [pass2, setPass2] = useState("")
  const [showPass1, setShowPass1] = useState(false)
  const [showPass2, setShowPass2] = useState(false)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [mobNo, setMobNo] = useState("")

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    await delay(1)
    let temp = await fetch("http://localhost:5000/api/auth/register", { "method": "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
    let res = await temp.text()
    console.log(data, res)
  }

  return (
    <section className="signupContainer flex justify-center">
      <div className="signupFormContainer">
        <div className="signupBg"></div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center flex-col">
          <h1>Sign Up</h1>
          <div className="nameContainer flex justify-between">
            <div className="fnameContainer">
              <label htmlFor="fname" className={fname ? "inputActive" : ""}>First Name</label>
              <input {...register("fname", { required: { value: true, message: "First name is empty!" }, minLength: { value: 4, message: "Minimum length is 4" }, maxLength: { value: 16, message: "Maximum length is 16" } })} className="outlineGreen" type="text" id="fname" value={fname} onChange={(e) => setFname(e.target.value)} />
            </div>
            <div className="lnameContainer">
              <label htmlFor="lname" className={lname ? "inputActive" : ""}>Last Name</label>
              <input {...register("lname", { required: { value: true, message: "Last name is empty!" }, minLength: { value: 4, message: "Minimum length is 4" }, maxLength: { value: 16, message: "Maximum length is 16" } })} className="outlineGreen" type="text" id="lname" value={lname} onChange={(e) => setLname(e.target.value)} />
            </div>
          </div>
          <div className="usernameContainer2">
            <label htmlFor="username" className={username ? "inputActive" : ""}>Username</label>
            <input {...register("username", { required: { value: true, message: "Username is empty!" }, minLength: { value: 4, message: "Minimum length is 4" }, maxLength: { value: 32, message: "Maximum length is 32" }, pattern: { value: /^[A-Za-z0-9_-]+$/, message: "Username can use only alphanumeric characters and  _ and -" } })} className="outlineGreen" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="passwordContainer3 flex justify-between">
            <div className="passwordContainer4">
              <div className="passwordContainer5">
                <label htmlFor="pass1" className={pass1 ? "inputActive" : ""}>Password</label>
                <input {...register("pass1", { required: { value: true, message: "Password is empty1!" }, minLength: { value: 8, message: "Minimum length is 8" }, maxLength: { value: 32, message: "Maximum length is 32" }, pattern: { value: /^(?=.*[@#$^&_-])[A-Za-z0-9@#$^&_-]+$/, message: "Password must be alphanumeric and include one special character: @, #, $, ^, &, or -" } })} type={showPass1 ? "text" : "password"} id="pass1" value={pass1} onChange={(e) => setPass1(e.target.value)} />
              </div>
              {showPass1 ?
                <PiEye className="passImg cur-p" onClick={() => setShowPass1(!showPass1)} /> :
                <PiEyeSlash className="passImg cur-p" onClick={() => setShowPass1(!showPass1)} />
              }
            </div>
            <div className="passwordContainer6">
              <div className="passwordContainer7">
                <label htmlFor="pass2" className={pass2 ? "inputActive" : ""}>Confirm Password</label>
                <input {...register("pass2", { required: { value: true, message: "Password is empty2!" }, validate: value => value === watch("pass1") || "Passwords do not match" })} type={showPass2 ? "text" : "password"} id="pass2" value={pass2} onChange={(e) => setPass2(e.target.value)} />
              </div>
              {showPass2 ?
                <PiEye className="passImg cur-p" onClick={() => setShowPass2(!showPass2)} /> :
                <PiEyeSlash className="passImg cur-p" onClick={() => setShowPass2(!showPass2)} />
              }
            </div>
          </div>
          {errors.pass1 && <span className="error">{errors.pass1.message}</span>}
          {errors.pass2 && <span className="error">{errors.pass2.message}</span>}
          <div className="emailContainer">
            <label htmlFor="email" className={email ? "inputActive" : ""}>Email ID</label>
            <input {...register("email", { required: { value: true, message: "Email ID is empty!" } })} className="outlineGreen" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mobNoContainer">
            <label htmlFor="mobNo" className={mobNo ? "inputActive" : ""}>Mobile No</label>
            <input {...register("mobNo", { required: { value: true, message: "Mobile no is empty!" }, min: { value: 1000000000, message: "Invalid Mobile No" }, maxLength: { value: 9999999999, message: "Invalid Mobile No" } })} className="outlineGreen" type="number" id="mobNo" value={mobNo} onChange={(e) => setMobNo(e.target.value)} />
          </div>
          <input disabled={isSubmitting} id="submit" className="submit-btns cur-p" type="submit" value="Sign UP" />
          <div className="formFooter">Already have an account? <NavLink className="links cur-p" to="/login">Login</NavLink></div>
        </form>
      </div>
    </section>
  )
}

export default SignUp