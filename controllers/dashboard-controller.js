const express = require('express');
const Sale = require('../models/sale-model');
const Product = require('../models/product-model');

class DashBoardControler {
    async getDashBoard(req = express.request, res = express.response) {
        try {
            const { count: transactions, rows: salesWithoutFormat } = await Sale.findAndCountAll({
                include: [
                    { model: Product, as: 'product' },
                ]
            });
            const products = await Product.findAll();
            let inventory = 0;
            if (products) {
                products.forEach(item => {
                    inventory += item.unitsAvailable;
                });
            }
            inventory = Number(inventory.toFixed(2))
            let revenue = 0;
            if (salesWithoutFormat) {
                salesWithoutFormat.forEach(item => {
                    revenue += item.total;
                });
            }
            revenue = Number(revenue.toFixed(2))
            const lowStockALertsList = products.filter((item) => item.unitsAvailable <= 10);
            console.log(lowStockALertsList)
            const lowStockALertsCounter = lowStockALertsList.length;
            const result = {
                revenue,
                transactions,
                inventory,
                lowStockALertsList,
                lowStockALertsCounter
            };
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({
                msg: 'Internal server error',
                error: error.message
            });
        }
    }
}

module.exports = new DashBoardControler();