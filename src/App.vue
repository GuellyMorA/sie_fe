
<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <SideBar></SideBar>
    </v-navigation-drawer>

    <v-app-bar app fixed color="primary" elevate-on-scroll elevation="2">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{titulo}} de : {{idPredio}}  </v-toolbar-title>
      <v-spacer></v-spacer>


      <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>
    <v-main>
      <v-container  class="py-8 px-6" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "./components/SideBar.vue";
//import Header from "./components/HeaderComponent.vue";

  export default {
    components: {
    SideBar,
    //Header
  },
    data: () => ({ drawer: null, titulo:'SIE', idPredio : 'Seleccione un predio..' }),
    watch :{
      $route(){
          this.$root.$on('enviaTitulo', (code) => {
          this.titulo = code;
        });
        this.$root.$on('enviaIdPredio', (code) => {
          localStorage.setItem('info_p', JSON.stringify(code))
          this.idPredio = code.nom;
        });
      }
    },
    methods: {
    },
  }
</script>