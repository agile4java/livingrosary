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
};

exports.navbarTest = (req, res, next) => {
	var navbartoload = req.params.navbartoload;
	var navbartoload2 = req.params.navbartoload2;

	res.render('navbartest', {
		name: 'Navbar Test Page',
		tabtitle: 'Navbar Tester',
		layout: 'landing.layout.handlebars',
		navbartoload: navbartoload,
		navbartoload2: navbartoload2
	});
};
