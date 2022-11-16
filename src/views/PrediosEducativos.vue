<template>
   <v-card class="mx-auto ma-4 grey lighten-5 elevation-3" outlined>
        <v-card-title>{{datat}}</v-card-title>
        <v-card-subtitle>Esta informacion corresponde a al gestion : {{predioSec.gestion}}</v-card-subtitle>
        <v-card-text>
         
          <v-row>
            <v-col cols="12">
              <v-select
              v-model="id_predSel"
              :items="predioS"
              @change="onChange"
              item-text="nombre_predio"
              item-value="predioid"
              label="Seleccione un predio secundario.."
              return-object
              ></v-select>
            </v-col>
          </v-row>

        </v-card-text>
        <v-card-actions>
          <v-btn text color="primary" @click="dialoga=true">Crear predio secundario</v-btn>
        </v-card-actions>
      </v-card>
</template>
<script>
export default {
    data: ()=>({
        idioma : null,
        datat : null,
        dialoga : false,
        id_predSel : 0,
        predioSec : {
          predioid: 0,
          jgid: 0,
          gestion: 2019,
          zona: "Sin Datos",
          direccion: "Sin datos",
          nivel: "sin datos",
          nombre_predio: "Sin datos"
        },
        predioP : [],
        predioS :[]
    }),
    mounted(){
        this.idioma = this.$idioma.predios
        this.enviaEnc()
        this.leePredioP()
        this.leePredioT()
        this.iniPredSel()
    },

    methods:{
        enviaEnc(){
           this.datat = this.idioma.nombre
            this.$root.$emit('enviaTitulo',this.datat);
        },
        async leePredioT(){
        const resp = await this.$axios.get(this.$server + '/infrapredios/40730040/2019')
        this.predioS = resp.data
        },
        async leePredioP(){
        const resp = await this.$axios.get(this.$server + '/infrapredio_p/40730040/2019')
        this.predioP = resp.data
       
        },
        onChange(entry) { 
            
          let info_p = {'id' : entry.predioid, 'nom' : entry.nombre_predio}
          this.$root.$emit('enviaIdPredio',info_p);
         },
        iniPredSel(){
          if(localStorage.getItem('info_p')){
            let info_pred = JSON.parse(localStorage.getItem('info_p'))
            this.id_predSel = info_pred.id
          }else{
            this.id_predSel = this.predioP.predioid
          }
        }
    }
}
</script>
<style>
    
</style>