import shop_list_template from '../views/shop_list.html'

import shop_list_model from '../models/shoplist'
import { shopadd } from './shop_add'
import { update } from './shop_update'
import qs from 'querystring'

import {
    bus,
    handelToastByData
} from '../utils'
//商品列表获取
const shoplist = async (req, res, next) => {
    req.query = req.query || {}
    let _page = {
        pageNo: req.query.pageNo || 1,
        pageSize: req.query.pageSize || 10,
        search: req.query.search
    }
    let html = template.render(shop_list_template, {
        data: (await shop_list_model.shoplist(_page)).data
    })

    res.render(html)
    bindShoplistEvent(_page)

}

const bindShoplistEvent = (_page) => {
    //点击跳转到添加数据页面
    $('.shoplist-box').on('click', ".add_shop", function () {
        bus.emit('go', '/shop_add')
    })
    //点击删除
    $('.shoplist-box ').on('click', ".remove_shop", function () {
        handleRemoveShop.call(this, _page)
    })

    //点击跳转到修改信息页面
    $('.shoplist-box ').on('click', ".update_shop", function () {
        let id = $(this).parents('tr').data('id')
        bus.emit('go', '/shop_update', {
            id
        })
    })
    //点击搜索

    $('.shoplist-box ').on('click', ".search-btn", function () {
        let _search = $('.search-keyword').val()
        let _params = {
            search: _search,
            pageNo: 1
        }
        bus.emit('go', `/shop_list?${$.param(_params)}`)
    })
}


//处理删除商品
const handleRemoveShop = async function (_page) {
    //拿到当前商品ID
    let _id = $(this).parents('tr').data('id')

    let _data = await shop_list_model.remove({
        id: _id,
        ..._page
    })
    //删除数据时 如果是最后一页的最后一条数据 则要向前跳转一页
    //删除数据后 要保持在当前页面
    //若是最后一条 pageNo-1 
    handelToastByData(_data, {
        isReact: false,
        success: (data) => {
            let _pageNo = _page.pageNo
            _pageNo -= data.isBack ? 1 : 0
            console.log(data)
            bus.emit('go', '/shop_list?pageNo=' + _pageNo + "&deleteid=" + data.deleteId)
        }
    })

}

export default {
    shoplist,
    shopadd,
    update
}