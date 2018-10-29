const express = require('express')
const router = express.Router()
const fileupLoad = require('../middleware/fileupload')
const shoplis_controller = require('../controller/shoplist')

//  /api/shoplist/
router.get('/listall',shoplis_controller.listall);
router.get('/list',shoplis_controller.list);
router.post('/add',fileupLoad,shoplis_controller.add);
router.delete('/remove',shoplis_controller.remove);
router.post('/update',fileupLoad,shoplis_controller.update);
router.get('/listone',shoplis_controller.listone);

module.exports = router