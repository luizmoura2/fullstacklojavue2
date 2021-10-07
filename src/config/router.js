import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import FuncionarioPdf from '@/components/auxpdf/FuncionarioPdf'

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
   name: 'funcionarioPdf',
   path: '/funpdf',
   component: FuncionarioPdf
}]

export default new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})