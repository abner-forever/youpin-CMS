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
export default toast