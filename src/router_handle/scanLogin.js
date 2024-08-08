const QRCode = require('qrcode')

// 生成二维码接口
module.exports.handleScanLogin = async (req, res)=>{
    QRCode.toDataURL('http://localhost:3000/about', function (err, url) {
        res.send({
            code: 200,
            data:{
                imgUrl: url
            }
        })
      })
    
  
}
// 验证二维码接口
module.exports.handleCheckLogin = async (req, res)=>{
    res.send({
        code: 200,
        message: '验证二维码接口',
    })
}