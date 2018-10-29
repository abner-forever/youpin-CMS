import shop_model from '../models/shoplist'
import shop_update_template from '../views/shop_update.html'

import { bus, handelToastByData } from '../utils'

//修改信息
const update = async (req, res) => {
    let { id } = req.body //要更新数据的id

    let html = template.render(shop_update_template, {
        data: (await shop_model.listone({ id })).data
    })
    res.render(html)
    bindUpdateEvent()
}

//绑定点击修改
const bindUpdateEvent = () => {
    $('#backof').on('click', function () {
        bus.emit('go', '/shop_list')
    })
    //提交更新
    $('#update_shop').submit(handelUpdateEvent)
}
const handelUpdateEvent = async function (e) {
    e.preventDefault();
    console.log(1);
    let _data = await shop_model.update()
    //成功后跳转
    handelToastByData(_data, {
        isReact: true,
        success: () => {
            setTimeout(() => {
                bus.emit('go', '/shop_list')
            }, 3000);
        }
    })
}

export {
    update
}