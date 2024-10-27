import mongoose from "mongoose"

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("MongoDB connected successfully!")
  } catch (e) {
    console.error("MongoDB connection error : ", e.message)
    process.exit(1)
  }
}

export default connectDB