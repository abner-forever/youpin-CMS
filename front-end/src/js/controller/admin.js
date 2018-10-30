import admin_template from '../views/pages/form.html'

import admin_model from '../models/admin'

import qs from 'querystring'
const init = () => {
    //渲染试图
    render('login')

    bindEvent()
}

const bindEvent = () => {

    //使用事件委托去绑定事件
    $('#form-content').on('click','.switch-btn',function(){
        let _type = $(this).data('type')
        render(_type)
    })
    
    //注册
    $('#form-content').on('submit','#register-form', async function(e){
        e.preventDefault()
        let _params = $(this).serialize()
        let _result = await admin_model.register(qs.parse(_params))

        switch(_result.code){
            case 200: alert('注册成功'); break;
            case 201: alert('用户名已经存在'); break;
        }
    })

    //注册
    $('#form-content').on('submit','#login-form', async function(e){
        e.preventDefault()
        let _params = $(this).serialize()
        let _result = await admin_model.login(qs.parse(_params))

        switch(_result.code){
            case 200: alert('登录成功'); 
                        localStorage.token = _result.data.token
                        window.location.href ='../'
                    break;
            case 201: alert('用户名不经存在'); break;
            case 202: alert('密码错误请重新输入'); break;
        }
    })

}

const render = (type) => {
    var _html = template.render(admin_template, {
        type: type
    })
    $('#form-content').html(_html)
}
export default {
    init
}