const express = require('express');
const cors = require('cors')


const { handleScanLogin,handleCheckLogin } = require('./router_handle/scanLogin.js');
const { handleLogin } = require('./router_handle/login.js');
const config = require('./config/index.js')

const app = express();
app.use(cors());




app.post('/login', handleLogin); // 登录
app.get('/scan/login', handleScanLogin); // 扫码登录
app.post('/check/login', handleCheckLogin) //验证扫码登录

const port = config.port;
console.log(config);

app.listen(port, () => {
    console.log(`服务器启动啦,在http://localhost:${port}`);
})