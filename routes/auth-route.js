const { Router } = require("express");
const authController = require("../controllers/auth-controller");
const { loginUserValidator, createUserValidator } = require("../middlewares/user-validator");
const validationresult = require("../middlewares/validation-result");

class AuthRoute {
    constructor() {
        this.router = Router();
        this.routes();
    }
    routes() {
        this.router.post('/login', loginUserValidator, validationresult, authController.login);
        this.router.post('/newuser', createUserValidator, validationresult, authController.createUser);
    }
}

module.exports = new AuthRoute().router;