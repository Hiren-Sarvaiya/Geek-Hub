import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
	fname: { type: String, required: true },
	lname: { type: String, required: true },
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	email: { type: String, required: true },
	mobNo: { type: Number, required: true }
})

export default mongoose.model("users", userSchema)