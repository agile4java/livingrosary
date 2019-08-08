// Route -> host:3000/landing

exports.getLanding = (req, res, next) => {

    res.render('landing', {
        // Declaring a variable local to current view
        name: 'Landing Page',
        layout: 'landinglayout',
        letters: 'letters'
    });
}