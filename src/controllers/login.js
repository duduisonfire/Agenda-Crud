const Account = require('../models/accountModel');

exports.index = (req, res) => {
    res.render('login.ejs');
};

exports.register = async (req, res) => {
    const account = new Account(req.body);
    try {
        await account.register();
    } catch(e) {
        console.log(e);
        return res.redirect('/404')
    }
    if (account.errors > 0) {
        req.flash('errors', account.errors);
        req.session.save(() => {
            return res.redirect('/login');
        });
    }
    req.flash('accountCreateSuccess', 'Conta criada com sucesso.');
    req.session.save(() => {
        return res.redirect('/login');
    });
    return;
};