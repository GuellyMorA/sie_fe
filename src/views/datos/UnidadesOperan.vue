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
                    Atras 
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
    data: ()=>({
        idioma : null,
        datat : null,
        infoPredio : null,
        unidadesOpe : null,
        atras : null,
        color : null
    }),

    mounted(){
        this.idioma = this.$idioma.datos
        this.infoPredio = JSON.parse(localStorage.getItem('info_p'))
        this.enviaEnc()
        this.leeUnidadesOperan()
        this.atras= this.idioma.menu
        this.color= this.idioma.color
    },

    methods:{
        enviaEnc(){
            this.datat = this.idioma.items.unidades
            this.$root.$emit('enviaTitulo',this.datat);
        },
        async leeUnidadesOperan(){
        const resp = await this.$axios.get(this.$server + '/infrapredio_uni_oper/'+this.infoPredio.id)
        console.log(resp.data);
        this.unidadesOpe = resp.data
        },
    }
}
</script>
<style>
    
</style>