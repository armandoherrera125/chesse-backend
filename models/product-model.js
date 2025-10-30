// models/Product.js
const { Model, DataTypes } = require("sequelize");

class Product extends Model {
    static initModel(sequelize) {
        Product.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                type: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                description: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                price: {
                    type: DataTypes.FLOAT,
                    allowNull: false,
                },
                unitsAvailable: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                weight: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                image: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                slug: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                },
            },
            {
                sequelize,
                modelName: "Product",
                tableName: "products",
                timestamps: true,
            }
        );

        return Product;
    }
}

module.exports = Product;
