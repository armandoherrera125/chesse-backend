const { check } = require("express-validator");

const getProductValidator = [
    check('limit').isNumeric().withMessage('The limit should be a number').notEmpty().withMessage('The limit is required'),
    check('page').isNumeric().withMessage('The page should be a number').notEmpty().withMessage('The page is required'),
];


const createProductValidator = [
    check('name').notEmpty().withMessage('The name is required').isString().withMessage('The name should be a string'),
    check('type').notEmpty().withMessage('The type is required').isString().withMessage('The type should be a string'),
    check('description').notEmpty().withMessage('The description is required').isString().withMessage('The description should be a string'),
    check('price').notEmpty().withMessage('The price is required').isNumeric().withMessage('The price should be a number'),
    check('unitsAvailable').notEmpty().withMessage('The unitsAvailable is required').isNumeric().withMessage('The unitsAvailable should be a number'),
    check('weight').notEmpty().withMessage('The weight is required').isString().withMessage('The weight should be a string'),
    check('slug').notEmpty().withMessage('The slug is required').isString().withMessage('The slug should be a string'),
];

const editProductValidator = [
    check('id').notEmpty().withMessage('The id is required').isNumeric().withMessage('The id should be a number'),
    check('name').notEmpty().withMessage('The name is required').isString().withMessage('The name should be a string'),
    check('type').notEmpty().withMessage('The type is required').isString().withMessage('The type should be a string'),
    check('description').notEmpty().withMessage('The description is required').isString().withMessage('The description should be a string'),
    check('price').notEmpty().withMessage('The price is required').isNumeric().withMessage('The price should be a number'),
    check('unitsAvailable').notEmpty().withMessage('The unitsAvailable is required').isNumeric().withMessage('The unitsAvailable should be a number'),
    check('weight').notEmpty().withMessage('The weight is required').isString().withMessage('The weight should be a string'),
    check('slug').notEmpty().withMessage('The slug is required').isString().withMessage('The slug should be a string'),
];

const deleteProductValidator = [
    check('id').notEmpty().withMessage('The id is required').isNumeric().withMessage('The id should be a number'),
];


module.exports = {
    getProductValidator,
    createProductValidator,
    editProductValidator,
    deleteProductValidator
};