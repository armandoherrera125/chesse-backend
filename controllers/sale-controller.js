const express = require('express');
const Sale = require('../models/sale-model');
const User = require('../models/user-model');
const Product = require('../models/product-model');

class SaleController {


    async getSales(req = express.request, res = express.response) {
        try {
            const salesWithoutFormat = await Sale.findAll({
                include: [
                    { model: User, as: 'user' },
                    { model: Product, as: 'product' },
                ]
            });
            const sales = salesWithoutFormat.map((item) => ({
                id: item.id,
                quantity: item.quantity,
                total: item.total,
                product: item.product.name,
                date: new Date(item.createdAt).toISOString().split('T')[0]
            }));
            res.status(200).json(sales);
        } catch (error) {
            res.status(500).json({
                msg: 'Internal server error',
                error: error.message
            });
        }
    }

    async createSale(req = express.request, res = express.response) {
        const { sales } = req.body;
        if (!sales) return res.status(400).json({
            msg: 'The sales are required'
        });
        let sale;
        try {
            if (sales.length === 1) {
                sale = await Sale.create({
                    quantity: sales[0].quantity,
                    total: sales[0].quantity,
                    userId: sales[0].userId,
                    productId: sales[0].productId
                });
                return res.status(201).json(sale);
            } else {
                const salesList = sales.map((item) => item);
                sale = await Sale.bulkCreate(salesList);
                return res.status(201).json(sale);
            }

        } catch (error) {
            res.status(500).json({
                msg: 'Internal server error',
                error: error.message
            });
        }

    }

}

module.exports = new SaleController();