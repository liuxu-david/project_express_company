require('dotenv').config()
module.exports = {
    port: process.env.PORT || 3000,
    jwtSecret: {
        secret: process.env.JWT_SECRET || 'david_secret'
    }
}