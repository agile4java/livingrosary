let Promise = global.Promise || require('promise');

const path = require("path");
const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

const landingRoutes = require("./backend/routes/landing_routes");


const app = express();

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
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/static", express.static(path.join(__dirname, 'static')));


// Create 'ExpressHandlebars' instance with a default layout
const hbs = exphbs.create({
  helpers: helpers,
  partialsDir: [
    'shared/templates/',
    'views/partials/'
  ]
});

// Registering 'hbs' created above as view engine
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.engine('handlebars', hbs.engine);

// unchanged from regular code
app.set('view engine', 'handlebars');

// Middleware to expose app's shared templates to the client-side of the app

function exposeTemplates(req, res, next) {
  // Uses the ExpressHandlebars instance to get the precompiled templates
  hbs.getTemplates('shared/templates/', {
    cache: app.enabled('view cache'),
    precompile: true
  }).then(function (templates) {
    // RegExp to remove the ".handlebars" extension from template names
    var extRegex = new RegExp(habs.extname + '$');
    // Create an array of templates exposed via
    // 'res.locals.templates'
    templates = Object.keys(templates).map(function (name) {
      return {
        name: name.replace(extRegex, ''),
        template: templates[name]
      };
    });

    // Expose templates during view rendering
    if (templates.length) {
      res.locals.templates = templates;
    }

    setImmediate(next);
  })
    .catch(next);
}



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

app.use('/', landingRoutes);

app.use('/api', apiRoutes);

// app.get('/', (req, res, next) => {
//     res.render('home');
// })



module.exports = app;
