const { check } = require("express-validator");

const getProduct = [
    check('limit').isNumeric().withMessage('The limit should be a number').notEmpty().withMessage('The limit is required'),
    check('page').isNumeric().withMessage('The page should be a number').notEmpty().withMessage('The page is required'),

];


module.exports = {
    getProduct
};