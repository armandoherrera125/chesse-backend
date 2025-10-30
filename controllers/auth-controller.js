const express = require('express');
const User = require('../models/user-model');
const { passwordGeneratorBcrypt, passwordCheckBcrypt } = require('../helpers/bcrypt-handler');
const jwtGenerator = require('../helpers/jwt-handler');

class AuthController {
    async login(req = express.request, res = express.response) {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({
                where: {
                    email
                }
            });
            if (!user) return res.status(400).json({
                msg: `Email: ${email} is not registered`
            });
            if (! await passwordCheckBcrypt(password, user.password)) return res.status(400).json({
                msg: 'User or password incorrect'
            });
            const token = jwtGenerator({
                email,
                name: user.name
            });
            res.status(201).json({
                user: {
                    email: user.email,
                    displayName: user.name,
                    uid: user.id
                },
                token
            });
        } catch (error) {
            res.status(500).json({
                msg: 'Internal server error',
                error: error.message
            });
        }
    }


    async createUser(req = express.request, res = express.response) {
        const { email, password, name } = req.body;
        try {
            const userFound = await User.findOne({
                where: {
                    email
                }
            });
            if (userFound) return res.status(400).json({
                msg: `Email ${email} already in use`
            });
            const hashPassword = await passwordGeneratorBcrypt(password);
            const token = jwtGenerator({
                email,
                name
            });
            const user = await User.create({
                email,
                password: hashPassword,
                name
            });
            res.status(201).json({
                user: {
                    email: user.email,
                    displayName: user.name,
                    uid: user.id
                },
                token
            });
        } catch (error) {
            res.status(500).json({
                msg: 'Internal server error',
                error: error.message
            });
        }
    }
}

module.exports = new AuthController();