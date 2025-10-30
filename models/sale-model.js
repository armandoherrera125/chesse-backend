const { Model, DataTypes } = require('sequelize');

class Sale extends Model {
    static initModel(sequelize) {
        Sale.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                quantity: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                total: {
                    type: DataTypes.FLOAT,
                    allowNull: false,
                },
                userId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'users',
                        key: 'id',
                    },
                    onDelete: 'CASCADE',
                },
                productId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'products',
                        key: 'id',
                    },
                    onDelete: 'CASCADE',
                },
            },
            {
                sequelize,
                modelName: 'Sale',
                tableName: 'sales',
                timestamps: true,
            }
        );
        return Sale;
    }
}

module.exports = Sale;
