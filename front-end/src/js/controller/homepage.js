import home_template from '../views/home.html'

import shoplist_model from '../models/shoplist'

const home= async (req,res,next)=>{
    let _html = template.render(home_template,{
        data: (await shoplist_model.shoplist()).data
    })
    res.render(_html)
}

export default {
    home
}