// Route -> host:3000/landing
exports.getLanding = (req, res, next) => {
    res.render('landing', {
        title: 'Landing',
        // Override default layout
        layout: 'landinglayout',
        // Compile partials
        partials: Promise.resolve({
            livingrosarydetails: hbs.handlebars.compile()
        })
    });
}