const jwt = require('jsonwebtoken');

module.exports.tokenCreate = async (data) =>{
    const token = await jwt.sign(data,process.env.SECRET, {expiresIn : '7d'})
    return token
}