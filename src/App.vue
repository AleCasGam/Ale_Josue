<template>
  <div class="general-background w-screen" :class="{ 'flex flex-col items-center justify-center overflow-hidden h-screen': !isOpen }">
    <ClosedInvitation v-if="!isOpen" @open="isOpen = true" />
    <Invitation v-else />
  </div>
</template>

<script>

import ClosedInvitation from './components/ClosedInvitation.vue'
import Invitation from './components/Invitation/index.vue'
export default {
  name: 'App',
  components: {
    ClosedInvitation,
    Invitation
  },
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<style scoped>
.general-background {
  background-image: url('./assets/images/fondo-claro.png');
  /* background-color: rgb(255, 255, 255); */
  background-size: cover;
  background-position: center;
}

</style>
