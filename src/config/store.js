import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      isMenuVisible: true,
      tabIndex: 0,
      actv: false,
      user: {
         name: 'Luiz Moura',
         email: 'luizmoura2@hotmail.com'
      },      
      produto: {},
      estoque: []

   },
   mutations: {
      toggleMenu(state, isVisible){
         if(isVisible === undefined){
            state.isMenuVisible = !state.isMenuVisible
         }else{
            state.isMenuVisible = isVisible
         }
      },
      setTabEstoque(state, tab){
         state.tabIndex = tab         
      },
      setProduto(state, payload){
         state.produto = payload
      },
      setEstoque(state, payload){
         state.estoque = payload
      }

   }
})