<template>
    <div>
        <v-col>
        <v-card class="mx-auto ma-4 rounded-lg elevation-2" outlined :color="color">
            <v-card-title class="text-h5">
              <v-row >
                <v-col  class="text-left">
                    <h3>{{datat}}</h3>
                </v-col>
                    <v-col  class="text-right">
                        
                    <v-btn color="success" class="rounded-lg " link :to="atras"  >
                    Seleccione un predio 
                    </v-btn>
                </v-col>
            </v-row> 
            </v-card-title>
            <v-card-subtitle>Esta informacion es solo de lectura</v-card-subtitle>
            
            <v-card-text>
                <v-skeleton-loader
                    class="mx-lg-auto"
                    max-width="400"
                    type="card"
                    ></v-skeleton-loader>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="primary" @click="dialoga=true">Modificar</v-btn>
            </v-card-actions>
        </v-card>
       </v-col>

    </div>
</template>
<script>

export default {

  components: {
   
  },

   

    data: ()=>({
        i : null,
        datat : null,
        links :[],
        dialoga : false,
        id_predS : 0,
        predioSec : {
          predioid: 0,
          jgid: 0,
          gestion: 2019,
          zona: "Sin Datos",
          direccion: "Sin datos",
          nivel: "sin datos",
          nombre_predio: "predio"
        },
        predioP : [],
        predioS :[],
        atras:'/predios',
        color:null
    }),
    mounted() {
        this.i = this.$idioma.dashboard
        this.links = []
        this.enviaEnc()
        this.leePredioP()
        this.leePredioS()
        this.color= this.idioma.color

        
    },

    methods: {
        enviaEnc(){
            this.datat = this.i.nombre
            this.$root.$emit('enviaTitulo',this.datat);
        },

        async leePredioP(){
        const resp = await this.$axios.get(this.$server + '/infrapredio_p/40730040/2019')
        this.predioP = resp.data
        },
        async leePredioS(){
        const resp = await this.$axios.get(this.$server + '/infrapredio_s/40730040/2019')
        this.predioS = resp.data
        },
        onChange(entry) { 
          
          this.$idPreds = entry.predioid
         },
       
    }
}

</script>
<style lang="es">
    
</style>