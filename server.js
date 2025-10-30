const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const authRoute = require('./routes/auth-route');
const productRoute = require('./routes/product-route');
const databaseConnection = require('./db/database-connection');
const saleRoute = require('./routes/sale-route');
const basePath = '/api/v1/';
const auth = 'auth';
const products = 'products';
const sales = 'sales';
class Server {
    constructor() {
        this.app = express();
        this.middlewares();
        this.database();
        this.routes();
    }
    middlewares() {
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }
    async database() {
        await databaseConnection.connect();
        await databaseConnection.getSequelize().sync();
    }
    routes() {
        this.app.use(`${basePath}${auth}`, authRoute);
        this.app.use(`${basePath}${products}`, productRoute);
        this.app.use(`${basePath}${sales}`, saleRoute);
        this.app.use((req, res) => {
            res.status(404).json({
                message: 'Ruta no encontrada o metodo diferente'
            });
        });
    }
    listen(port) {
        this.app.listen(port, () => console.log(`App listening in port ${port}`));
    }
}

module.exports = new Server();
