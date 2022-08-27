const Contact = require('../models/contactModel');
const fs = require('fs');

exports.index = (req, res) => {
    if(req.session.user) {
        return res.render('contato.ejs');
    }
    res.redirect('/');
}

exports.register = async (req, res) => {
    const contact = new Contact(req);
    
    try {
        await contact.register();

        if (contact.errors.length > 0) {
            req.flash('errors', contact.errors);
            req.session.save(() => {
                return res.redirect('/contato');
            });
            return;
        }

        req.flash('accountCreateSuccess', 'Contato cadastrado com sucesso.');
        req.session.save(() => {
            return res.redirect('/contato');
        });
        return;

    } catch(e) {
        console.log(e);
        return res.redirect('/404')
    }
}