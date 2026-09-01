<template>
  <section class="p-4">
    <div
      class="relative items-center justify-around w-full h-[75svh] p-4 flex flex-col gap-2 border border-primary rounded-md">
      <!-- corazón montado sobre la línea del marco: el fondo crema la corta -->
      <span class="absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 bg-background px-2">
        <HeartIcon class="w-4 h-4 text-primary" />
      </span>


      <div class="relative my-4 text-lg w-full p-5 flex flex-col items-center gap-3 ">
        <p class="font-serif text-black text-center leading-relaxed">
          {{ data.messages.texto8 }}
        </p>
        <SeparadorCorazon />
      </div>

      <BotonEnlace class="mt-[8%]" to="/hospedaje" texto="Dónde Hospedarme" :icono="BuildingOffice2Icon" />

    </div>

    <!--
      Pie de la última sección: el crédito de quien diseñó la invitación. Va
      fuera del marco, en chico, para que se lea como firma y no como contenido
      de la boda. Solo aparece si hay número cargado en wedding-data.js.
    -->
    <footer v-if="enlaceWhatsapp" class="mt-4 w-full flex justify-center">
      <a
        :href="enlaceWhatsapp"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 font-ui text-xs tracking-wide text-primary
               underline decoration-primary/40 underline-offset-4
               transition-opacity active:opacity-60"
      >
        <ChatBubbleOvalLeftEllipsisIcon class="w-4 h-4 shrink-0" />
        {{ data.credito.texto }}
      </a>
    </footer>

  </section>
</template>

<script>
import { HeartIcon, BuildingOffice2Icon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/vue/24/solid'
import SeparadorCorazon from '../ui/SeparadorCorazon.vue'
import weddingData from '../../data/wedding-data.js'
import BotonEnlace from '../ui/BotonEnlace.vue'

export default {
  name: 'ViewSection9',
  components: {
    HeartIcon,
    SeparadorCorazon,
    BotonEnlace,
    ChatBubbleOvalLeftEllipsisIcon,
  },
  data() {
    return {
      data: weddingData,
      BuildingOffice2Icon, // se pasa como prop al BotonEnlace
    };
  },
  computed: {
    // wa.me abre el chat directo, sin depender de que el número esté agendado.
    enlaceWhatsapp() {
      const { whatsapp, mensaje } = this.data.credito
      if (!whatsapp) return ''

      return `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`
    },
  },
};
</script>

<style scoped>
.image-1 {
  background-image: url('../../assets/images/pictures/select-21.webp');
  background-position-y: top;
}

.image-2 {
  background-image: url('../../assets/images/pictures/select-22.webp');
}
</style>