<template>
    <v-container
        class="fill-height"
        fluid
    >
        <v-fade-transition mode="out-in">

            <v-row>

                <v-col cols="12" v-for="[img,tit,txt,ruta] in links" :key="tit">

                    <v-card>
                        <v-img
                        :src="img"
                        height="300px"
                        class="align-end"
                        >
                            <v-card-title class="indigo darken-2 text-h6 txt">
                                <h2 class="white--text">
                                {{tit}}
                                </h2>
                            </v-card-title>
                        </v-img>

                        <v-card-text class="text--primary">
                            <h3>{{txt}}</h3>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-btn
                                color="primary"
                                link :to="ruta"
                            >
                                Ir
                            </v-btn>
                        </v-card-actions>
                        
                    </v-card>

                </v-col>

            </v-row>
            
        </v-fade-transition>
    </v-container>
</template>
<script>

export default {
   
    data: ()=>({
        idioma : null,
        links :[]
    }),

    mounted(){
        this.idioma = this.$idioma.servicios
        this.links = [
            [this.idioma.imgs.electricidad,this.idioma.items.electricidad,this.idioma.detalle.electricidad,this.idioma.url.electricidad],
            [this.idioma.imgs.agua,this.idioma.items.agua,this.idioma.detalle.agua,this.idioma.url.agua],
            [this.idioma.imgs.saneamiento,this.idioma.items.saneamiento,this.idioma.detalle.saneamiento,this.idioma.url.saneamiento],
            [this.idioma.imgs.otrosservicios,this.idioma.items.otrosservicios,this.idioma.detalle.otrosservicios,this.idioma.url.otrosservicios],
        ]
        this.enviaEnc()
    },

    methods:{
        enviaEnc(){
            let datat = this.idioma.nombre
            this.$root.$emit('enviaTitulo',datat);
        }
    }

}
</script>
<style>
.txt {
  opacity: 0.8;
}

.txt:hover {
  opacity: 1.0;
}   
</style>