const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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
        const userExistCheck = await this.userExists();
        console.log(test);
        if ((this.validate() === false ) || userExistCheck) return;
        const salt = bcrypt.genSaltSync();
        this.body.password = bcrypt.hashSync(this.body.password, salt);
        this.user = await userModel.create(this.body);
    }

    async login() {
        if (this.errors > 0) return;
        this.user = await userModel.findOne({email: this.body.email});

        if (this.user === null){
            this.errors.push('Usuário não existe.');
            return false;
        }

        if(bcrypt.compareSync(this.body.password, this.user.password)){
            return true;
        } else {
            this.errors.push('Senha incorreta.');
            return false;
        };
    }

    async userExists() {
        const user = await userModel.findOne({email: this.body.email});
        if (user){
            this.errors.push('Usuário já existe.');
            return true;
        };

        return false;
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