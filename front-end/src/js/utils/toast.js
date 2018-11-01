const toast =(text,bgColor,options)=>{
    $.toast({ 
        text ,
        bgColor,
        showHideTransition : 'fade',
        allowToastClose : false,
        hideAfter : 3000,
        stack : 5,
        textAlign : 'left',
        position : 'top-center'
    }) 
}
const errTip= (txt)=>{
    $("#form-content .err-tip").find("span").text(txt);
    $("#form-content .err-tip").show();
    $("#form-content .password").addClass("error")
}

export default {
    toast,
    errTip
}
export {
    toast,
    errTip
}