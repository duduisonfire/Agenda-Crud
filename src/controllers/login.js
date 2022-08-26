const Account = require('../models/accountModel');

exports.index = (req, res) => {
    if(req.session.user) {
        return res.redirect('/');
    }
    res.render('login.ejs');
};

exports.login = async (req, res) => {
    const login = new Account(req.body);
    try {
        const loginCheck = await login.login();
        if (loginCheck === false) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                return res.redirect('/login');
            });
            return;
        }

        req.session.user = login.user;
        req.session.save(() => {
            return res.redirect('/');
        });

    } catch(e) {
        console.log(e);
    }
}

exports.logout = async (req, res) => {
    req.session.destroy();
    return res.redirect('/');
};

exports.register = async (req, res) => {
    const account = new Account(req.body);
    
    try {
        await account.register();

        if (account.errors.length > 0) {
            req.flash('errors', account.errors);
            req.session.save(() => {
                return res.redirect('/login');
            });
            return;
        }

        req.flash('accountCreateSuccess', 'Conta criada com sucesso.');
        req.session.save(() => {
            return res.redirect('/login');
        });
        return;

    } catch(e) {
        console.log(e);
        return res.redirect('/404')
    }
};