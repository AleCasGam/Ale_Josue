<template>
  <!-- h-full continúa la cadena de alturas que arranca en html/body -->
  <div class="general-background w-full h-full">
    <!--
      keep-alive conserva la invitación al ir y volver de hospedaje: el sobre
      no se vuelve a cerrar y la música sigue sonando.
    -->
    <RouterView v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  name: 'App',
  components: {
    RouterView,
  },
}
</script>

<style scoped>
.general-background {
  background-image: url('./assets/images/fondo-claro.webp');
  background-size: cover;
  background-position: center;
}
</style>
