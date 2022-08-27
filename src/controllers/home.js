exports.index = (req, res) => {
    if (req.session.user){
        res.render('index.ejs');
        return;
    } else {
        res.redirect('login');
        return;
    }
}