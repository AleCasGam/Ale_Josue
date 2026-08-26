<template>
  <section class="p-4 gap-4">
    <h1 class="font-cormorant text-primary text-4xl font-bold text-center">Código de Vestimenta</h1>

    <div class="relative w-full p-4 pt-6 flex flex-col items-center gap-3 border border-primary rounded-md">
      <!-- corazón montado sobre la línea del marco: el fondo crema la corta -->
      <span class="absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 bg-background px-2">
        <HeartIcon class="w-4 h-4 text-primary" />
      </span>

      <!-- <SeparadorCorazon /> -->

      <!-- ── Blanco: vestido a la izquierda, texto a la derecha ── -->
      <div class="w-full flex items-center gap-3 my-4">
        <img
          :src="vestidoBlanco"
          alt="Vestido blanco"
          class="h-28 w-auto shrink-0 object-contain"
        />

        <div class="flex-1 flex flex-col items-center text-center gap-0.5">
          <h2 class="font-cormorant text-primary text-2xl font-bold uppercase tracking-wide leading-none">
            Blanco
          </h2>

          <span class="flex items-center gap-2 w-full max-w-[9rem] my-1">
            <span class="flex-1 h-px bg-primary/40" />
            <HeartIcon class="w-2 h-2 shrink-0 text-primary" />
            <span class="flex-1 h-px bg-primary/40" />
          </span>

          <p class="font-serif text-secondary text-xs leading-relaxed">
            Este color es exclusivo para la novia.
          </p>
        </div>
      </div>

      <!-- ── Nota central, entre los dos colores ── -->
      <div class="w-full py-2 px-4 flex flex-col items-center gap-0.5 border border-primary/50 rounded-xl">
        <!-- <HeartIcon class="w-2 h-2 text-primary" /> -->
        <span class="font-serif text-secondary text-sm">Puedes usar</span>
        <span class="font-great text-primary text-2xl leading-tight">lo que más te guste.</span>
        <!-- <HeartIcon class="w-2 h-2 text-primary" /> -->
      </div>

      <!-- ── Terracota: espejado, texto a la izquierda y vestido a la derecha ── -->
      <div class="w-full flex items-center gap-3 my-4">
        <div class="flex-1 flex flex-col items-center text-center gap-0.5">
          <h2 class="font-cormorant text-primary text-2xl font-bold uppercase tracking-wide leading-none">
            Terracota
          </h2>

          <span class="flex items-center gap-2 w-full max-w-[9rem] my-1">
            <span class="flex-1 h-px bg-primary/40" />
            <HeartIcon class="w-2 h-2 shrink-0 text-primary" />
            <span class="flex-1 h-px bg-primary/40" />
          </span>

          <p class="font-serif text-secondary text-xs leading-relaxed">
            Este será el color de los vestidos de nuestras damas. Gracias por tenerlo en cuenta.
          </p>
        </div>

        <img
          :src="vestidoTerracota"
          alt="Vestido terracota"
          class="h-28 w-auto shrink-0 object-contain"
        />
      </div>

      <SeparadorCorazon />
    </div>
  </section>
</template>

<script>
import { HeartIcon } from '@heroicons/vue/24/solid'
import SeparadorCorazon from '../ui/SeparadorCorazon.vue'
import vestidoBlanco from '../../assets/images/vestimenta/vestimenta_blanco.webp'
import vestidoTerracota from '../../assets/images/vestimenta/vestimenta_terracota.webp'

export default {
  name: 'ViewSection7',
  components: {
    HeartIcon,
    SeparadorCorazon,
  },
  data() {
    return {
      vestidoBlanco,
      vestidoTerracota,
    };
  }
};
</script>
