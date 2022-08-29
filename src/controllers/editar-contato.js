const Contact = require('../models/contactModel');

exports.index = async (req, res) => {
    const contact = new Contact(req);
    if (!req.params.id) return res.redirect('/404');
    const contato = await contact.findId(req.params.id);
    if (!contato) return res.redirect('/404');
    res.render('editarContato.ejs', {contato});
}

exports.edit = async (req, res) => {
    if (!req.params.id) return res.redirect('/404');
    const contact = new Contact(req);
    await contact.edit(req.params.id);

    if (contact.errors.length > 0) {
        req.flash('errors', contact.errors);
        req.session.save(() => {
            return res.redirect(`/editar-contato/${req.params.id}`);
        });
        return;
    }

    req.flash('accountCreateSuccess', 'Contato editado com sucesso.');
    const contactList = await contact.findList();
    req.session.contacts = contactList;
    req.session.save(() => {
        return res.redirect(`/editar-contato/${req.params.id}`);
    });
    return;
};