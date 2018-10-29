import toast from './toast'

const handelToastByData = (data, options = {}) => {
    let _none = () => {}
    let {
        isReact,
        success,
        fail
    } = {
        isReact: ((typeof options.isReact) !== 'undefined') ? options.isReact : true,
        success: options.success || _none,
        fail: options.fail || _none,
    }
    if (data.code == 200) {
        // alert('成功')
        if (isReact) toast('操作成功', 'green')
        if (success) success(data.data)
    } else {
        alert('失败')
        if (isReact) toast('操作失败', 'red')
        if (fail) fail(data.data)
    }
}
export default handelToastByData