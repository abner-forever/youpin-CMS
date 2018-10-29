//获取数据
const shoplist = (page) => {
    return $.ajax({
        url: '/api/v1/shoplist/list',
        data : page,
        dataType:'json',
        success: (res) => {
            return res
        },
        error: (res) => {
            console.error(res)
            return false
        }
    })
}
const add = (data) => {
    return new Promise((resolve) => {
        $('#save_shop').ajaxSubmit({
            url: '/api/v1/shoplist/add',
            type: 'post',
            data,
            success: (results) => {
                resolve(results)
            }
        })
    })
}

const update = () => {
    return new Promise((resolve) => {
        $('#update_shop').ajaxSubmit({
            url: '/api/v1/shoplist/update',
            type: 'post',
            success: (results) => {
                resolve(results)
            }
        })
    })
}

const remove = (data) => {
    return $.ajax({
            url: '/api/v1/shoplist/remove',
            type: 'delete',
            data,
            success: (res) => {
                return res
            }
        })
}
const listone = (data) => {
    return $.ajax({
            url: '/api/v1/shoplist/listone',
            type: 'GET',
            data,
            success: (res) => {
                return res
            }
        })
}
export default {
    shoplist,
    add,
    remove,
    listone,
    update
}