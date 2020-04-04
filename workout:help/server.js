
// require E M MO

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 3000;

// call express
const app = express();


// use express 
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// connect mongoose
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// set routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});