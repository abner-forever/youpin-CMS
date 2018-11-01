import smeRouter from 'sme-router'

import home_template from "../views/home.html";
import page_nofound from "../views/404.html";

import pageheader_controller from '../controller/page_header'
import shop from '../controller/shop_controller'
import map from '../controller/map_controller'
import calendar from '../controller/calendar_controller'
import usermanage from '../controller/usermanage'

import pageheader_model from "../models/page_header";

import bus from '../utils/bus'

var router = null
let prevUrl = ''
const _init = ()=>{
    router = new smeRouter('router-view')

    //处理菜单选中状态
    router.use((req,res,next)=>{
        _activeLink(req.route)
    })

    router.route('/',renderPageHeader)

    //匹配路由
    router.route('/home',(req,res,next)=>{
        res.render(home_template)
    })
    router.route('/shop_list',shop.shoplist)
    router.route('/shop_add',shop.shopadd)
    router.route('/shop_update',shop.update)
    router.route('/map',map.init)
    router.route('/usermanage',usermanage.init)
    router.route('/calendar',calendar.init)

    router.route('/notfound',(req,res,next)=>{
        res.render(page_nofound)
    })

    router.route('*',(req,res,next)=>{
        if(req.url=== ''){
            res.redirect('/home')
        }else{
            res.redirect('/notfound')
        }
    })
    //在控制器中无法使用router,所以给bus绑定数据
    //给bus绑定数据
    bus.on('go',(path,body)=>{ 
        router.go(path,body)
    })
    bus.on('back',()=>{
        router.go()
    })

    _navLink()
}

const _navLink = (selector)=>{
    let $nav = $(selector || '.sidebar-menu .nav-link[to]')
    $nav.on('click',function(){
        let _path = $(this).attr('to')
        router.go(_path)
    })
}

const _activeLink = (route)=>{
    let $nav = $('.sidebar-menu .nav-link[to]')
    $nav.removeClass('active')
    $nav.filter(`[to='${route}']`).addClass('active')
}

const renderPageHeader =( req,res,next )=>{
    pageheader_controller.render(pageheader_model.pageHeaderInfo(req.url,prevUrl))
    //prevUrl 记录的上一次的 URL
    prevUrl = req.url
}

export default {
    init:_init,
}