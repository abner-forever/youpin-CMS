const jwt = require ('jsonwebtoken')
const fs = require('fs')
const PATH = require('path')

const userLoginAuth = (req,res,next)=>{
    try {

        let _public = fs.readFileSync(PATH.resolve(__dirname,'../keys/public.key'))
        let _result = jwt.verify(req.query.token, _public, { algorithms: 'RS256'})
        let _datetime = (Date.now()/1000)- _result.iat
        console.log(_datetime,123123);
        
        let _expires = 60*60*24
        if(_datetime > _expires){
            res.render('user',{
                code: 403,
                data : JSON.stringify({msg:'登录过期,请重新登录'})
            })
        } else{
            req.token = _result
            next()
        }

    } catch (error) {
        res.render('user',{
            code : 500,
            data : JSON.stringify({msg: '请登录后操作'})
        })
    }
}

module.exports = {
    userLoginAuth
}