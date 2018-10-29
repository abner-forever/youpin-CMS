//连接数据库
const mongoose = require("../utils/mongoose")

const fs = require('fs-extra')
//格式化时间
const Moment = require('moment')

const PATH= require('path')

//shoplists数据库中的名字 加s???
var ShoplistModel = mongoose.model('shoplists', new mongoose.Schema({
    shopImg: String,
    shopName: String,
    shopDesc: String,
    shopKind: String,
    price: String,
    createTime: String,
    formatTime: String
}));
//获取全部数据
const listall = (_query = {}) => {
    return ShoplistModel.find(_query).sort({
        createTime: -1
    }).then((results) => {
        return results
    }).catch((err) => {
        return false
    })
}

//获取数据库数据
const list = async ({ pageNo=1, pageSize=10, search = ''}) => {
    console.log(search,111);
    
    let reg = new RegExp(search , 'ig')
    let _query = {  //$0r 匹配任意字段都包含的
        $or:[
            {shopName : reg},
            {shopDesc : reg},
            {shopKind : reg}
       ]
    }
    let _all_items = await listall(_query)
    return ShoplistModel.find(_query).sort({
        createTime: -1
    })
    .skip((pageNo-1) * pageSize)
    .limit(~~pageSize)
    .then((results) => {
        return {
            items:results,
            pageInfo:{  //页码信息
                pageNo, //当前页
                pageSize,   //一页的数量
                total: _all_items.length,   //总数
                totalPage: Math.ceil(_all_items.length / pageSize),
                search
            }
        }
    }).catch((err) => {

        return false
    })
}

//添加数据
let default_img ='/uploads/shopImg/default_shopImg.png'
const add = (body) => {
    let _timestamp = Date.now()
    let momnet = Moment(_timestamp)
    body.shopImg = body.shopImg|| default_img
    return new ShoplistModel({
            ...body,
            createTime: _timestamp,
            formatTime: momnet.format("YYYY-MM-DD hh:mm") //格式化时间
        }).save()
        .then((result) => {
            console.log('result!', result);
            return result
        })
        .catch((err) => {
            console.log('error:', err);
            return false
        })

}
//删除数据库中的数据
const remove = async ({ id, pageNo, pageSize }) => {
    //根据id删除
    let _row = await listone({ id })
    return ShoplistModel.deleteOne({ _id: id }).then( async (results) => {
        let _all_items = await listall()
        results.deleteId = id
        results.isBack = (pageNo-1) * pageSize >= _all_items.length
        //图片存在且不是默认图片时就删除图片
        if(_row.shopImg && _row.shopImg!== default_img){
            fs.removeSync( PATH.resolve(__dirname, "../public"+ _row.shopImg) )
        }
        return results
    }).catch((err) => {
        fs.appendFileSync('./logs/error.txt', Moment().format("YYYY-MM-DD hh:mm") + '' + JSON.stringify(err)+'\r\n')
        console.log(err,999);
        
        return false
    })
}

//更新据库中的数据
const update = (body) => {
    console.log("ok");
    //图片存在就删除数据库的图片
    if (!body.shopImg) {
        delete body.shopImg
    }
    console.log(body,1212);
    
    return ShoplistModel.updateOne({_id:body.id},{...body}).then((result) => {
        //替换了新的数据应该把资源硬盘上原有的数据删除

        return result
    }).catch((err) => {
        fs.appendFileSync('./logs/error.txt', Moment().format("YYYY-MM-DD hh:mm") + '' + JSON.stringify(err))
        return false
    })
}

const listone = ({ id }) => {
    //根据id查找
    return ShoplistModel.findById(id).then((result) => {
        return result
    }).catch((err) => {
        return false
    })
}

module.exports = {
    listall,
    list,
    add,
    remove,
    update,
    listone
}