<template>
  <section class="p-4 py-16 gap-10">
    <h1 class="font-cormorant text-primary text-4xl font-bold text-center">¿Dónde y Cuándo?</h1>
    <div class="w-full h-[75vh] p-4 gap-4 border border-primary grid grid-rows-2">
        <div class="w-full bg-cover bg-center bg-no-repeat" style="background-image: url('/src/assets/images/pictures/casa-florencia.png')">

        </div>
        <div class="w-full p-4 flex flex-col gap-2 text-center items-center">
            <h2 class="text-primary text-2xl font-bold uppercase font-cormorant self-center">Recepción</h2>
            <span class="font-serif text-secondary text-md">Sábado 08 de Octubre de 2026</span>
            <span class="font-serif text-secondary text-xl font-semibold">Casa Florencia</span>
            <span class="self-start font-serif text-secondary text-md flex items-center justify-center gap-2">
                <MapPinIcon class="w-5 h-5 solid" />
                Carretera Cuquio - Yahualica Km 201
            </span>
            <span class="self-start font-serif text-secondary text-lg font-bold flex items-center justify-center gap-2">
                <ClockIcon class="w-5 h-5 solid" />
                6:00 PM
            </span>

            <a href="https://maps.app.goo.gl/EXmPsjM5tFCP4RYaA" target="_blank" rel="noopener noreferrer" class="border-2 border-primary-dark bg-background shadow-md w-fit p-3 mt-2 text-xl font-bold text-gold uppercase">Ver en el mapa</a>
        </div>

    </div>
  </section>
</template>

<script>
import TextBox from '../ui/TextBox.vue'
import { MapPinIcon } from '@heroicons/vue/24/solid'
import {  ClockIcon } from '@heroicons/vue/24/outline'
import weddingData from '../../data/wedding-data.js'
export default {
  name: 'ViewSection4',
  components: {
    TextBox,
    MapPinIcon,
    ClockIcon
  },
  data() {
    return {
      data: weddingData,
    };
  }
};
</script>

<style scoped>
</style>
