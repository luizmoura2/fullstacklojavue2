<template>
   <div class="produto-admin">
		<b-form>
            <b-row>  
                <b-col md="2" sm="12">
                    <b-form-group label="Código:" >
                        <b-form-input size="sm" type="text" readonly name="id" v-model="produto.pro_codigo" />
                    </b-form-group>
                    <input type="hidden" name="fot_id" v-model="produto.fot_codigo" />        
                </b-col>     
            </b-row>
         <b-row>
            <b-col md="4" sm="12">						
               <b-form-group label="Nome:" label-for="pro-nome">
                  <b-form-input size="sm" type="text" id="pro-nome" 
                        v-model="produto.pro_nome" maxlength="255" required />
               </b-form-group>
            </b-col>
            <b-col md="2" sm="12">
               <b-form-group label="Categoria" label-for="pro-categoria">
                  <b-form-input type="text" size="sm" id="pro-categoria" 
                        v-model="produto.pro_categoria" maxlength="45" required />
               </b-form-group>						
            </b-col>
            <b-col md="4" sm="12">
               <b-form-group label="Descrição:" label-for="pro-descricao">
                  <b-form-input type="text" size="sm" id="pro_descricao" 
                        v-model="produto.pro_descricao"  maxlength="14" />
               </b-form-group>
            </b-col> 
            <b-col md="2" sm="12">
               <b-form-group label="Preço unidade" label-for="pro-preco_unitario">   
                     <b-form-input type="float" size="sm" id="pro-preco_unitario" 
                        v-model="produto.pro_preco_unitario" maxlength="100"/>
               </b-form-group>
            </b-col> 
         </b-row>

         <b-row>  				
            <b-col md="2" sm="12">
                  <b-form-group label="Localização" label-for="pro_localizacao" >
                     <b-form-input type="text" size="sm" id="pro_localizacao" 
                           v-model="produto.pro_localizacao" maxlength="15" required/>
                  </b-form-group>
            </b-col>
            <b-col md="2" sm="12">
                  <b-form-group label="Comissão" label-for="pro_comissao" >
                  <b-form-input type="text" size="sm" id="pro_comissao" 
                     v-model="produto.pro_comissao" maxlength="45" required/>
                  </b-form-group>
            </b-col>         
            <b-col md="2" sm="12">
               <b-form-group label="Aliquota" label-for="pro-aliquota">
               <b-form-input type="text" size="sm" id="pro-aliquota" 
                  v-model="produto.pro_aliquota"  maxlength="255" />	
               </b-form-group>      	
            </b-col>
            
         </b-row>
            <b-button variant="primary" v-if=" mode === 'save' " @click="save"> Salvar </b-button>
            <b-button class="ml-2"  @click="reset"> Cancelar </b-button>
        </b-form>
        <hr>
         <b-row>
                <b-col md="5" sm="12">	
                    <b-input-group class="mb-3" size="sm" prepend="Pesquisa por nome:"  >
                        <b-form-input size="sm" type="text" id="func-nomep" 
                            v-model="prod_nome_pesquisa" maxlength="255" />
                        <b-input-group-append>
                            <b-button size="sm" text="Button" variant="info" @click="findProduto()">
                                <i class="fa fa-search-plus" aria-hidden="true"></i></b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-col>
       </b-row>
        <b-table striped hover :items="produtos" :fields="fields">
           <template slot="actions" slot-scope="data">
                <b-button size='sm' variant="warning" @click="editProduto(data.item.pro_codigo)" class="mr-2"
                     v-b-tooltip.hover title="Editar">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button size='sm' variant="danger" @click="produto = data.item" 
                    v-b-tooltip.hover title="Excluir"
                    v-b-modal.modal-clic class="ml-2"><i class="fa fa-trash"></i>
                </b-button>
                <b-button size='sm' variant="info" @click="fichaProduto(data.item.pro_codigo)" class="ml-2"
                     v-b-tooltip.hover title="Relatório PDF">
                    <i class="fa fa-book"></i>
                </b-button>
                <b-button size='sm' variant="success" @click="findEstoque(data.item)" class="ml-2" 
                 v-b-tooltip.hover title="Estoque">
                    <i class="fa fa-cart-arrow-down"></i>
                </b-button>
            </template>
        </b-table>
        <p class="mt-3">Page: {{page}}/{{count}}</p>
        <b-pagination size="sm"  v-model="page" pills 
            :total-rows="count" :per-page="limit" 
            first-text="⏮"   prev-text="⏪"
            next-text="⏩" last-text="⏭"            
            class="mt-4" align="center"/>

        <b-modal id="modal-clic" ref="modal-f" size="sm" title="Exclusão?" hide-footer>
                <template #modal-title>
                    Confirme a exclusão do Produto:<br>
                    Código: {{this.produto.pro_codigo}} - {{ this.produto.pro_nome}}<br> 
                </template>   
               
            <b-button class="mt-3" variant="primary" @click="remove">Confirmar</b-button>
            <b-button class="mt-3 ml-2" @click="hideModal" >Cancelar</b-button>
        </b-modal>
   </div>
