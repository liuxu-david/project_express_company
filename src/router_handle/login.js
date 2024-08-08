const jwt = require('jsonwebtoken');

const config = require('../config/index.js');

module.exports.handleLogin = (req, res) => {
    // 生成token字符串
    const payload = { username: req.body.username,password: req.body.password};
    const privateKey = config.jwtSecret;
    const options = { expiresIn: '2h' };
    const tokenStr = jwt.sign(payload,privateKey,options);

    res.send({
        code: 200,
        message: '登录成功',
        data:{
            token: tokenStr
        }
    })
}