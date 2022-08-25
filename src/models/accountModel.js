const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

const userModel = mongoose.model('user', userSchema);

class user {
    constructor(body){
        this.body = {
            email: body.email,
            password: body.password
        };
        this.errors = [];
        this.user = null;
    }

    async register() {
        if (this.validate() === false) return;
        try {
            this.user = await userModel.create(this.body);
        } catch(e) {
            console.log(e)
        }
    }

    validate() {
        this.checkError();
        if (this.errors != 0) {
            return false;
        }

        return true;
    }

    checkError() {
        this.cleanUp();
        if (!validator.isEmail(this.body.email)) {
            this.errors.push('Email invalido.');
        }

        if (this.body.password.length < 3 || this.body.password.length >= 50) {
            this.errors.push("A senha precisa ter entre 3 e 50 caracteres.");
        }
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
    }
};

module.exports = user;