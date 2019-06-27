const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const port = 5000;
const app = express();
const config = require("config");
const Products = require("./server/routes/api/product");

// Set static Folder:
app.use(express.static(path.join(__dirname, "/frontEnd/dist/frontEnd")));

// Body Parser:
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// DB Config:
const db = config.get("mongoURI");

// Routes:
// Product Routes:
app.use("/api/products", Products);

// Trigger Angular Routes IF Express Routes Fail:
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./frontEnd/dist/frontEnd/index.html"))
  });

// Connect to Mongo:
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true})
    .then(() => console.log("Mongo DB Connected..."))
    .catch(err => console.log(err));

// Run Server/Backend:
app.listen(port, () => console.log(`Server Running On Port: ${port}`));