<template>
    <div>
        <v-card class="mx-auto ma-4" outlined>
        <v-card-title>{{titulo}}</v-card-title>
        <v-card-subtitle>Esta informacion corresponde a al gestion : </v-card-subtitle>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6">
           <p>Nombre del predio : {{predio[0].nombre_predio}}</p>
           <p>Nivel : {{predio[0].nivel}}</p>
           
            </v-col>
            <v-col cols="12" sm="6">
           <p>Zona : {{predio[0].zona}}</p>
           <p>Dirección : {{predio[0].direccion}}</p>
           
            </v-col>
            <v-col>

            </v-col>
          </v-row>
          <v-row>
      <v-col cols="12">
        <v-select
        :v-model="secundario"
        :items=itemsl
        @change="onChange"
        item-text="nombre_predio"
        item-value="predioid"
        label="Seleccione un predio secundario.."
        return-object
      ></v-select>
      <pre>Predio Sel: {{ secundario }}</pre>
      <pre>lista de Predios: {{ predio }}</pre>
      <pre>itemsl: {{ itemsl }}</pre>
      </v-col>
    </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="primary" @click="dialoga=true">Crear predio secundario</v-btn>
        </v-card-actions>
      </v-card>
        
    </div>
</template>
<script>
export default {
    props : {
        titulo : String,
        predio : Array,
        secundario : Array,
        itemsl : Array
    },
    methods : {
        onChange(entry) { 
            console.log(entry.predioid );
            this.$idPreds = entry.predioid 
            this.$root.$emit('enviaIdSec',this.datat);
        },
    }
}
</script>
<style>
    
</style>