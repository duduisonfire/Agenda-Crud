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
            //return res.redirect(`/contato/${contact.contato._id}`)
        });
        return;

    } catch(e) {
        console.log(e);
        return res.redirect('/404')
    }
}

exports.edit = async (req, res) => {
    const contact = new Contact(req);
    if (!req.params.id) return res.redirect('/404');
    const contato = await contact.findId(req.params.id);
    if (!contato) return res.redirect('/404');
    res.render('editarContato.ejs', {contato});
};