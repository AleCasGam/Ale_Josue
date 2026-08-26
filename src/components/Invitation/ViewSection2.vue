<template>
  <section class="px-4 gap-4">
    <div class="w-full h-[45svh] p-4 border border-primary rounded-md">
      <div class="flex-1 min-h-0 h-full w-full bg-cover bg-center bg-no-repeat rounded-md shadow-md image-1" alt="Alejandra y Josué" />
    </div>

    <!-- Antes era la imagen nos-casamos.webp; ahora es texto para poder
         controlar tamaño y color, y para que se pueda leer y traducir. -->
    <div class="relative w-full p-3 flex flex-col items-center gap-2 border border-primary rounded-md">
      <!-- corazón montado sobre la línea del marco: el fondo crema la corta -->
      <span class="absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 bg-background px-2">
        <HeartIcon class="w-4 h-4 text-primary" />
      </span>

      <h1 class="font-cormorant text-primary text-4xl font-bold text-center">¡Nos casamos!</h1>

      <SeparadorCorazon />

      <p class="font-serif text-black text-center text-base leading-relaxed">
        {{ data.messages.texto1 }}
      </p>

      <HeartIcon class="w-3 h-3 text-primary" />

      <p class="font-serif text-black text-center text-base leading-relaxed">
        {{ data.messages.texto2 }}
      </p>
    </div>
  </section>
</template>

<script>
import { HeartIcon } from '@heroicons/vue/24/solid'
import SeparadorCorazon from '../ui/SeparadorCorazon.vue'
import weddingData from '../../data/wedding-data.js'

export default {
  name: 'ViewSection2',
  components: {
    HeartIcon,
    SeparadorCorazon,
  },
  data() {
    return {
      data: weddingData,
    };
  }
};
</script>

<style scoped>
.image-1 {
  background-image: url('../../assets/images/pictures/select-1.webp');
  background-position-y: top;
}
</style>
