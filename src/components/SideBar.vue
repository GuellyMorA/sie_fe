<template>
  <span>
    <v-img src="/imgs/est.jpg" class="pa-4">
      <div class="text-center mt-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <v-img aspect-ratio="30" src="/imgs/user.png" />
        </v-avatar>
        <h2 class="white--text">INFRASTRUCTURA</h2>
      </div>

    </v-img>

    <v-divider></v-divider>

    <v-list>
      <v-list-item v-for="[icon, text, rutas] in links" :key="icon" link :to="rutas">
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>  
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </span>
</template>

<script>
export default {

  props:['drawer'],
  name: 'SideBar',

  data: () => ({
    links: [
      ['mdi-send', 'Inicio','/'],
      ['mdi-sitemap-outline', 'Predios Educativos','/predios'],
      ['mdi-list-box-outline', 'Datos Generales','/datos'],
      ['mdi-clipboard-list-outline', 'Caracteristicas','/caracteristicas'],
      ['mdi-chair-school', 'Ambientes','/ambientes'],
      ['mdi-format-list-text', 'Servicios Basicos','/servicios'],
      ['mdi-shield-alert-outline', 'Gestion de Riesgos','/riesgos'],
      ['mdi-text-box-check', 'Operativo','/operativo'],

    ],

  }),
}
</script>
