import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      isMenuVisible: true,
      user: {
         name: 'Luiz Moura',
         email: 'luizmoura2@hotmail.com'
      }
   },
   mutations: {
      toggleMenu(state, isVisible){
         if(isVisible === undefined){
            state.isMenuVisible = !state.isMenuVisible
         }else{
            state.isMenuVisible = isVisible
         }
         // eslint-disable-next-line
         //console.log('tgmnu'+state.isMenuVisible)
      }
   }
})