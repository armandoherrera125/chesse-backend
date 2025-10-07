const express = require('express');
const Product = require('../models/product-model');

class ProductController {
    async getProduct(req = express.request, res = express.response) {
        const { limit = 10, page = 1 } = req.query;
        const offset = (page - 1) * limit;
        try {
            const products = await Product.findAndCountAll({
                limit,
                offset
            });
            const pages = Math.ceil(products.count / limit);
            res.status(200).json({
                count: products.count,
                pages,
                productList: products.rows
            });
        } catch (error) {
            res.status(500).json({
                msg: 'Internal server error',
                error: error.message
            });
        }
    }
    async createProduct(req = express.request, res = express.response) {
        const { name, type, description, price, unitsAvailable, weight, image, slug,
        } = req.body;
        try {
            const product = await Product.create({
                name, type, description, price, unitsAvailable, weight, image, slug,
            });
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({
                msg: 'Internal server error',
                error: error.message
            });
        }
    }


    async editProduct(req = express.request, res = express.response) {
        const { id } = req.params;
        const { name, type, description, price, unitsAvailable, weight, image, slug,
        } = req.body;
        try {
            const productFound = await Product.findByPk(id);
            if (!productFound) res.status(400).json({
                msg: `Product with id ${id} not found`
            });
            const product = await productFound.update({
                name, type, description, price, unitsAvailable, weight, country, image, slug
            });
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({
                msg: 'Internal server error',
                error: error.message
            });
        }
    }


    async deleteProduct(req = express.request, res = express.response) {
        const { id } = req.params;
        try {
            const productFound = await Product.findByPk(id);
            if (!productFound) res.status(400).json({
                msg: `Product with id ${id} not found`
            });
            const product = await productFound.destroy();
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({
                msg: 'Internal server error',
                error: error.message
            });
        }
    }
}
module.exports = new ProductController();