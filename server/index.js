import express from "express";
// bodyParser for enabling to send post request
import bodyParser from "body-parser";
import mongoose from "mongoose";
// cors for enabiling cross origin request
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// cors for enabiling cross origin request
app.use(cors());
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Hello to Tarun memories app");
});

// const CONNECTION_URL =
//   "mongodb+srv://tarunMemory:memory123@memory2.eopjw.mongodb.net/TarunMemories?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
