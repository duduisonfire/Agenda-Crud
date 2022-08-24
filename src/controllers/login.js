exports.index = (req, res) => {
    res.render('login.ejs');
};

exports.register = (req, res) => {
    res.send('olá');
};