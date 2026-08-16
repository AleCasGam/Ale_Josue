<template>
  <section class="p-4">
    <div class="relative items-center w-full h-[90vh] p-4 flex flex-col gap-2 border border-primary rounded-md">
      <!-- corazón montado sobre la línea del marco: el fondo crema la corta -->
      <span class="absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 bg-background px-2">
        <HeartIcon class="w-4 h-4 text-primary" />
      </span>

      <!--
        Las fotos son verticales: al angostarlas el contenedor se acerca a su
        proporción y bg-cover recorta menos. self-start / self-end las manda a
        cada extremo, ganándole al items-center del padre.
      -->
      <div class="flex-1 min-h-0 w-[60%] self-start bg-cover bg-center bg-no-repeat rounded-md shadow-md image-1" />


      <div class="relative my-4 text-lg w-full p-5 flex flex-col items-center gap-3 border border-primary rounded-md">
        <p class="font-serif text-black text-center leading-relaxed">
          {{ data.messages.texto7 }}
        </p>
        <SeparadorCorazon />
      </div>
      <!-- <HeartIcon class="w-4 h-4 text-primary self-end" /> -->
      <div class="flex-1 min-h-0 w-[60%] self-end bg-cover bg-center bg-no-repeat rounded-md shadow-md image-2" />
    </div>
  </section>
</template>

<script>
import { HeartIcon } from '@heroicons/vue/24/solid'
import SeparadorCorazon from '../ui/SeparadorCorazon.vue'
import weddingData from '../../data/wedding-data.js'

export default {
  name: 'ViewSection9',
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
  background-image: url('../../assets/images/pictures/select-21.webp');
}
.image-2 {
  background-image: url('../../assets/images/pictures/select-22.webp');
}
</style>
