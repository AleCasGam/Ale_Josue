<template>
  <div class="invitacion-scroll">

    <!-- ── Sección 1: Portada ── -->
    <section class="seccion">
      <img class="sobre-flores-entrada pl-4 pr-[0.9rem]" src="../../assets/images/sobre-abierto-sombra.png" alt="Sobre Abierto" />
    </section>

    <!-- ── Sección 2 ── -->
    <ViewSection1 class="seccion" />
    <ViewSection2 class="seccion" />
    <!-- ViewSection2 -->

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
import TextBox from '../ui/TextBox.vue'
export default {
  name: 'Invitation',
  components: {
    TextBox,
    ViewSection1,
    ViewSection2,
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