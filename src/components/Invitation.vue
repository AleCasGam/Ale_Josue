<template>
  <div class="invitacion-scroll">

    <!-- ── Sección 1: Portada ── -->
    <section class="seccion">
      <img
        class="sobre-flores-entrada"
        src="../assets/images/sobre-abierto-flores.png"
        alt="Sobre Abierto"
      />
    </section>

    <!-- ── Sección 2 ── -->
    <section class="seccion">
      <p>Contenido sección 2</p>
    </section>

    <!-- ── Sección 3 ── -->
    <section class="seccion">
      <p>Contenido sección 3</p>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Invitation'
}
</script>

<style scoped>
/* ── Contenedor principal con scroll-snap ── */
.invitacion-scroll {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch; /* scroll suave en iOS */
}

/* ── Cada sección = 1 pantalla de celular ── */
.seccion {
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('../assets/images/fondoPastel.png');
  background-size: cover;
  background-position: center;
}

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
