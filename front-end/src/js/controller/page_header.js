import page_header_template from '../views/pageheader.html'

const render = (data = {
    title : '',
    description: '',
    list: []
})=>{
    let _html = template.render(page_header_template,data)
    $('.content-header-box').html(_html)
}

export default {
    render
}