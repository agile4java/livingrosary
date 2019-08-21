// Route -> host:3000/testing
// Branch:  express-static
const serve = require('express-static');


exports.getTesting = (req, res, next) => {

  // app.use(express.static(path.join(__dirname, "/assets/mdb")));

  res.render('testing', {
    // Declaring a variable local to current view
    name: 'Landing Page',
    tabtitle: 'Living Rosary',
    layout: 'testing.layout.handlebars',
    letters: 'letters'
  });
}