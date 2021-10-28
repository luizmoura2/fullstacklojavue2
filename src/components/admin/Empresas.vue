<template>
   <div class="empresa-admin">
        <b-form>				
            <input type="hidden" v-model="empresa.emp_codigo" />
                        
            <b-row>
               <b-col md="3" sm="12">						
                  <b-form-group label="Gerencia:" label-for="emp_gerencia">
                     <b-form-input size="sm" type="text" id="emp_gerencia" 
                           v-model="empresa.emp_gerencia"
                              maxlength="255" required />
                  </b-form-group>
               </b-col>
               <b-col md="4" sm="12">
                  <b-form-group label="Nome" label-for="emp_nome">
                     <b-form-input type="text" size="sm" id="emp_nome" 
                           v-model="empresa.emp_nome" maxlength="255" required />
                  </b-form-group>						
               </b-col>
               <b-col md="5" sm="12">
                  <b-form-group label="Fantasia:" label-for="emp_fantasia">
                     <b-form-input type="text" size="sm" id="emp_fantasia" 
                           v-model="empresa.emp_fantasia"  maxlength="255" />
                  </b-form-group>
               </b-col>                 				
            </b-row>
            <b-row>
               <b-col md="4" sm="12">
                  <b-form-group label="CNPJ" label-for="emp_cnpj">   
                        <b-form-input type="text" size="sm" id="emp_cnpj" 
                           v-model="empresa.emp_cnpj" maxlength="20"/>
                  </b-form-group>
               </b-col> 
               <b-col md="4" sm="12">						
                  <b-form-group label="Insc.Estadual:" label-for="emp_insc_estadual">
                     <b-form-input size="sm" type="text" id="emp_insc_estadual" 
                           v-model="empresa.emp_insc_estadual"
                              maxlength="255" required />
                  </b-form-group>
               </b-col>
               <b-col md="4" sm="12">
                  <b-form-group label="Inc. Municipal" label-for="emp_insc_municipal">
                     <b-form-input type="text" size="sm" id="emp_insc_municipal" 
                           v-model="empresa.emp_insc_municipal" maxlength="255" required />
                  </b-form-group>						
               </b-col>
            </b-row>
            <b-row>
               <b-col md="6" sm="12">
                  <b-form-group label="Bairro:" label-for="emp_end_bairro">
                     <b-form-input type="text" size="sm" id="emp_end_bairro" 
                           v-model="empresa.emp_end_bairro"  maxlength="255" />
                  </b-form-group>
               </b-col> 
               <b-col md="3" sm="12">
                  <b-form-group label="CEP" label-for="emp_end_cep">   
                        <b-form-input type="text" size="sm" id="emp_end_cep" 
                           v-model="empresa.emp_end_cep" maxlength="20"/>
                  </b-form-group>
               </b-col>   		
                <b-col md="3" sm="12">
                  <b-form-group label="Estado:" label-for="emp_end_uf">
                     <b-form-select v-model="empresa.emp_end_uf" :options="estados" 
                            size="sm" id="emp_end_uf" @blur.native="loadCidades"  required>
                     </b-form-select>
                  </b-form-group>
               </b-col> 		            
            </b-row>
            <b-row>
               <b-col md="5" sm="12">                  
                  <b-form-group label="Cidade" label-for="emp_end_cidade">
                     <b-form-select v-model="empresa.emp_end_cidade" :options="cidades"
                            readonly required size="sm" id="emp_end_cidade"                           >					      
                     </b-form-select>                           
                  </b-form-group>
               </b-col>   
               <b-col md="5" sm="12">
                  <b-form-group label="Rua" label-for="emp_end_rua">   
                        <b-form-input type="text" size="sm" id="emp_end_rua" 
                           v-model="empresa.emp_end_rua" maxlength="20"/>
                  </b-form-group>
               </b-col>
               <b-col md="2" sm="12">
                  <b-form-group label="Nº" label-for="emp_end_nr">   
                        <b-form-input type="text" size="sm" id="emp_end_nr" 
                           v-model="empresa.emp_end_nr" maxlength="20"/>
                  </b-form-group>
               </b-col>
            </b-row>
            <b-row>   			
               <b-col md="2" sm="12">
                  <b-form-group label="Juros" label-for="emp_juros">   
                        <b-form-input type="text" size="sm" id="emp_juros" 
                           v-model="empresa.emp_juros" maxlength="20"/>
                  </b-form-group>
               </b-col>   				
               <b-col md="2" sm="12">
                  <b-form-group label="Ctl Nota" label-for="img2">   
                        <b-form-input type="text" size="sm" id="emp_ctrl_nota" 
                           v-model="empresa.emp_ctrl_nota" maxlength="20"/>
                  </b-form-group>
               </b-col>   				
               <b-col md="8" sm="12">
                  <b-form-group label="Observação" label-for="emp_obs">   
                        <b-form-input type="text" size="sm" id="emp_obs" 
                           v-model="empresa.emp_obs" maxlength="20"/>
                  </b-form-group>
               </b-col> 				
            </b-row>
            <b-row>
               <b-col md="3" sm="12">
                  <b-form-group label="Foto:" label-for="fot_picture">
                     <b-form-input type="text" size="sm" id="fot_picture" 
                           v-model="empresa.fot_picture"  maxlength="255" />
                  </b-form-group>
               </b-col> 
               <b-col md="3" sm="12">
                  <b-form-group label="Imagem 1" label-for="img1">   
                        <b-form-input type="text" size="sm" id="img1" 
                           v-model="empresa.img1" maxlength="20"/>
                  </b-form-group>
               </b-col>   				
               <b-col md="3" sm="12">
                  <b-form-group label="Imagem 2" label-for="img2">   
                        <b-form-input type="text" size="sm" id="img2" 
                           v-model="empresa.img2" maxlength="20"/>
                  </b-form-group>
               </b-col>   				
               <b-col md="3" sm="12">
                  <b-form-group label="Imagem 3" label-for="img3">   
                        <b-form-input type="text" size="sm" id="img3" 
                           v-model="empresa.img3" maxlength="20"/>
                  </b-form-group>
               </b-col> 				
            </b-row>
            <b-row>
               <b-button variant="primary" v-if=" mode === 'save' " @click="save"> Salvar </b-button>
               <b-button class="ml-2"  @click="reset"> Cancelar </b-button>
            </b-row>
      </b-form> 
      <hr>
         <b-row>
                <b-col md="5" sm="12">	
                    <b-input-group class="mb-3" size="sm" prepend="Pesquisa por nome:"  >
                        <b-form-input size="sm" type="text" id="emp-nome" 
                            v-model="emp_nome_pesquisa" maxlength="255" />
                        <b-input-group-append>
                            <b-button size="sm" text="Button" variant="info" @click="findEmpresa()">
                                <i class="fa fa-search-plus" aria-hidden="true"></i></b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-col>
       </b-row>
      <hr>
         <b-table striped hover :items="empresas" :fields="fields">
            <template slot="actions" slot-scope="data">
               <b-button size="sm" variant="warning" @click="editEmpresa(data.item.emp_codigo)" >
                  <i class="fa fa-pencil"></i>
               </b-button>
               <b-button size="sm" variant="danger" @click="empresa = data.item" 
                  v-b-modal.modal-clic class="ml-1"><i class="fa fa-trash"></i>
               </b-button>
               <b-button size='sm' variant="success" @click="fichaEmpresa(data.item.emp_codigo)" class="ml-1"
                  v-b-tooltip.hover title="Relatorio em PDF">
                  <i class="fa fa-book"></i>
               </b-button>
            </template>
         </b-table>
         
         <b-pagination size="sm"  v-model="page" pills :total-rows="count" :per-page="limit" 
               first-text="⏮"   prev-text="⏪" next-text="⏩" last-text="⏭" class="mt-4" align="center"/>

         <modal-delete title="da Empresa" :codigo="empresa.emp_codigo" 
            :nome="empresa.emp_nome" />
   </div>
