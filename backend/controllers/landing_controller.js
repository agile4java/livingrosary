// Route -> host:3000/landing
exports.getLanding = (req, res, next) => {
    res.render('landing', {
        layout: 'landinglayout'
    });
}