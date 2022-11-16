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
                <v-col cols="12" sm="6">
                <p>{{formulario.id}} : {{ubicacion.id}}</p>
                <p>{{formulario.cod_depto}} : {{ubicacion.cod_depto}}</p>
                <p>{{formulario.cod_prov}} : {{ubicacion.cod_prov}}</p>
                <p>{{formulario.cod_mun}} : {{ubicacion.cod_mun}}</p>
                <p>{{formulario.cod_canton}} : {{ubicacion.cod_canton}}</p>
                <p>{{formulario.departamento}} : {{ubicacion.departamento}}</p>
                <p>{{formulario.provincia}} : {{ubicacion.provincia}}</p>
                <p>{{formulario.municipio}} : {{ubicacion.municipio}}</p>
                <p>{{formulario.canton}} : {{ubicacion.canton}}</p>
                <p>{{formulario.localidad}} : {{ubicacion.localidad}}</p>
                <p>{{formulario.zona}} : {{ubicacion.zona}}</p>
                <p>{{formulario.direccion}} : {{ubicacion.direccion}}</p>
              
            </v-col>

            </v-card-text>
            <v-card-actions>
              <v-btn text color="primary" @click="dialoga=true">Modificar</v-btn>
            </v-card-actions>
          </v-card>
          <v-row justify="center">
              <v-dialog
              v-model="dialoga"
              persistent
              max-width="600px"
              >
        
        <v-card>
          <v-card-title>
            <span class="text-h5">Modificar : {{datat}}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Legal first name*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Legal middle name"
                    hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Legal last name*"
                    hint="example of persistent helper text"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Email*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Password*"
                    type="password"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Age*"
                    required
                  ></v-select>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-autocomplete
                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    label="Interests"
                    multiple
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="dialoga = false"
            >
              Cerrar
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="dialoga = false"
            >
              Guardar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
          </v-row>
        </v-col>
    </div>
    
    
</template>
<script>
export default {
    data: ()=>({
        idioma : null,
        formulario :[],
        dialoga : false,
        datat : null,
        atras : null,
        selPred : null,
        infoPredio : null,
        ubicacion : {
            id:0,
            cod_depto:0,
            departamento:null,
            cod_prov:0,
            provincia:null,
            cod_mun:0,
            municipio:null,
            cod_canton:null,
            canton:null,
            cod_local:null,
            localidad:null,
            codigo_dist:null,
            distrito:null,
            zona:null,
            direccion:null,
            gestion:null,
            prediotipo:null,
        },
        labels:{
            code : null
        }
    }),

    mounted(){
        this.idioma = this.$idioma.datos
        this.infoPredio = JSON.parse(localStorage.getItem('info_p'))
        this.formulario = this.$idioma.datos.sub.ubicacion.formulario
        this.labels.code = this.formulario.cod_e
        this.selPred = this.$idPreds
        this.atras= this.idioma.menu
        this.color= this.idioma.color

        this.enviaEnc()
        this.leeUbicacion()
    },

    methods:{
        enviaEnc(){
            this.datat = this.idioma.items.ubicacion
            this.$root.$emit('enviaTitulo',this.datat);
        },
        async leeUbicacion(){
        const resp = await this.$axios.get(this.$server + '/infrapredio_ubicacion/'+this.infoPredio.id)
        console.log(resp.data);
        this.ubicacion = resp.data
        },
    }
}
</script>
<style>
    
</style>