const { Router } = require("express");
const productController = require("../controllers/product-controller");

class ProductRoute {
    constructor() {
        this.router = Router();
        this.routes();
    }
    routes() {
        this.router.get('/', productController.getProduct);
        this.router.post('/', productController.createProduct);
        this.router.put('/:id', productController.editProduct);
        this.router.delete('/:id', productController.deleteProduct);
    }
}

module.exports = new ProductRoute().router;