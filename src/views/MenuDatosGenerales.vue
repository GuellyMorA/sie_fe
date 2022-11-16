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
        this.idioma = this.$idioma.datos
        this.links = [
            [this.idioma.imgs.ubicacion,this.idioma.items.ubicacion,this.idioma.detalle.ubicacion,this.idioma.url.ubicacion],
            [this.idioma.imgs.unidades,this.idioma.items.unidades,this.idioma.detalle.unidades,this.idioma.url.unidades],
            [this.idioma.imgs.registro,this.idioma.items.registro,this.idioma.detalle.registro,this.idioma.url.registro],
            [this.idioma.imgs.vias,this.idioma.items.vias,this.idioma.detalle.vias,this.idioma.url.vias],
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