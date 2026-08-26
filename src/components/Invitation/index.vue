<template>
  <div class="invitacion-scroll">

    <!-- Botón de música, flotante sobre todas las secciones -->
    <MusicPlayer />

    <!-- ── Sección 1: Portada ── -->
    <section class="seccion items-center justify-center">
      <img class="sobre-flores-entrada pl-4 pr-[0.9rem]" src="../../assets/images/sobre-abierto-sombra.webp" alt="Sobre Abierto" />
    </section>

    <!-- Seccion 2: Informacion y contador -->
    <ViewSection1 class="seccion" />
    <!-- Seccion 2: Invitacion y foto -->
    <ViewSection2 class="seccion" />
    <!-- Seccion 4: Donde y cuando, ceremonia -->
    <ViewSection3 class="seccion" />
    <!-- Seccion 4: Donde y cuando, recepción -->
    <ViewSection4 class="seccion" />
    <!-- Seccion 5: Itinerario -->
    <ViewSection5 class="seccion" />
    <!-- Seccion 6: Galeria de fotos -->
    <ViewSection6 class="seccion" />
    <!-- seccion 7: Codigo de vestimenta -->
    <ViewSection7 class="seccion" />
    <!-- seccion 8: Mesa de regalos -->
    <ViewSection8 class="seccion" />
    <!-- seccion 9: Gracias -->
    <ViewSection9 class="seccion" />
    <!-- seccion 10: hospedaje -->
 <ViewSection10 class="seccion" />
  </div>
</template>

<script>
import ViewSection1 from './ViewSection1.vue'
import ViewSection2 from './ViewSection2.vue'
import ViewSection3 from './ViewSection3.vue'
import ViewSection4 from './ViewSection4.vue'
import ViewSection5 from './ViewSection5.vue'
import ViewSection6 from './ViewSection6.vue'
import ViewSection7 from './ViewSection7.vue'
import ViewSection8 from './ViewSection8.vue'
import ViewSection9 from './ViewSection9.vue'
import ViewSection10 from './ViewSection10.vue'
import TextBox from '../ui/TextBox.vue'
import MusicPlayer from '../MusicPlayer.vue'


export default {
  name: 'Invitation',
  components: {
    TextBox,
    MusicPlayer,
    ViewSection1,
    ViewSection2,
    ViewSection3,
    ViewSection4,
    ViewSection5,
    ViewSection6,
    ViewSection7,
    ViewSection8,
    ViewSection9,
    ViewSection10,
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
/* ── Contenedor principal con scroll-snap ── */
.invitacion-scroll {
  /* 100% del padre, que llega encadenado desde html. Así el contenedor mide
     exactamente la pantalla disponible sin depender de unidades de viewport. */
  height: 100svh;
  height: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  /* scroll suave en iOS */
  /* evita que el tirón al final arrastre la página y desalinee el snap */
  overscroll-behavior-y: contain;
}

/* ── Cada sección = 1 pantalla de celular ── */


@keyframes apareceDelCentro {
  0% {
    opacity: 0;
    transform: scale(0.2);
  }

  70% {
    transform: scale(1.05);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.sobre-flores-entrada {
  animation: apareceDelCentro 1.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
</style>