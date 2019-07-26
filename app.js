const path = require("path");
const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

const landingRoute = require("./backend/routes/landing_route");


const app = express();

// Declare Global variables
app.locals.site = "The Living Rosary";

// Declare variable as view option and available
// to any view
app.set('view options', {
  myvar: 'hello'
});

// mongoose
//   .connect(
//     "mongodb+srv://max:" +
//       process.env.MONGO_ATLAS_PW +
//       "@cluster0-ntrwp.mongodb.net/node-angular"
//   )
//   .then(() => {
//     console.log("Connected to database!");
//   })
//   .catch(() => {
//     console.log("Connection failed!");
//   });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/static")));
app.use(express.static(path.join(__dirname, "/mdb")));


// Use more than one instance of view engine each with
// own template cache and partial registry
app.engine('hbs', exphbs.create());
app.set('view engine', 'handlebars');

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use('/', landingRoute);

// app.get('/', (req, res, next) => {
//     res.render('home');
// })



module.exports = app;
