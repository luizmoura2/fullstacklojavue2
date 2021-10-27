<template>
   <div class="estoque-admin">
		<b-form>
            <b-row>  
                
                <b-col md="3" sm="12">                    
                    <b-form-group :label="'<b>Código:</b> '+ produto.pro_codigo" />                            
                </b-col>     
                <b-col md="5" sm="12">						
                    <b-form-group :label="'<b>Produto:</b> '+ produto.pro_nome" />
                </b-col>
                <b-col md="4" sm="12">
                    <b-form-group :label="'<b>Categoria:</b> '+ produto.pro_categoria"/>					
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" sm="12">
                    <b-form-group :label="'<b>Descrição: </b>'+ produto.pro_descricao"/>                        
                </b-col> 
            </b-row>

            <b-row>
                <b-col md="2" sm="12">						
                    <b-form-group label="Referencia:" label-for="referencia">
                        <b-form-input size="sm" type="text" id="referencia" 
                                v-model="estoque.pro_referencia"  maxlength="15" required />
                    </b-form-group>
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Nota fiscal:" label-for="nota-fiscal">
                        <b-form-input type="text" size="sm" id="nota-fiscal" 
                                v-model="estoque.nota_fiscal"  maxlength="20" />
                    </b-form-group>
                </b-col> 
                <b-col md="4" sm="12">
                    <b-form-group label="Marca" label-for="marca">   
                            <b-form-input type="text" size="sm" id="marca" 
                                v-model="estoque.pro_marca" maxlength="100"/>
                    </b-form-group>
                </b-col> 
                <b-col md="2" sm="12">
                    <b-form-group label="Quantidade" label-for="quantidade">   
                            <b-form-input type="text" size="sm" id="quantidade" 
                                v-model="estoque.qtd_produto" maxlength="100"/>
                    </b-form-group>
                </b-col> 
                 <b-col md="2" sm="12">
                    <b-form-group label="Vendido" label-for="vendido" >
                        <b-form-input type="text" size="sm" id="vendido" 
                            v-model="estoque.pro_vendido" maxlength="15" required/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>               
                <b-col md="2" sm="12">
                    <b-form-group label="Custo" label-for="custo-un" >
                    <b-form-input type="text" size="sm" id="custo-un" 
                        v-model="estoque.pro_preco_custo_un" maxlength="18" required/>
                    </b-form-group>
                </b-col>         
                <b-col md="2" sm="12">
                    <b-form-group label="Preço venda" label-for="preco-venda_un">
                    <b-form-input type="text" size="sm" id="preco-venda_un" 
                        v-model="estoque.pro_preco_venda_un"  maxlength="255" />	
                    </b-form-group>      	
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Preço cartão" label-for="preco-cartao-un">
                    <b-form-input type="text" size="sm" id="preco-cartao-un" 
                        v-model="estoque.pro_preco_cartao_un"  maxlength="255" />	
                    </b-form-group>      	
                </b-col>
                    <b-col md="2" sm="12">
                    <b-form-group label="Preço prazo" label-for="preco-prazo-un">
                    <b-form-input type="text" size="sm" id="preco-prazo-un" 
                        v-model="estoque.pro_preco_prazo_un"  maxlength="255" />	
                    </b-form-group>      	
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Desconto" label-for="pro_desconto">
                    <b-form-input type="text" size="sm" id="pro_desconto" 
                        v-model="estoque.pro_desconto"  maxlength="255" />	
                    </b-form-group>      	
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Validade" label-for="data_validade">
                    <b-form-input type="date" size="sm" id="data_validade" 
                        v-model="estoque.pro_data_validade"  maxlength="10" />	
                    </b-form-group>      	
                </b-col>
            </b-row>

            <b-row>
                <b-col md="2" sm="12">
                    <b-form-group label="Unidade" label-for="unidade">
                    <b-form-input type="text" size="sm" id="unidade" 
                        v-model="estoque.pro_unidade"  maxlength="255" />	
                    </b-form-group>      	
                </b-col>
                <b-col md="10" sm="12">
                    <b-form-group label="Observação" label-for="pro_observacao">
                    <b-form-input type="text" size="sm" id="pro_observacao" 
                        v-model="estoque.pro_observacao"  maxlength="255" />	
                    </b-form-group>      	
                </b-col>
            </b-row>  

            <b-button variant="primary" v-if=" mode === 'save' " @click="save"> Salvar </b-button>
            <b-button class="ml-2"  @click="reset"> Cancelar </b-button>

        </b-form>
        <hr>
        <b-table striped hover :items="estoques" :fields="fields">
           <template slot="actions" slot-scope="data">
                <b-button size='sm' variant="warning" @click="editEstoque(data.item.codigo)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button size='sm' variant="danger" @click="estoque = data.item" 
                    v-b-modal.modal-clic class="ml-2"><i class="fa fa-trash"></i>
                </b-button>
                <b-button size='sm' variant="info" @click="fichaProduto(data.item.pro_codigo)" class="ml-2">
                    <i class="fa fa-book"></i>
                </b-button>
            </template>
        </b-table>
        
        <b-pagination size="sm"  v-model="page" pills :total-rows="count" :per-page="limit" 
            first-text="⏮"   prev-text="⏪" next-text="⏩" last-text="⏭"            
            class="mt-4" align="center"/>

        <b-modal id="modal-clic" ref="modal-f" size="md" title="Exclusão?" hide-footer>
                <template #modal-title>
                    Confirme a exclusão do estoque do Produto: <br/>{{produto.pro_nome}} <br>
                    Código estoque: {{estoque.codigo}} -  {{ estoque.pro_marca }}<br> 
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
   name: 'Estoque',
   data() {
      return {
        mode: 'save',
        page: 1,
        limit: 3,
        count: 0,
        estados: [],
        cidades: [],
        prod_nome_pesquisa: '',
        produtox: {},
        produtos: [],
        estoque: {},
        fields: [
            {key:'codigo', label:'Codigo', sortable:true},
            {key:'pro_codigo', label:'Produto'},
            {key:'pro_marca', label:'Marca', sortable:true},
            {key:'pro_data_validade', label:'Validade', sortable:true},
            {key:'pro_observacao', label:'Observação', sortable:true},
            {key:'pro_preco_venda_un', label:'Preço', sortable:true},
            {key:'actions', label:'Ações'}
        ], 
      }
    },
    computed: {
        produto () { 
            return this.$store.state.produto
        },
        estoques(){
            return this.$store.state.estoque
        }

    },
    methods: {

        fichaProduto(id){
            const url = `estoque/pdf/${id}`
            this.$router.push({ name: 'RelPdf', params: { url } })
        },

        loadEstoques(){
            const url = `${baseApiUrl}/estoque/grid/tbl?page=${this.page}`
            axios.get(url)
                .then(res =>{
                    this.estoques = res.data.data
                    this.page = res.data.current_page
                    this.limit = res.data.per_page
                    this.count = res.data.total
                })      
        },

        reset(){
            this.mode = 'save'
            this.estoque = {}
            //this.loadEstoques()
        },

        editEstoque(id, mode='save' ){
            this.mode = mode
            const url = `${baseApiUrl}/estoque/item/${id}`
            axios.get(url)
                .then(res =>{
                    // eslint-disable-next-line
                   // console.log(res.data.data[0]); 
                    this.estoque = res.data.data[0]
                }) 
        },

        save(){    
            // eslint-disable-next-line
            //console.log(this.estoque);
            let method=  ''
            let id = ''
            
            if (this.estoque.codigo){
                method = 'put'
                id = `/${this.estoque.codigo}`
            }else{
                method = 'post'
                this.estoque.pro_codigo = this.$store.state.produto.pro_codigo
            }  
            let pro_codigo = this.estoque.pro_codigo           
            const url = `${baseApiUrl}/estoque${id}`
            axios[method](url, this.estoque)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                    this.findEstoque(pro_codigo)
                })
                .catch(showError)
        },
       
        findEstoque(pro_codigo){

            const url = `${baseApiUrl}/produto/estoque/${pro_codigo}`
            axios.get(url)
                .then(res =>{
                    //  eslint-disable-next-line
                   // console.log(res.data); 
                    this.$store.commit('setEstoque', res.data.data ) 

                })     
        },
        remove(){
            const id = this.estoque.codigo
            let pro_codigo = this.estoque.pro_codigo  
            axios.delete(`${baseApiUrl}/estoque/${id}`)
                .then(()=>{
                    this.hideModal()
                    this.reset()
                    this.$toasted.global.defaultSuccess()
                    this.findEstoque(pro_codigo)
                })
                .catch(showError)
        },
        hideModal() {
            this.$refs['modal-f'].hide()
        },
        
        formatter(date) {
            
            return date.toLocaleDateString('pt-br')
        }
    },

    watch:{
        page(){
           //this.loadProdutos()
           //this.loadEstoque (116)
        }
    },

    mounted(){
        //this.loadEstoque (116)        
    }

}
</script>

<style>

</style>


