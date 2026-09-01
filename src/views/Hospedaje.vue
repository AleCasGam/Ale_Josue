<template>
  <!-- overflow-y-auto: el documento está bloqueado, el scroll de la lista vive aquí -->
  <div class="h-full w-full overflow-y-auto p-4 flex flex-col items-center gap-6">
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

        <!-- descripción: opcional, solo la traen los alojamientos particulares -->
        <p
          v-if="lugar.description"
          class="font-serif text-secondary text-center text-sm leading-relaxed"
        >
          {{ lugar.description }}
        </p>

        <!-- teléfono: en celular el tel: abre el marcador directo -->
        <a
          v-if="lugar.phone"
          :href="`tel:${lugar.phone}`"
          class="flex items-center gap-2 font-serif text-black text-base"
        >
          <PhoneIcon class="w-4 h-4 text-primary shrink-0" />
          {{ formatearTelefono(lugar.phone) }}
        </a>

        <!-- precio: varias tarifas -> una línea por tipo de habitación -->
        <ul
          v-if="esListaDePrecios(lugar.price)"
          class="w-full max-w-[16rem] flex flex-col gap-1 list-none"
        >
          <li
            v-for="tarifa in lugar.price"
            :key="tarifa.text"
            class="flex items-baseline justify-between gap-3 font-serif"
          >
            <span class="text-secondary text-sm">{{ tarifa.text }}</span>
            <span class="text-black text-lg">{{ formatearPrecio(tarifa.price) }}</span>
          </li>
          <li class="font-serif text-secondary text-xs text-center pt-1">por noche</li>
        </ul>

        <!-- precio: uno solo -->
        <p v-else-if="lugar.price != null" class="font-serif text-black text-lg">
          {{ formatearPrecio(lugar.price) }}
          <span class="text-secondary text-sm">por noche</span>
        </p>
        <!-- price null: no se muestra nada -->

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
import { HeartIcon, MapPinIcon, PhoneIcon } from '@heroicons/vue/24/solid'
import { BuildingOffice2Icon, ArrowLeftIcon } from '@heroicons/vue/24/outline'
import SeparadorCorazon from '../components/ui/SeparadorCorazon.vue'
import BotonEnlace from '../components/ui/BotonEnlace.vue'
import lugares from '../data/hospedaje.js'

export default {
  name: 'Hospedaje',
  components: {
    RouterLink,
    HeartIcon,
    PhoneIcon,
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
    // el hotel puede tener varias tarifas: [{ text, price }, ...]
    esListaDePrecios(precio) {
      return Array.isArray(precio) && precio.length > 0
    },
    formatearPrecio(precio) {
      return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        maximumFractionDigits: 0,
      }).format(precio)
    },
    // +523441011427 -> +52 344 101 1427; si no calza el patrón se deja igual
    formatearTelefono(telefono) {
      const partes = telefono.match(/^\+52(\d{3})(\d{3})(\d{4})$/)
      return partes ? `+52 ${partes[1]} ${partes[2]} ${partes[3]}` : telefono
    },
  },
}
</script>
