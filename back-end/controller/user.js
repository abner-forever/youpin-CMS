const user_model = require('../models/user')

const isLogin =  async(req,res,next)=>{
    res.render('user',{
        code: 200,
        data : JSON.stringify({msg:'管理员已登录'})
    })

}
//获取登录后的用户信息
const info =  async(req,res,next)=>{
    let _result = await user_model.getUserInfoById(req.token.id)
    res.render('user',{
        code:200,
        data:JSON.stringify({
            id : _result._id,
            username: _result.username,
            nickname: _result.nickname,
            email: _result.email,
        })
    })
}

module.exports = {
    isLogin,
    info,
}