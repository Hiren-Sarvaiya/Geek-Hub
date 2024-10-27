import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import bodyParser from "body-parser"

dotenv.config()
const app = express()
app.use(cors())
app.use(bodyParser.json())
connectDB()

app.use("/api/auth", authRoutes)

export default app