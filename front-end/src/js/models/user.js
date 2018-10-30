//判断是否登录
const isLgoin = ({token})=>{
    return $.ajax({
        url: '/api/v1/user/isLogin',
        data: {token},
        success: result=>result
    })
}

const info = ({ token })=>{
    return $.ajax({
        url: '/api/v1/user/info',
        data: {token},
        success: result=>result
    })
}

export default {
    isLgoin,
    info,
}