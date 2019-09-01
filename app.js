const path = require("path");
const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");

const app = express();

// Ref: song940/kelp-static  
// Branch:  express-static
const serve = require('express-static');



// MODULE IMPORTS
// const template_controller = require('./backend/controllers/template_controller');
const landingRoute = require("./backend/routes/landing.route");
const testingRoute = require("./backend/routes/testing.route");



// Declare Global variables
app.locals.site = "The Living Rosary Devotion";

// Declare variable as view option and available
// to any view
app.set('view options', {
  myvar: 'hello'
});

// const mongoose = require("mongoose");
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

// Move static links to individual routes so that
// Landing page can use 'mdb'
// API can use 'static'
// app.use('public', express.static(path.join(__dirname, "/public")));
// app.use(express.static(path.join(__dirname, "/static")));
app.use(express.static(path.join(__dirname, "/assets")));

// Ref:  song940/kelp-static
// Branch:  express-static
// express-static for serving static files
// app.use(serve(__dirname, '/assets'));
//app.use(serve(__dirname, '/static'));




// Ref: ericf/express-handlebars
var hbs = exphbs.create({
  viewsDir: 'views/pages',
  partialsDir: [
    'views/components/',
    'views/containers/',
    'views/layouts/',
    'views/nav/',
    'views/pages/',
    'views/scripts/',
    'views/testimony_cards/',
    'views/subcontactcomponents',
    'shared/templates/'
  ]
})

// Ref:  exphbs
// Use more than one instance of view engine each with
// own template cache and partial registry
app.engine('handlebars', hbs.engine);

// Ref: exphbs
// Setting view engine will make value the fefault file extension
// for looking up views
app.set('view engine', '.handlebars');

// Ref: http://handlebarsjs.com/precompilation.html
// Ref: ericf/express-handlebars/blob/master/examples/advanced/server.js (github)
// precompile templates to send as strings to client-side


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

// landing page route
app.use('/', landingRoute);

// testing page route
app.use('/testing', testingRoute);

// app.get('/', (req, res, next) => {
//     res.render('home');
// })

// Ref: https://coderwall.com/p/myzvmg/circular-dependencies-in-node-js
// export your data before you require anything else in modules where you use module.exports
module.exports = app;


