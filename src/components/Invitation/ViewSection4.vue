<template>
  <section class="p-4 gap-10">
    <h1 class="font-cormorant text-primary text-4xl font-bold text-center">¿Dónde y Cuándo?</h1>
    <div class="relative w-full h-[75vh] p-4 gap-4 border border-primary grid grid-rows-2 rounded-md">
        <!-- corazón montado sobre la línea del marco: el fondo crema la corta -->
        <span class="absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 bg-background px-2">
            <HeartIcon class="w-4 h-4 text-primary" />
        </span>
        <div class="w-full image-backgrond1">

        </div>
        <div class="w-full p-4 flex flex-col gap-2 text-center items-center">
            <h2 class="text-primary text-2xl font-bold uppercase font-cormorant self-center">Recepción</h2>
            <span class="font-serif text-secondary text-md">Sábado 03 de Octubre de 2026</span>
            <span class="font-serif text-secondary text-xl font-semibold">Casa Florencia</span>
            <span class="self-start font-serif text-secondary text-sm flex items-center justify-center gap-2">
                <MapPinIcon class="w-5 h-5 solid" />
                Carretera Cuquio - Yahualica Km 201
            </span>
            <span class="self-start font-serif text-secondary text-lg font-bold flex items-center justify-center gap-2">
                <ClockIcon class="w-5 h-5 solid" />
                6:00 PM
            </span>

            <BotonEnlace
              href="https://maps.app.goo.gl/EXmPsjM5tFCP4RYaA"
              texto="Ver en el mapa"
              :icono="MapPinIcon"
            />
        </div>

    </div>
  </section>
</template>

<script>
import TextBox from '../ui/TextBox.vue'
import BotonEnlace from '../ui/BotonEnlace.vue'
import { MapPinIcon, HeartIcon } from '@heroicons/vue/24/solid'
import {  ClockIcon } from '@heroicons/vue/24/outline'
import weddingData from '../../data/wedding-data.js'
export default {
  name: 'ViewSection4',
  components: {
    TextBox,
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
  background-image: url('../../assets/images/pictures/casa-florencia.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
