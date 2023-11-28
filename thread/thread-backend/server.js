import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import mongoose from "mongoose";

dotenv.config();

const app = express()

const PORT = process.env.Port || 5000;

app.use(express.json({limit: "50md"}))
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


app.get("/", (req, res) => {
    res.send("Welcome Home 🏠🏠🏡🏡")
})


mongoose.connect(process.env.MONGO_URI)
.then(() => {
 app.listen(PORT, () => console.log(`Server running at PORT ${PORT}`))

}).catch((err) => console.log(err))