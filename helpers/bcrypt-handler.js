const bcrypt = require('bcrypt');

const passwordGeneratorBcrypt = async (userPass) => {
    return await bcrypt.hash(userPass, 10);
}

const passwordCheckBcrypt = async (userPass, dbPass) => {
    return await bcrypt.compare(userPass, dbPass);
}

module.exports = {
    passwordGeneratorBcrypt,
    passwordCheckBcrypt
};
