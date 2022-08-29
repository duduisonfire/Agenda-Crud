const Contact = require('../models/contactModel');

exports.index = async (req, res) => {
    if (req.session.user){
        const contact = new Contact(req);

        try {
            const contactList = await contact.findList();
            req.session.contacts = contactList;
            req.session.save(() => {
                return res.render('index.ejs');
            });
        } catch(e) {
            console.log(e);
        }
    } else {
        res.redirect('login');
        return;
    }
}

exports.delete = async (req, res) => {
    const contact = new Contact(req);

    try {
        const deletedContact = await contact.delete(req.params.id);
        const contactList = await contact.findList();
        req.session.contacts = contactList;
        req.session.save(() => {
            return res.redirect('/');
        });
    } catch(e) {
        console.log(e);
    }
};