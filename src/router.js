//导入vue
import Vue from 'vue'
//导入vue-router
import VueRouter from 'vue-router'

//导入自定义的vue组件
import UserPage from './main/userPage/userPage.vue'
import News_index from './main/news/news_index.vue'
import News_details from './main/news/news_details.vue'
import Comic_index from './main/comic/comic_index.vue'
import Comic_classification from './main/comic/comic_classification.vue'
import Vlog from './main/vlog/vlog_index.vue'
import Developer from './main/developer/developer_index.vue'
import Street_index from './main/street/street_index.vue'
import Street_details from './main/street/street_details.vue'
//手动安装vue-router
Vue.use(VueRouter)
//创建vue-router对象
var router=new VueRouter({
    routes:[
        { path:'/',redirect:'/comic' },
        { path:'/userPage',component:UserPage },
        { path:'/news',component:News_index },
        { path:'/newsDetails/:id',component:News_details },
        { path:'/comic',component:Comic_index },
        { path:'/comic/classification',component:Comic_classification},
        { path:'/vlog',component:Vlog },
        { path:'/developer',component:Developer },
        { path:'/street',component:Street_index },
        { path:'/streetDetails/:id',component:Street_details }
    ]
})

export default router