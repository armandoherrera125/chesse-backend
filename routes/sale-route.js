const { Router } = require("express");
const saleController = require("../controllers/sale-controller");

class SaleRoute {
    constructor() {
        this.router = Router();
        this.routes();
    }
    routes() {
        this.router.get('/', saleController.getSales);
        this.router.post('/', saleController.createSale);
    }
}

module.exports = new SaleRoute().router;