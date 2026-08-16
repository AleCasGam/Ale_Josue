<template>
  <!--
    Botón de doble marco: el <a> pinta el fondo terracota y el <span> interior
    lleva la línea blanca separada del borde. Se usa en la ceremonia y en la
    recepción, cambiando solo el enlace.
  -->
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="w-fit my-2 p-1.5 rounded-md bg-[#C07B63] shadow-md
           transition-transform duration-200 active:scale-95 hover:scale-[1.03]"
  >
    <span class="flex items-center justify-center gap-3 rounded border border-white/80 px-5 py-2.5">
      <MapPinIcon class="w-5 h-5 text-white shrink-0" />
      <span class="font-serif font-bold uppercase tracking-widest text-white text-sm">
        {{ texto }}
      </span>
    </span>
  </a>
</template>

<script>
import { MapPinIcon } from '@heroicons/vue/24/solid'

export default {
  name: 'BotonMapa',
  components: {
    MapPinIcon,
  },
  props: {
    href: {
      type: String,
      required: true,
    },
    texto: {
      type: String,
      default: 'Ver en el mapa',
    },
  },
}
</script>
