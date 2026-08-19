<template>
  <section class="p-4 gap-6">
    <h1 class="font-cormorant text-primary text-4xl font-bold text-center">¿Dónde y Cuándo?</h1>

    <div class="relative w-full h-[80svh] p-2 gap-4 border border-primary grid grid-rows-2 rounded-md">
      <!-- corazón montado sobre la línea del marco: el fondo crema la corta -->
      <span class="absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 bg-background px-2">
        <HeartIcon class="w-4 h-4 text-primary" />
      </span>

      <div class="w-full rounded-md image-backgrond1" />

      <!-- mt-auto en el botón lo empuja hasta abajo del bloque -->
      <div class="w-full p-3 flex flex-col items-center gap-3 text-center">
        <h2 class="font-cormorant text-primary text-3xl font-bold uppercase">Ceremonia</h2>

        <div class="flex flex-col items-center gap-1">
          <span class="font-serif text-secondary text-base">Sábado 03 de Octubre de 2026</span>
          <span class="font-serif text-secondary text-lg font-semibold">Santuario del Señor del Encino</span>
        </div>

        <div class="flex flex-col items-center gap-2">
          <span class="font-serif text-secondary text-sm flex items-center gap-2">
            <MapPinIcon class="w-5 h-5 shrink-0" />
            Ocotes de Moya, Yahualica.
          </span>
          <span class="font-serif text-secondary text-base font-bold flex items-center gap-2">
            <ClockIcon class="w-5 h-5 shrink-0" />
            4:00 PM
          </span>
        </div>

        <BotonEnlace
          class="mt-auto"
          href="https://maps.app.goo.gl/Rf7988ZuGQekkEuA6"
          texto="Ver en el mapa"
          :icono="MapPinIcon"
        />
      </div>
    </div>
  </section>
</template>

<script>
import BotonEnlace from '../ui/BotonEnlace.vue'
import { MapPinIcon, HeartIcon } from '@heroicons/vue/24/solid'
import { ClockIcon } from '@heroicons/vue/24/outline'
import weddingData from '../../data/wedding-data.js'

export default {
  name: 'ViewSection3',
  components: {
    BotonEnlace,
    MapPinIcon,
    ClockIcon,
    HeartIcon
  },
  data() {
    return {
      data: weddingData,
      MapPinIcon, // se pasa como prop al BotonEnlace
    };
  }
};
</script>

<style scoped>
.image-backgrond1 {
  background-image: url('../../assets/images/pictures/santuario-encino.webp');
  background-size: cover;
  background-position: center;
  background-position-y: top;
  background-repeat: no-repeat;
}
</style>
