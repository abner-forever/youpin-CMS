const admin_model = require('../models/admin')
const {handleData}  = require('../utils')

const jwt = require('jsonwebtoken')

const fs = require('fs')
const PATH = require('path')

const register =  async(req,res,next)=>{

    //查找数据库中有没有当前注册用户的用户名

    var checkUsername = await admin_model.checkUserByusername(req.body.username)
    
    if(!checkUsername.length){  //如果不存在 就注册
        if (!req.body.nickname) req.body.nickname = req.body.username
        let _data= await admin_model.register(req.body)
        handleData(_data,res,'admin')
    }else{
        res.render('admin',{
            code : 201,
            data:JSON.stringify('用户名已存在')
        })
    }

}

const login = async (req,res,next)=>{
    //查找登录用户 //判断有无此用户
    var checkUsername = await admin_model.checkUserByusername(req.body.username)
    
    if(!!checkUsername.length){  //如果存在 就登录
        let _data= await admin_model.login(req.body.password,checkUsername[0])
        if(_data){

            //非对称加密 //需要返回的数据
            let _payload = {
                id : checkUsername[0]._id,
                username : checkUsername[0].username,
            }
            //从key文件夹取出私钥
            let _private = fs.readFileSync(PATH.resolve(__dirname,'../keys/private.key'))
            let _token = jwt.sign(_payload, _private, {algorithm: 'RS256'})

            
            res.render('admin',{
                code : 200,
                data : JSON.stringify({
                    token : _token
                })
            })
        }else{
            res.render('admin',{
                code : 202,
                data : JSON.stringify('密码有误,请重新输入')
            })
        }
    }else{
        res.render('admin',{
            code : 201,
            data:JSON.stringify('用户名不存在')
        })
    }
}

module.exports = {
    register,
    login
}