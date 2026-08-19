<template>
  <div :class="{ 'flex flex-col items-center justify-center overflow-hidden min-h-dvh': !isOpen }">
    <ClosedInvitation v-if="!isOpen" @open="isOpen = true" />
    <!--
      Sin max-height: el contenedor de scroll mide exactamente lo mismo que sus
      secciones. Cualquier tope aquí desalinea el scroll-snap y va acumulando
      desfase sección tras sección.
    -->
    <Invitation v-else />
  </div>
</template>

<script>
import ClosedInvitation from '../components/ClosedInvitation.vue'
import Invitation from '../components/Invitation/index.vue'
import imagenesInvitacion from '../assets/imagenes-invitacion.js'

export default {
  name: 'Invitacion',
  components: {
    ClosedInvitation,
    Invitation,
  },
  data() {
    return {
      isOpen: false,
    }
  },
  mounted() {
    // Mientras el invitado ve el sobre cerrado aprovechamos para ir bajando las
    // imágenes de adentro. Así la invitación abre sin huecos aunque la señal
    // esté floja, que es el caso común en Ocotes de Moya.
    this.precargarImagenes()
  },
  methods: {
    precargarImagenes() {
      for (const url of imagenesInvitacion) {
        const img = new Image()
        img.decoding = 'async' // que no bloquee el hilo principal
        img.src = url
      }
    }
  },
}
</script>
