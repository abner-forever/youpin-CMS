import user_model from '../models/user'

const getuserInfo = async (req,res,next)=>{

    let _token = localStorage.getItem('token')|| ''
    
    let _data = await user_model.info({token:_token})
    
    $('.nickname').html(_data.data.nickname)
    $('.email').html(_data.data.email)

    $('#logout').on('click',async function(){
       localStorage.removeItem('token')
       window.location.href = './pages/admin.html'
    })

}
export default{
    getuserInfo
}