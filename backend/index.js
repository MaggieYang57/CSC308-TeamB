const env = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
env.config();

const hikeRoute = require("./routes/hike");
const signup = require("./routes/signup");
const login = require("./routes/login");
const save = require("./routes/save");
const review = require('./routes/review')
app.use("/hike", hikeRoute);
app.use("/signup", signup);
app.use("/login", login);
app.use("/save", save);
app.use('/review', review)

const uri = process.env.DB_LINK;
if (!uri) {
  console.log("No DB_LINK environment variable found, please provide one.");
}
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Atlas Connected..");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3001);
