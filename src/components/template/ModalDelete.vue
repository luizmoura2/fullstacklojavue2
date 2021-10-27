<template>
 <div>
   <b-modal id="modal-clic" ref="modal-f" size="sm" title="Exclusão?" hide-footer>
      
      <template #modal-title>
         Confirme a exclusão {{title}}:<br>
         Código: {{codigo}} - {{ nome}}<br> 
      </template>   
         
      <b-button class="mt-3" variant="primary" @click="remove">Confirmar</b-button>
      <b-button class="mt-3 ml-2" @click="hideModal" >Cancelar</b-button>

   </b-modal>
 </div>
</template>

<script>

   import axios from 'axios'
   import { baseApiUrl, showError } from '@/global' 

   export default ({
      name: 'ModalDelete',
      props: ['title', 'codigo', 'nome', 'id'],
      methods:{
         remove(){
            axios.delete(`${baseApiUrl}/cliente/${this.codigo}`)
               .then(()=>{
                  this.hideModal()
                  this.reset()
                  this.$toasted.global.defaultSuccess()
               })
               .catch(showError)
         },
         hideModal() {
               this.$refs['modal-f'].hide()
         },
      }

})
</script>
   
