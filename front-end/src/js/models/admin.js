const register = (data)=>{
    return $.ajax({
        url:'/api/v1/admin/register',
        type:'post',
        data,
        success:(results)=>{
            return results
        }
    })
}

const login = (data)=>{
    return $.ajax({
        url:'/api/v1/admin/login',
        type:'post',
        data,
        success:(results)=>{
            return results
        }
    })
}

export default {
    login,
    register
}