</template>

<script>

import { baseApiUrl, showError } from '@/global'
import ModalDelete from '@/components/template/ModalDelete'
import axios from 'axios'

export default {
   components: { ModalDelete },
   name: 'Empresas',
   data(){
      return {
        mode: 'save',
        page: 1,
        limit: 3,
        count: 0,
        estados: [],
        cidades: [],
        empresa: {},
        empresas: [],
        emp_nome_pesquisa: '',
        fields: [
            {key:'emp_codigo', label:'Codigo', sortable:true},
            {key:'emp_gerencia', label:'Gerencia'},
            {key:'emp_nome', label:'Empresa', sortable:true},
            {key:'emp_fantasia', label:'Fantasia', sortable:true},
            {key:'emp_cnpj', label:'CNPJ', sortable:true},
            {key:'actions', label:'Ações'}
        ] 
      }
   },

   methods:{
      fichaEmpresa(id){
         const url = `empresa/pdf/${id}`
         this.$router.push({ name: 'RelPdf', params: { url } })
      },

      findEmpresa(){
            // eslint-disable-next-line
            // console.log('pesquisar funcionario')
            const url = `${baseApiUrl}/empresa/findnome/${this.emp_nome_pesquisa}`
            axios.get(url)
                .then(res =>{
                    this.empresas = res.data.data
                    this.page = res.data.current_page
                    this.limit = res.data.per_page
                    this.count = res.data.total
                })     
       },
      
      loadEmpresas(){
         const url = `${baseApiUrl}/empresa/tbl?page=${this.page}`
         axios.get(url)
               .then(res =>{
                  // eslint-disable-next-line
                  console.log(res.data);
                  this.empresas = res.data.data
                  this.page = res.data.current_page
                  this.limit = res.data.per_page
                  this.count = res.data.total
               })      
      },

      loadEstados(){
         const url = `${baseApiUrl}/estado`
         axios.get(url)
            .then(res => this.estados = res.data)     
      },

      loadCidades(){           
         const url = `${baseApiUrl}/cidade/${this.empresa.emp_end_uf}`
         axios.get(url)
            .then(res =>this.cidades = res.data)      
      },

      reset(){
         this.mode = 'save' ,
         this.empresa = {},
         this.loadEmpresas()
      },

      editEmpresa(id, mode='save' ){

         this.mode = mode
         const url = `${baseApiUrl}/empresa/item/${id}`
         axios.get(url)
            .then(res =>this.empresa = res.data)  

      },

      save(){
         // eslint-disable-next-line
         console.log(this.empresa);
         //this.empresa. = "0"
         const method = this.empresa.emp_codigo ? 'put':'post'
         const id = this.empresa.emp_codigo ? `/${this.empresa.emp_codigo}` :''
         const url = `${baseApiUrl}/empresa${id}`
         axios[method](url, this.empresa)
            .then(() => {
               this.$toasted.global.defaultSuccess()
               this.reset()
            })
            .catch(showError)
      },
      
      remove(){
         const id = this.empresa.emp_codigo
         axios.delete(`${baseApiUrl}/empresa/${id}`)
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
         this.loadEmpresas()
      }
   },

   mounted(){
      this.loadEmpresas()
      this.loadEstados()
   }

}
</script>

<style>

</style>


	
	
	
	
	
	
	
	
	`emp_end_cidadex` VARCHAR(255) NOT NULL COLLATE 'latin1_swedish_ci',
	
	
	
	`emp_updateat` DATETIME NULL DEFAULT NULL,
	`emp_createat` DATETIME NULL DEFAULT NULL,
	`fot_picture` LONGBLOB NOT NULL,
	
	`img0` VARCHAR(12) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
	`img1` VARCHAR(12) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
	`img2` VARCHAR(12) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
	`img3` VARCHAR(12) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
	