import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

dotenv.config();
const app = express()

const PORT = process.env.Port || 5000;

app.use(express.json({limit: "50md"}))
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


app.get("/", (req, res) => {
    res.send("Welcome Home 💯💯🎉🎊👍")
})

app.listen(PORT, () => console.log(`Server running at PORT ${PORT}`))