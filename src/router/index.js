import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import Dashboard from "../views/Dashboard.vue"
import MenuDatosGenerales from '../views/MenuDatosGenerales.vue'
import MenuCaracteristicas from '../views/MenuCaracteristicas.vue'
import MenuAmbientes from '../views/MenuAmbientes.vue'
import MenuServicios from '../views/MenuServicios.vue'
import MenuRiesgos from '../views/MenuRiesgos.vue'
import PrediosEducativos from '../views/PrediosEducativos.vue'
import Operartivo from '../views/Operativo.vue'
import UbicacionEdificio from '../views/datos/UbicacionEdificio.vue'
import UnidadesOperan from '../views/datos/UnidadesOperan.vue'
import RegistroFotografico from '../views/datos/RegistroFotografico.vue'
import ViasAcceso from '../views/datos/ViasAcceso.vue'
import Terreno from '../views/caracteristicas/Terreno.vue'
import Edificacion from '../views/caracteristicas/Edificacion.vue'
import Accesibilidad  from '../views/caracteristicas/Accesibilidad.vue'
import Pedagogicos from '../views/ambientes/Pedagogicos.vue'
import NoPedagogicos from '../views/ambientes/NoPegagogicos.vue'
import OtrosAmbientes from '../views/ambientes/OtrosAmbientes.vue'
import Electricidad from '../views/servicios/Electricidad.vue'
import Agua  from '../views/servicios/Agua.vue'
import Saneamiento  from '../views/servicios/Saneamiento.vue'
import OtrosServicios  from '../views/servicios/OtrosServicios.vue'
import RiesgosPredios from '../views/riesgos/RiesgosPredios.vue'
import RiesgosInstitucion from '../views/riesgos/RiesgosInstitucion.vue'
import RiesgosDelitos from '../views/riesgos/RiesgosDelitos.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Dashboard
  },
  {
    path: '/datos',
    name: 'datosGenerales',
    component: MenuDatosGenerales
  },
  {
    path: '/caracteristicas',
    name: 'menuCaracteristicas',
    component: MenuCaracteristicas
  },
  {
    path: '/ambientes',
    name: 'menuAmbientes',
    component: MenuAmbientes
  },
  {
    path: '/servicios',
    name: 'menuServicios',
    component: MenuServicios
  },
  {
    path: '/riesgos',
    name: 'menuRiesgos',
    component: MenuRiesgos
  },
  {
    path: '/predios',
    name: 'prediosEducativos',
    component: PrediosEducativos
  },
  {
    path: '/operativo',
    name: 'operativo',
    component: Operartivo
  },
  //Datos Generales
  {
    path: '/registrofotografico',
    name: 'registroFotografico',
    component: RegistroFotografico
  },
  {
    path: '/ubicaionedificio',
    name: 'ubicaionEdificio',
    component: UbicacionEdificio
  },
  {
    path: '/unidadesoperan',
    name: 'unidadesOperan',
    component: UnidadesOperan
  },
  {
    path: '/viasacceso',
    name: 'viasAcceso',
    component: ViasAcceso
  },
  //Caracteristicas
  {
    path: '/terreno',
    name: 'terreno',
    component: Terreno
  },
  {
    path: '/edificacion',
    name: 'edificacion',
    component: Edificacion
  },
  {
    path: '/accesibilidad',
    name: 'accesibilidad',
    component: Accesibilidad
  },
  {
    path: '/pedagogicos',
    name: 'pedagogicos',
    component: Pedagogicos
  },
  {
    path: '/nopedagogicos',
    name: 'nopedagogicos',
    component: NoPedagogicos
  },
  {
    path: '/otrosambientes',
    name: 'otrosambientes',
    component: OtrosAmbientes
  },
  {
    path: '/electricidad',
    name: 'electricidad',
    component: Electricidad
  },
  {
    path: '/agua',
    name: 'agua',
    component: Agua
  },
  {
    path: '/saneamiento',
    name: 'saneamiento',
    component: Saneamiento
  },
  {
    path: '/otrosservicios',
    name: 'otrosservicios',
    component: OtrosServicios
  }, 
  //Riesgos
  {
    path: '/riesgospredios',
    name: 'riesgospredios',
    component: RiesgosPredios
  },
  {
    path: '/riesgosinstitucion',
    name: 'riesgosinstitucion',
    component: RiesgosInstitucion
  },
  {
    path: '/riesgosdelitos',
    name: 'riesgosdelitos',
    component: RiesgosDelitos
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
