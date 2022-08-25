const Account = require('../models/accountModel');

exports.index = (req, res) => {
    res.render('login.ejs');
};

exports.register = async (req, res) => {
    try {
        const account = new Account(req.body);
        await account.register();
        if (account.errors !== 0) {
            req.flash('errors', account.errors);
            req.session.save(() => {
                return res.redirect('/login');
            });
            return;
        }
    } catch(e) {
        console.log(e);
        res.redirect('/404')
    }
};