// Route -> host:3000/landing
// Branch:  express-static
const serve = require('express-static');
const app = require('../../app');

exports.getLanding = (req, res, next) => {
	res.render('landing', {
		// Declaring a variable local to current view
		name: 'Landing Page',
		tabtitle: 'Living Rosary',
		layout: 'landing.layout.handlebars',
		letters: 'letters'
	});
};
