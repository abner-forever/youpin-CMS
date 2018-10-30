//引入样式
import '../css/app.scss'

//引入路由
import router from './router'

const body_template = require('./views/body.html')

import { userLoginAuth } from './utils/auth'

import render_userinfo from './controller/user'




//登录拦截验证

userLoginAuth(()=>{
    // 渲染整体内容结构
    $('#wrapper').html(body_template)
    //启动路由
    router.init()

    render_userinfo.getuserInfo()
},()=>{
    window.location.href= '/pages/admin.html'
})


console.log('app.js');
