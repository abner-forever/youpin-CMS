import shop_add_template from '../views/shop_add.html'

import shop_model from '../models/shoplist'
import { bus, handelToastByData } from '../utils'
//添加商品
const shopadd = async (req, res, next) => {
    res.render(shop_add_template)
    bindShopaddEvent()
}
const bindShopaddEvent = () => {
    //
    $('#backof').on('click', function () {
        bus.emit('go', '/shop_list')
    })
    //提交保存
    $('#save_shop').submit(handelAddEvent)

}
let _isLoading = false
const handelAddEvent = async function (e) {
    e.preventDefault();
    if (_isLoading) return false;
    _isLoading = true
    let _data = await shop_model.add()
    _isLoading = false
    // handelToastByData(_data)

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
    shopadd
}