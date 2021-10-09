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
        <div>
            <div v-if="loadedRatio > 0 && loadedRatio < 1" style="background-color: green; color: white; text-align: center" :style="{ width: loadedRatio * 100 + '%' }">{{ Math.floor(loadedRatio * 100) }}%</div>
            <pdf v-if="show" ref="pdf" style="border: 1px solid red" :src="src" :page="page" :rotate="rotate" @password="password" @progress="loadedRatio = $event" @error="error" @num-pages="numPages = $event" @link-clicked="page = $event"></pdf>
        </div>
</div>
</template>
<script>
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
  .dis {
      position: absolute;
      height: 100vh;
      display: block;
      
      align-content: center;
      align-items: center;
  }

</style>