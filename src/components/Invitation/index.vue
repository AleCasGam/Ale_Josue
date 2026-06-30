<template>
  <div class="invitacion-scroll">

    <!-- ── Sección 1: Portada ── -->
    <section class="seccion items-center justify-center">
      <img class="sobre-flores-entrada pl-4 pr-[0.9rem]" src="../../assets/images/sobre-abierto-sombra.png" alt="Sobre Abierto" />
    </section>

    <!-- Seccion 2: Informacion y contador -->
    <ViewSection1 class="seccion items-center justify-center" />
    <!-- Seccion 2: Invitacion y foto -->
    <ViewSection2 class="seccion items-center justify-center" />
    <!-- Seccion 4: Donde y cuando, ceremonia -->
    <ViewSection3 class="seccion" />
    <!-- Seccion 4: Donde y cuando, recepción -->
    <ViewSection4 class="seccion" />
    <!-- Seccion 5: Itinerario -->
    <ViewSection5 class="seccion items-center justify-center" />
    <!-- Seccion 6: Galeria de fotos -->
    <ViewSection6 class="seccion items-center justify-center" />
    <!-- seccion 7: Codigo de vestimenta -->
    <ViewSection7 class="seccion items-center justify-center" />

    <!-- ── Sección 3 ── -->
    <section class="seccion">
      <!-- colors -->
      <h2 class="text-black font-bold text-2xl my-2">-- Colors --</h2>
      <span class="text-primary text-2xl">primary: texto aqui</span>
      <span class="text-primary-dark text-2xl">primary-dark: texto aqui</span>
      <span class="text-secondary text-2xl">secondary: texto aqui</span>
      <span class="text-muted text-2xl">muted: texto aqui</span>
      <span class="text-gold text-2xl">gold: texto aqui</span>
      <span class="text-beige text-2xl">beige: texto aqui</span>
      <span class="text-background text-2xl">background: texto aqui</span>
      <!-- text box -->
      <h2 class="text-black font-bold text-2xl my-2">-- Text box --</h2>
      <TextBox type="primary" >
        <h1 class="font-great text-2xl">
          Primary
        </h1>
      </TextBox>
      <TextBox type="secondary" text="Secondary" class="font-tangerine font-bold text-2xl" />
      <TextBox type="dark" text="Dark" class="text-2xl" />
      <TextBox text="Default" class="text-2xl" />
    </section>

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
import TextBox from '../ui/TextBox.vue'

export default {
  name: 'Invitation',
  components: {
    TextBox,
    ViewSection1,
    ViewSection2,
    ViewSection3,
    ViewSection4,
    ViewSection5,
    ViewSection6,
    ViewSection7,
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
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  /* scroll suave en iOS */
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