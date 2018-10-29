var express = require('express')
var router = express.Router()

var admin_controller = require('../controller/admin')

const resApplicationJson = (req,res,next)=>{
    res.set('content-type','appliction/json; charset=utf8')
    next()
}
router.use(resApplicationJson)
router.post('/register',admin_controller.register)
router.post('/login',admin_controller.login)

 module.exports = router