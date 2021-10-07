<template>
  <div class="admin-pages">
    <PageTitle
      icon="fa fa-cogs"
      main=" Administração do Sistema"
      sub="Cadastros & Cia"
    />

    <div class="admin-pages-tabs">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Funcionarios" active>
            <Funcionarios />
          </b-tab>
          <b-tab title="Clientes">
            <Clientes />
          </b-tab>
          <b-tab title="Forenecedores">
            <Fornecedores />
          </b-tab>
          <!-- <b-tab title="Produtos">
            <Produtos />
          </b-tab> -->
         
          <!-- <b-tab title="Estoques">
                  <Estoques />
               </b-tab>
               <b-tab title="Empresas">
                  <Empresas />
               </b-tab> -->
          <b-tab title="Promoções">
                  <Promocoes />
          </b-tab>
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
    Empresas,
  },
};
</script>

<style>
</style>
