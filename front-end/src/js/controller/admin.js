import admin_template from '../views/pages/form.html'

import admin_model from '../models/admin'

import {
    errTip
} from '../utils/toast'

import qs from 'querystring'
const init = () => {
    //渲染试图
    render('login')

    bindEvent()
}

const bindEvent = () => {

    //使用事件委托去绑定事件
    $('#form-content').on('click', '.switch-btn', function () {
        let _type = $(this).data('type')
        render(_type)
    })

    //注册
    $('#form-content').on('submit', '#register-form', async function (e) {
        e.preventDefault()
        //前端验证

        let uName = $("#form-content .username").val();
        let uPwd = $("#form-content .password").val();
        let cPwd = $("#form-content .checkpassword").val();
        let email = $("#form-content .email").val();

        if ($.trim(uName) == "") {
            errTip("请输入账号")
            return false;
            // 
        } else if (!/^1[34578]\d{9}$/.test(uName)) { //邮箱手机号验证
            errTip("账号格式有误")
            return false;
        } else {
            $("#form-content .username").removeClass("error")
            $("#form-content .err-tip").hide();
        }

        if (uPwd == "") {
            errTip("密码不能为空")
            return false;
        } else if (!/\d{6,9}$/.test(uPwd)) {
            errTip("密码太简单")
            return false;
        } else if (uPwd !== cPwd) {
            errTip("两次密码不相同")
            return false;
        }

        if (email == "") {
            errTip("邮箱不能为空")
            return false;
        } else if (!/^[^@\s\?]+@[^@\s\?]+(\.[^@\s\?]+)+$/.test(email)) {
            errTip("邮箱不能为空")
        } else {
            $("#form-content .username").removeClass("error")
            $("#form-content .err-tip").hide();
            //验证成功后 拿到所有数据传入后台
            let _params = $(this).serialize()
            let _result = await admin_model.register(qs.parse(_params))
            switch (_result.code) {
                case 200:
                    showLoading({
                        title: "注册成功",
                        mask: true,
                        success: function (res) {
                            console.warn(JSON.stringify(res))
                        }
                    });
                    // hideLoading() //为关闭showLoading弹框
                    setTimeout(function () {
                        hideLoading()
                    }, 8000);
                    break;
                case 201:
                    errTip("用户名已经存在")
                    break;
            }
        }
    })

    //登录
    $('#form-content').on('submit', '#login-form', async function (e) {
        e.preventDefault()

        let uName = $("#form-content .username").val();
        let uPwd = $("#form-content .password").val();

        if ($.trim(uName) == "") {
            errTip("请输入账号")
            return false;
        } else if (!/^[^@\s\?]+@[^@\s\?]+(\.[^@\s\?]+)+$|^1[34578]\d{9}$/.test(uName)) { //邮箱手机号验证
            errTip("账号格式有误")
            return false;
        } else {
            $("#form-content .username").removeClass("error")
            $("#form-content .err-tip").hide();
        }

        if (uPwd == "") {
            errTip("密码不能为空")
            return false;
        } else {
            $("#form-content .err-tip").hide();
            $("#form-content .password").removeClass("error");
            //验证成功后 拿到所有数据传入后台
            let _params = $(this).serialize()
            let _result = await admin_model.login(qs.parse(_params))
            switch (_result.code) {
                case 200:
                    showLoading({
                        title: "登录成功",
                        mask: true,
                        success: function (res) {
                            console.warn(JSON.stringify(res))
                        }
                    });
                    setTimeout(function () {
                        hideLoading()
                    }, 8000)
                    //存入本地
                    localStorage.token = _result.data.token
                    window.location.href = '../'
                    break;
                case 201:
                    errTip("用户名不存在")
                    break;
                case 202:
                    errTip("密码不正确")
                    break;
            }

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