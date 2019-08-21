// Route -> host:3000/landing
// Branch:  express-static
const serve = require('express-static');


exports.getLanding = (req, res, next) => {

    // app.use(express.static(path.join(__dirname, "/assets/mdb")));

    res.render('landing', {
        // Declaring a variable local to current view
        name: 'Landing Page',
        tabtitle: 'Living Rosary',
        layout: 'landing.layout.handlebars',
        letters: 'letters'
    });
}