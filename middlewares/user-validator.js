const { check } = require("express-validator");

const loginUserValidator = [
    check('email').isEmail().withMessage('The email should have the valid structure').notEmpty().withMessage('The email is required'),
    check('password').isString().withMessage('The password should be a string').notEmpty().withMessage('The password is required'),
];
const createUserValidator = [
    check('name').isString().withMessage('The name should be string').notEmpty().withMessage('The name is required'),
    check('email').isEmail().withMessage('The email should have the valid structure').notEmpty().withMessage('The email is required'),
    check('password').isString().withMessage('The password should be a string').notEmpty().withMessage('The password is required'),
];
module.exports = {
    loginUserValidator,
    createUserValidator
};