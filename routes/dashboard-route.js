const { Router } = require("express");
const dashboardController = require("../controllers/dashboard-controller");

class DashBoardRoute {
    constructor() {
        this.router = Router();
        this.routes();
    }
    routes() {
        this.router.get('/', dashboardController.getDashBoard);
    }
}

module.exports = new DashBoardRoute().router;