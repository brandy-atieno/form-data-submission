const express = require("express");
// declare express app
const app = express();
//define port
const port = process|| 4000;
//mongoose
const mongoose = require("mongoose");
//import routes
const formRoutes = require("./routes/formRoutes.js");
const pagesRoutes = require("./routes/pagesRoutes.js");

// receive req from body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// read public
app.use(express.static("public"));
// set view engine
app.set("view engine", "ejs");

//routes
app.use(formRoutes);
app.use(pagesRoutes);
//connection
const CONNECTION_URI =process.env.CONNECTION_URI
mongoose.connect(CONNECTION_URI)
  .then((result) => {
    console.log("Database is connected!");
  })
  .catch((err) => {
    console.log(err);
  });
// run app
app.listen(port, () => {
  console.log(`Server running at port:http://localhost:${port}`);
});
