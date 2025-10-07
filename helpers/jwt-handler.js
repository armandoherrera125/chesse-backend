const jwt = require('jsonwebtoken');

const jwtGenerator = (payload) => {
    return jwt.sign(payload, process.env.JWT_PASS);
}

module.exports = jwtGenerator;