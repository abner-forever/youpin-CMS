var PATH = require('path')
var multer = require('multer')

var storage = multer.diskStorage({
    //存储位置
    destination: function (req, res, cb) {
        cb(null, PATH.resolve(__dirname, '../public/uploads/shopImg'))
    },
    filename: function (req, file, cb) {
        let _originalName = file.originalname //原名
        let _extName = PATH.extname(_originalName) //后缀名
        let _baseName = PATH.basename(_originalName, _extName) //文件名
        let _filename = _baseName + '_' + Date.now() + _extName

        req.body.shopImg = '/uploads/shopImg/' + _filename
        cb(null, _filename)
    }
})

//过滤文件类型
function fileFilter(req, file, cb) {
    console.log(file,19);
    
    let _flag = file.mimetype.startsWith('image')
    cb(_flag ? null : new Error('图片格式不正确'), _flag)
}
var upload = multer({storage, fileFilter }).single('shopImg')

const fileUpload = function (req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            res.set('content-type', 'application/json;charset=utf8')
            res.render('shoplist', {
                code: 501,
                data: JSON.stringify({
                    msg: '图片格式不正确'
                })
            })
        } else {
            //ok
            next()
        }
    })
}

module.exports = fileUpload