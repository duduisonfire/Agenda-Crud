const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: false},
    email: {type: String, required: false},
    telefone: {type: String, required: false},
    dataDeRegistro: {type: Date, default: Date.now},
    contactUserOwner: {type: String, required: true},
});

const contactModel = mongoose.model('contact', contactSchema);

class Contact {
    constructor(req){
        this.body = {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            telefone: req.body.telefone,
            contactUserOwner: req.session.user.email
        },
        this.errors = [],
        this.contato = null
    }

    async register() {
        if (this.validate() === false) return;
        this.contato = await contactModel.create(this.body);
    }

    validate() {
        this.checkError();
        if (this.errors.length !== 0) {
            return false;
        }

        return true;
    }

    checkError() {
        this.cleanUp();
        if (this.body.email && !validator.isEmail(this.body.email)) {
            this.errors.push('Email invalido.');
        }

        if (!this.body.nome) {
            this.errors.push('É obrigatório cadastrar um nome de contato.')
        }

        if (!this.body.email && !this.body.telefone) {
            this.errors.push('Cadastre ao menos um email ou telefone.');
        }
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
    }
}

module.exports = Contact;