import user_model from '../models/user'

const _none = () => {}

const userLoginAuth = async (success = _none, fail = _none) => {
    let _token = localStorage.getItem('token') || ''
    let isLogin = await user_model.isLgoin({token: _token})
    let auth = false
    if(isLogin.code == 200){
        auth = true
    }
    if (auth) {
        success(auth)
        return true
    } else {
        fail(auth)
        return false
    }
}

export {
    userLoginAuth
}