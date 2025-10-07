const { Router } = require("express");
const productController = require("../controllers/product-controller");
const { getProductValidator, createProductValidator, editProductValidator, deleteProductValidator } = require("../middlewares/product-validator");
const validationresult = require("../middlewares/validation-result");
const jwtVerificator = require("../middlewares/jwt-verificator");

class ProductRoute {
    constructor() {
        this.router = Router();
        this.routes();
    }
    routes() {
        this.router.get('/', getProductValidator, validationresult, productController.getProduct);
        this.router.post('/', createProductValidator, validationresult, productController.createProduct);
        this.router.put('/:id', editProductValidator, validationresult, productController.editProduct);
        this.router.delete('/:id', deleteProductValidator, validationresult, productController.deleteProduct);
    }
}

module.exports = new ProductRoute().router;