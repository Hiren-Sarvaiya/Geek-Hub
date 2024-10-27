import User from "../models/User.js";
import bcrypt from "bcryptjs"

export const register = async (req, res) => {
  const { fname, lname, username, pass1, email, mobNo } = req.body
  try {
    console.log("body : ", req.body)
    const hashedPassword = await bcrypt.hash(pass1, 10)
    const newUser = new User({ fname, lname, username, password: hashedPassword, email, mobNo })
    await newUser.save()
    res.status(201).json({ message: "User registered successfully" })
  } catch (e) {
    console.log("register error : ", e)
    res.status(500).json({ message: "Error registering user" })
  }
}