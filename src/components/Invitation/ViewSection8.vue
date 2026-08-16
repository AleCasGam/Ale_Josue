<template>
  <section class="p-4">
    <div class="relative items-center w-full h-[90vh] p-4 flex flex-col gap-2 border border-primary rounded-md">
      <!-- corazón montado sobre la línea del marco: el fondo crema la corta -->
      <span class="absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 bg-background px-2">
        <HeartIcon class="w-4 h-4 text-primary" />
      </span>

      <!-- min-h-0 evita que las fotos desborden el alto del marco -->
      <div class="flex-1 min-h-0 w-full bg-cover bg-center bg-no-repeat rounded-md shadow-md image-1" />

      <SeparadorCorazon />
      <div class="relative text-xs w-full p-5 flex flex-col items-center gap-3 border border-primary rounded-md">
        <p class="font-serif text-black text-center  leading-relaxed">
          {{ data.messages.texto5 }}
        </p>

        <HeartIcon class="w-2 h-2 text-primary" />

        <p class="font-serif text-black text-center  leading-relaxed">
          {{ data.messages.texto6 }}
        </p>

        <BotonEnlace
          :href="data.mesaRegalos"
          texto="Mesa de regalos"
          :icono="GiftIcon"
        />

      </div>

      <SeparadorCorazon />

      <div class="flex-1 min-h-0 w-full bg-cover bg-center bg-no-repeat rounded-md shadow-md image-3" />
    </div>
  </section>
</template>

<script>
import { HeartIcon, GiftIcon } from '@heroicons/vue/24/solid'
import SeparadorCorazon from '../ui/SeparadorCorazon.vue'
import BotonEnlace from '../ui/BotonEnlace.vue'
import weddingData from '../../data/wedding-data.js'

export default {
  name: 'ViewSection8',
  components: {
    HeartIcon,
    SeparadorCorazon,
    BotonEnlace,
  },
  data() {
    return {
      data: weddingData,
      GiftIcon, // se pasa como prop al BotonEnlace
    };
  }
};
</script>

<style scoped>
.image-1 {
  background-image: url('../../assets/images/pictures/select-11.webp');
}
.image-3 {
  background-image: url('../../assets/images/pictures/select-12.webp');
}
</style>
