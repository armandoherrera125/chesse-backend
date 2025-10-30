// models/User.js
const { Model, DataTypes } = require("sequelize");

class User extends Model {
    static initModel(sequelize) {
        User.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                    validate: {
                        isEmail: true,
                    },
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                sequelize,
                modelName: "User",
                tableName: "users",
                timestamps: true,
            }
        );

        return User;
    }
}

module.exports = User;
