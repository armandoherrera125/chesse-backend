const { Sequelize } = require('sequelize');

class DatabaseConnection {
    constructor() {
        this.sequelize = new Sequelize(
            process.env.DB_NAME,
            process.env.DB_USERNAME,
            process.env.DB_PASSWORD,
            {
                host: process.env.DB_HOST || 'localhost',
                port: process.env.DB_PORT || 5432,
                dialect: 'postgres',
                logging: false,
            }
        );

        require('../models')(this.sequelize);
    }

    async connect() {
        console.log(`Connecting to database: ${process.env.DB_NAME}`);
        try {
            await this.sequelize.authenticate();
            console.log('Connection established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    getSequelize() {
        return this.sequelize;
    }
}

module.exports = new DatabaseConnection();
