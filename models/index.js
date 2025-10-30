const User = require('./user-model');
const Product = require('./product-model');
const Sale = require('./sale-model');

module.exports = (sequelize) => {
    User.initModel(sequelize);
    Product.initModel(sequelize);
    Sale.initModel(sequelize);

    User.hasMany(Sale, { foreignKey: 'userId', as: 'sales' });
    Product.hasMany(Sale, { foreignKey: 'productId', as: 'sales' });
    Sale.belongsTo(User, { foreignKey: 'userId', as: 'user' });
    Sale.belongsTo(Product, { foreignKey: 'productId', as: 'product' });

    console.log('Models and associations initialized successfully');
};
