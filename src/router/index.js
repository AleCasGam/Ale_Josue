import { createRouter, createWebHashHistory } from 'vue-router'
import Invitacion from '../views/Invitacion.vue'
import Hospedaje from '../views/Hospedaje.vue'

// Historial con # (queda /#/hospedaje). Es la opción segura para un sitio
// estático: al recargar o compartir el enlace no depende de que el servidor
// redirija todo a index.html, que es lo que exigiría createWebHistory().
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'invitacion', component: Invitacion },
    { path: '/hospedaje', name: 'hospedaje', component: Hospedaje },
    // cualquier otra cosa regresa a la invitación
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})
