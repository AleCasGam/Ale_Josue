<template>
  <div class="min-h-screen w-full p-4 flex flex-col items-center gap-6">
    <header class="w-full flex flex-col items-center gap-2 pt-4">
      <h1 class="font-cormorant text-primary text-4xl font-bold text-center">
        ¿Dónde hospedarme?
      </h1>
      <p class="font-serif text-secondary text-center text-sm">
        Algunas opciones cerca de la celebración
      </p>
      <SeparadorCorazon />
    </header>

    <ul class="w-full max-w-md flex flex-col gap-6 list-none">
      <li
        v-for="lugar in lugares"
        :key="lugar.id"
        class="relative w-full p-4 flex flex-col items-center gap-3 border border-primary rounded-md"
      >
        <!-- corazón montado sobre la línea del marco: el fondo crema la corta -->
        <span class="absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 bg-background px-2">
          <HeartIcon class="w-4 h-4 text-primary" />
        </span>

        <img
          v-if="lugar.image"
          :src="lugar.image"
          :alt="lugar.nombre"
          class="w-full h-48 object-cover rounded-md shadow-md"
        />
        <!-- sin foto todavía: marcador para que la tarjeta no se vea rota -->
        <div
          v-else
          class="w-full h-48 flex items-center justify-center rounded-md bg-beige/20 border border-beige"
        >
          <BuildingOffice2Icon class="w-12 h-12 text-beige" />
        </div>

        <h2 class="font-cormorant text-primary text-2xl font-bold text-center">
          {{ lugar.nombre }}
        </h2>

        <p class="font-serif text-black text-lg">
          {{ formatearPrecio(lugar.price) }}
          <span class="text-secondary text-sm">por noche</span>
        </p>

        <BotonEnlace
          v-if="lugar.link_maps"
          :href="lugar.link_maps"
          texto="Ver en el mapa"
          :icono="MapPinIcon"
        />
      </li>
    </ul>

    <RouterLink
      to="/"
      class="my-6 flex items-center gap-2 font-serif font-bold uppercase tracking-widest text-primary text-sm"
    >
      <ArrowLeftIcon class="w-4 h-4" />
      Volver a la invitación
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import { HeartIcon, MapPinIcon } from '@heroicons/vue/24/solid'
import { BuildingOffice2Icon, ArrowLeftIcon } from '@heroicons/vue/24/outline'
import SeparadorCorazon from '../components/ui/SeparadorCorazon.vue'
import BotonEnlace from '../components/ui/BotonEnlace.vue'
import lugares from '../data/hospedaje.js'

export default {
  name: 'Hospedaje',
  components: {
    RouterLink,
    HeartIcon,
    BuildingOffice2Icon,
    ArrowLeftIcon,
    SeparadorCorazon,
    BotonEnlace,
  },
  data() {
    return {
      lugares,
      MapPinIcon, // se pasa como prop al BotonEnlace
    }
  },
  methods: {
    formatearPrecio(precio) {
      return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        maximumFractionDigits: 0,
      }).format(precio)
    },
  },
}
</script>
