import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import RelPdf from '@/components/auxpdf/RelPdf'

Vue.use(VueRouter)

const routes = [{
   name: 'home',
   path: '/',
   component: Home
},{
   name: 'adminPages',
   path: '/admin',
   component: AdminPages
},{
   name: 'RelPdf',
   path: '/funpdf/:url',
   component: RelPdf,
   props: true
}]

export default new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})