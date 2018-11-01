import bus from './bus'
import handelToastByData from './handelToastByData'
import toast from './toast'

//防抖
const debounce = (method, context) => {
    clearTimeout(method.tId);
    method.tId = setTimeout(function () {
        method.call(context)
    }, 300)
}


export {
    debounce,
    bus,
    handelToastByData,
    toast
}
export default {
    debounce,
    bus,
    handelToastByData,
    toast
}