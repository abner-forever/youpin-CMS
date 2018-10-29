const mongoose = require('../utils/mongoose')

const crypto = require('crypto')

var UserModel = mongoose.model('users',new mongoose.Schema({
    username:String,
    password:String,
    nickname:String,
    email:String
}))
//注册
const register = async ({username, password,nickname,email })=>{
    const secret = 'abcdefg'
    const _password = await crypto.createHmac('sha256',secret).update(password).digest('hex')
    return new UserModel({
        username,
        nickname,
        password:_password,
        email
    }).save()
    .then((result)=>{
        let {_id,username, nickname, email } = result
        //解构复制 返回的信息就不会有密码
        return {_id,username, nickname, email }
    })
    .catch(()=>{
        return false
    })
}

const login = async (pwd , {password})=>{
    const secret = 'abcdefg'
    const _password = await crypto.createHmac('sha256',secret).update(pwd).digest('hex')
    //相等返回true
    return ( _password === password )
} 


//查找用户名
const checkUserByusername = (username)=>{
    return UserModel.find({username}).then((result)=>{
        return result
    }).catch(()=>{
        return false
    })
}

module.exports = {
    register,
    login,
    checkUserByusername
}