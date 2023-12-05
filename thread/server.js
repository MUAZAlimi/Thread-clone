const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoutes.js");
const postRoute = require("./routes/postRoutes.js");
const { v2 } = require("cloudinary");

dotenv.config();

const app = express();

const PORT = process.env.Port || 5000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.get("/", (req, res) => {
  res.send("Welcome Home 🏠🏠🏡🏡");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running at PORT ${PORT}`));
  })
  .catch((err) => console.log(err));
