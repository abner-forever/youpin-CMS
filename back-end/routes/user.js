var express = require('express')
var router = express.Router()

var auth = require('../middleware/auth')
var user_controller = require('../controller/user')

const resApplicationJson = (req,res,next)=>{
    res.set('content-type','appliction/json; charset=utf8')
    next()
}
router.use(resApplicationJson)
router.get('/isLogin',auth.userLoginAuth, user_controller.isLogin)
router.get('/info',auth.userLoginAuth, user_controller.info)

 module.exports = router