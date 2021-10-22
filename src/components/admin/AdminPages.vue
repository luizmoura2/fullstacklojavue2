<template>
  <div class="admin-pages">
  <!-- <div class="admin-pages" @cadestoque="actvEstoque($event)"> -->
    <PageTitle
      icon="fa fa-cogs"
      main=" Administração do Sistema"
      sub="Cadastros & Cia"
    />

    <div class="admin-pages-tabs"  >
      <b-card no-body>
         <b-tabs card v-model="tabIndex">
          <b-tab title="Funcionarios" active @click="setTab(0)">
            <Funcionarios />
          </b-tab>
          <b-tab title="Clientes" @click="setTab(1)">
            <Clientes />
          </b-tab>
          <b-tab title="Forenecedores" @click="setTab(2)">
            <Fornecedores />
          </b-tab>
          <b-tab title="Produtos" @click="setTab(3)">
            <Produtos />
          </b-tab>         
          <b-tab title="Estoques" @click="setTab(4)">
            <Estoques />
          </b-tab>
               <!-- <b-tab title="Empresas">
                  <Empresas />
               </b-tab> -->
          <!-- <b-tab title="Promoções">
                  <Promocoes />
          </b-tab> -->
          
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/template/PageTitle";
import Funcionarios from "@/components/admin/Funcionarios";
import Clientes from "@/components/admin/Clientes";
import Fornecedores from "@/components/admin/Fornecedores";
import Produtos from "@/components/admin/Produtos";
import Estoques from "@/components/admin/Estoques";
import Empresas from "@/components/admin/Empresas";

export default {
  name: "AdminPages",
  
  components: {
    PageTitle,
    Funcionarios,
    Clientes,
    Fornecedores,
    Produtos,
    Estoques,
    Empresas
  },
  methods: {
    setTab(n){
      this.$store.commit('setTabEstoque', n ) 
    }
  },
  computed:{
      tabIndex () { 
        return this.$store.state.tabIndex //actv
      },
      actv () { 
        return this.$store.state.actv
      }      
  }
};
</script>

<style>
</style>