</template>

<script>

import { baseApiUrl, showError } from '@/global'
import axios from 'axios' 

export default {
   name: 'Produto',
   data() {
      return {
        mode: 'save',
        page: 1,
        limit: 3,
        count: 0,
        estados: [],
        cidades: [],
        prod_nome_pesquisa:'',
        produto: {
            pro_id: "",
            pro_nome: "Sabonete",
            pro_categoria: "banheiro",
            pro_preco_unitario: 0,
            pro_aliquota: 0,
            pro_comissao: 0,
            pro_localizacao: "localiza",
            pro_descricao: "Descrição produto",
            pro_observacao: "Obs Produto"            
        },
        produtos: [],
        fields: [
            {key:'pro_codigo', label:'Codigo', sortable:true},
            {key:'pro_nome', label:'Nome', sortable:true},
            {key:'pro_categoria', label:'CNPJ', sortable:true},
            {key:'pro_descricao', label:'Desctição', sortable:true},
            {key:'pro_preco_unitario', label:'E-mail', sortable:true},
            {key:'actions', label:'Ações'}
        ], 
      }
   },
    methods: {

        fichaProduto(id){
            const url = `produto/pdf/${id}`
            this.$router.push({ name: 'RelPdf', params: { url } })
        },

        findProduto(){
            // eslint-disable-next-line
            // console.log('pesquisar funcionario')
            const url = `${baseApiUrl}/produto/findnome/${this.prod_nome_pesquisa}`
            axios.get(url)
                .then(res =>{
                    this.produtos = res.data.data
                    this.page = res.data.current_page
                    this.limit = res.data.per_page
                    this.count = res.data.total
                })     
        },
        findEstoque(Item){
            
            this.$store.commit('setProduto', Item )
            const url = `${baseApiUrl}/produto/estoque/${Item.pro_codigo}`
            axios.get(url)
                .then(res =>{
                    //  eslint-disable-next-line
                   // console.log(res.data); 
                    this.$store.commit('setEstoque', res.data.data )
                    this.$store.commit('setTabEstoque', 4 )   

                })     
        },
        loadProdutos(){
            const url = `${baseApiUrl}/produto/tbl?page=${this.page}`
            axios.get(url)
                .then(res =>{
                    this.produtos = res.data.data
                    this.page = res.data.current_page
                    this.limit = res.data.per_page
                    this.count = res.data.total
                })      
        },

        loadProduto(){           
            const url = `${baseApiUrl}/produto/${this.produto.pro_codigo}`
            axios.get(url)
                .then(res =>this.produtos = res.data)      
        },

        reset(){
            this.mode = 'save' ,
            this.produto = {},
            this.loadProdutos()
        },

        editProduto(id, mode='save' ){

            this.mode = mode
            const url = `${baseApiUrl}/produto/${id}`
            axios.get(url)
                .then(res =>{
                    this.produto = res.data                     
                })
        },

        save(){    
                
            const method = this.produto.pro_codigo ? 'put':'post'
            const id = this.produto.pro_codigo ? `/${this.produto.pro_codigo}` :''
            const url = `${baseApiUrl}/produto${id}`
            axios[method](url, this.produto)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
       
        remove(){
            const id = this.produto.pro_codigo
            axios.delete(`${baseApiUrl}/produto/${id}`)
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

    },

    watch:{
        page(){
           this.loadProdutos()
        }
    },

    mounted(){
        this.loadProdutos()
    }

}
</script>

<style>

</style>


