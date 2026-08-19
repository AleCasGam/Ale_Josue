<template>
  <section class="p-4">
    <div class="relative items-center w-full h-[90svh] p-4 flex flex-col gap-2 border border-primary rounded-md">
      <!-- corazón montado sobre la línea del marco: el fondo crema la corta -->
      <span class="absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 bg-background px-2">
        <HeartIcon class="w-4 h-4 text-primary" />
      </span>

      <!-- min-h-0 evita que las fotos desborden el alto del marco -->
      <div class="flex-1 min-h-0 w-full bg-cover bg-center bg-no-repeat rounded-md shadow-md image-1" />

      <SeparadorCorazon />

      <div class="flex-1 min-h-0 w-full bg-cover bg-center bg-no-repeat rounded-md shadow-md image-2" />

      <SeparadorCorazon />

      <div class="flex-1 min-h-0 w-full bg-cover bg-center bg-no-repeat rounded-md shadow-md image-3" />
    </div>
  </section>
</template>

<script>
import { HeartIcon } from '@heroicons/vue/24/solid'
import SeparadorCorazon from '../ui/SeparadorCorazon.vue'

export default {
  name: 'ViewSection6',
  components: {
    HeartIcon,
    SeparadorCorazon,
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped>
.image-1 {
  background-image: url('../../assets/images/pictures/select-2.webp');
}
.image-2 {
  background-image: url('../../assets/images/pictures/select-mano.webp');
}
.image-3 {
  background-image: url('../../assets/images/pictures/select-3.webp');
}
</style>
