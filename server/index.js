import express from "express";
// bodyParser for enabling to send post request
import bodyParser from "body-parser";
import mongoose from "mongoose";
// cors for enabiling cross origin request
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// cors for enabiling cross origin request
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://memories:memories143@cluster0.pvmuu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.Promise = global.Promise;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
