<template>
    <div > 
        <nav class="navbar navbar-dark bg-dark">
            <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
                <b-button-group class="mx-1">
                    <b-input-group size="md" prepend="Páginas:">
                    <b-form-input v-model.number="page" type="number" style="width: 5em" class="text-right"> /{{numPages}} </b-form-input>
                    </b-input-group>                
                <b-button @click="rotate += 90">&#x27F3;</b-button>
                <b-button @click="rotate -= 90">&#x27F2;</b-button>
                <b-button @click="$refs.pdf.print()" title="Imprimir"><i class="fa fa-print" aria-hidden="true"></i></b-button>
                </b-button-group>
                <b-button-group class="mx-1">
                    <b-button @click="countPage(0)">&laquo;</b-button>
                    <b-button @click="countPage(-1)">&lsaquo;</b-button>
                    <b-button @click="countPage(1)">&rsaquo;</b-button>
                    <b-button @click="countPage('x')">&raquo;</b-button>
                </b-button-group>
            </b-button-toolbar>
        </nav>
        <blockquote class="box"> 
            <div>
                <pdf v-if="show" ref="pdf" class="box-pdf" :src="src" :page="page" 
                        :rotate="rotate" @password="password" @progress="loadedRatio = $event" 
                        @error="error"  @num-pages="numPages = $event" @link-clicked="page = $event">
                </pdf>            
            </div>
        </blockquote>
</div>
</template>
<script>

import { baseApiUrl } from '@/global'
import 'bootstrap/dist/css/bootstrap.min.css'
import pdf from 'vue-pdf'

export default {
    components: {
        pdf: pdf
    },
    props: ['url'],
    data () {
        return {
            show: true,
            src:'',
            loadedRatio: 0,
            page: 1,
            numPages: 0,
            rotate: 0,
        }
    },
    methods: {
        password: function(updatePassword) {

            updatePassword(prompt('password is "test"'));
        },
        error: function(err) {
           // eslint-disable-next-line
            console.log(err);
        },
        countPage(n){
            
            if ( n == 0 ){
                this.page = 1
            }else if ( isNaN(n) ) {
                this.page = this.numPages
            }else{
                this.page = this.page+n
            
                if (this.page >=  this.numPages){
                    this.page = this.numPages
                }
                if (this.page <= 1){
                    this.page = 1
                }
            }
        }
    },
    mounted(){
        this.src = `${baseApiUrl}/${this.url}` //`http://localhost:8000/api/funcionario/pdf/${id}`
    }
}
</script>

<style>
    .box {         
        height: 75vh;        
        border: 3px solid rgb(22, 21, 21);
        overflow: scroll;
        background: rgb(231, 207, 243);
        padding: 30px;
    }

    .box-pdf {      
      position: absolute;      
      padding: 2px 2px;
      background-color: #f9f9f9;
      min-width: 170px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.5);
      z-index: 1;
    }

    blockquote {
        background: #f0ee77;
        border-radius: 5px;
        margin: 16px 0;
    }
</style>