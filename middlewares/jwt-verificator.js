const express = require('express');
const jwt = require('jsonwebtoken');

const jwtVerificator = (req = express.request, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({
        msg: 'auth-token was not provided'
    });
    const token = authorization.split(' ')[1];
    try {
        jwt.verify(token, process.env.JWT_PASS);
        next();
    } catch (error) {
        res.status(401).json({
            msg: 'auth-token is not correct'
        });
    }
};

module.exports = jwtVerificator;