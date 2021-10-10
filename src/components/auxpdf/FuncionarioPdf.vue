<template>
    <div>         
        <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
            <b-button-group class="mx-1">
                <b-input-group size="md" prepend="Páginas:">
                <b-form-input v-model.number="page" type="number" style="width: 5em" class="text-right"> /{{numPages}} </b-form-input>
                </b-input-group>                
            <b-button @click="rotate += 90">&#x27F3;</b-button>
            <b-button @click="rotate -= 90">&#x27F2;</b-button>
            <b-button @click="$refs.pdf.print()">print</b-button>
            </b-button-group>
        </b-button-toolbar>
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

import 'bootstrap/dist/css/bootstrap.min.css'
import pdf from 'vue-pdf'

export default {
    components: {
        pdf: pdf
    },
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
        }
    },
    mounted(){
        let id = this.$route.params.id
        // eslint-disable-next-line
        //console.log(this.$route.params.id)
        this.src = `http://localhost:8000/api/funcionario/pdf/${id}`
    }
}
</script>

<style>
    .box {         
        height: 80vh;        
        border: 3px solid rgb(22, 21, 21);
        overflow: scroll;
        background: #dddca8;
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