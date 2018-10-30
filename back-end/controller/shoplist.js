const shoplist_model = require('../models/shoplist')

const { handleData } = require('../utils')

const listall = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await shoplist_model.listall()
    handleData(_data, res, 'shoplist')
}

const list = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await shoplist_model.list(req.query)
    handleData(_data, res, 'shoplist')
}
const add = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await shoplist_model.add(req.body)
    //处理数据
    handleData(_data, res, 'shoplist')
}
//删除
const remove = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await shoplist_model.remove(req.body)
    handleData(_data, res, 'shoplist')
} 

const listone = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await shoplist_model.listone(req.query)
    handleData(_data, res, 'shoplist')
} 


const update = async (req, res) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await shoplist_model.update(req.body)
    handleData(_data, res, 'shoplist')
} 


module.exports = {
    listall,
    list,
    add,
    remove,
    update,
    listone
}