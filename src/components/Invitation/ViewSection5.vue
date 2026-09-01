<template>
  <section class="p-4 gap-6">
    <h1 class="font-cormorant text-primary text-4xl font-bold text-center">Itinerario</h1>

    <div class="relative w-full p-4 pt-6 flex flex-col items-center border border-primary rounded-md">
      <!-- corazón montado sobre la línea del marco: el fondo crema la corta -->
      <span class="absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 bg-background px-2">
        <HeartIcon class="w-4 h-4 text-primary" />
      </span>


      <ul class="relative w-full flex flex-col gap-3 list-none mt-3">
        <!--
          Línea vertical continua por detrás de todo. Los corazones la tapan con
          bg-background, así parece que la van cortando en cada evento.
        -->
        <span class="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-primary/40" />

        <!--
          Tres columnas: [contenido] [corazón] [contenido]. En vez de duplicar el
          markup para cada lado, se mueve cada celda con col-start según el
          índice: los pares llevan la info a la izquierda y el icono a la
          derecha, y los impares al revés.
          El `relative` de la fila la deja pintarse encima de la línea.

          row-start-1 en las tres celdas es obligatorio, no decorativo: al
          invertir el orden (col 3 → 2 → 1) el auto-placement de grid no puede
          retroceder de columna y va creando filas nuevas, así que los eventos
          impares se apilaban en vez de alinearse. Fijando también la fila, cada
          celda se coloca directo en su lugar.
        -->
        <li
          v-for="(evento, i) in itinerario"
          :key="evento.hora"
          class="relative grid grid-cols-[1fr_auto_1fr] items-center gap-2 p-4"
        >
          <div
            class="flex flex-col justify-center"
            :class="i % 2 === 0
              ? 'row-start-1 col-start-1 items-end text-right'
              : 'row-start-1 col-start-3 items-start text-left'"
          >
            <span class="font-serif italic text-secondary text-sm">{{ evento.hora }}</span>
            <span class="font-cormorant text-primary text-lg font-semibold leading-tight">
              {{ evento.text }}
            </span>
          </div>

          <!-- px además de py: el fondo tiene que tapar la línea a lo ancho -->
          <span class="row-start-1 col-start-2 flex items-center justify-center bg-background px-2 py-1.5">
            <!-- <HeartIcon class="w-4 h-4 text-primary" /> -->
             <div class="w-2 h-2 bg-primary rounded-full"/>
          </span>

          <img
            :src="evento.icono"
            :alt="evento.text"
            class="w-16 h-16 object-contain"
            :class="i % 2 === 0
              ? 'row-start-1 col-start-3 justify-self-start'
              : 'row-start-1 col-start-1 justify-self-end'"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { HeartIcon } from '@heroicons/vue/24/solid'
import SeparadorCorazon from '../ui/SeparadorCorazon.vue'
import iconoCeremonia from '../../assets/images/itinerario/itinerario_1_ceremonia.webp'
import iconoRecepcion from '../../assets/images/itinerario/itinerario_2_recepcion.webp'
import iconoBanquete from '../../assets/images/itinerario/itinerario_3_banquete.webp'
import iconoBaile from '../../assets/images/itinerario/itinerario_4_baile.webp'
import iconoFin from '../../assets/images/itinerario/itinerario_5_fin.webp'

export default {
  name: 'ViewSection5',
  components: {
    HeartIcon,
    SeparadorCorazon,
  },
  data() {
    return {
      itinerario: [
        { hora: '4:00 pm', text: 'Ceremonia religiosa', icono: iconoCeremonia },
        { hora: '6:00 pm', text: 'Recepción', icono: iconoRecepcion },
        { hora: '7:30 pm', text: 'Banquete', icono: iconoBanquete },
        { hora: '9:30 pm', text: 'Baile', icono: iconoBaile },
        { hora: '2:00 am', text: 'Fin del evento', icono: iconoFin },
      ],
    };
  }
};
</script>
