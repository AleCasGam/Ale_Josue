<template>
  <div>
    <!--
      preload="none": la canción pesa 3.2 MB, más que todas las imágenes del
      sitio juntas. Con esto no se descarga hasta que el invitado da play, así
      la invitación abre igual de rápido.
    -->
    <audio
      ref="audio"
      :src="cancion"
      loop
      preload="none"
      @play="sonando = true"
      @pause="sonando = false"
    ></audio>

    <button
      type="button"
      class="fixed top-5 right-5 z-50 w-8 h-8 flex items-center justify-center rounded-full
             bg-primary text-background border-2 border-background shadow-lg
             transition-transform duration-200 active:scale-95 hover:scale-105"
      :aria-label="sonando ? 'Pausar la música' : 'Reproducir la música'"
      @click="alternar"
    >
      <PauseIcon v-if="sonando" class="w-4 h-4" />
      <!-- el triángulo se ve descentrado dentro del círculo, se recorre 2px -->
      <PlayIcon v-else class="w-4 h-4 translate-x-[2px]" />
    </button>
  </div>
</template>

<script>
import { PlayIcon, PauseIcon } from '@heroicons/vue/24/solid'
import cancion from '../assets/music/Luis Miguel - Entrega Total.mp3'

export default {
  name: 'MusicPlayer',
  components: {
    PlayIcon,
    PauseIcon,
  },
  data() {
    return {
      cancion,
      sonando: false,
    }
  },
  mounted() {
    // volumen bajo: es música de fondo, no debe tapar nada
    this.$refs.audio.volume = 0.3
  },
  methods: {
    async alternar() {
      const audio = this.$refs.audio

      if (this.sonando) {
        audio.pause()
        return
      }

      try {
        // play() regresa una promesa que el navegador puede rechazar; los
        // eventos @play/@pause son los que mandan sobre el estado del icono.
        await audio.play()
      } catch {
        this.sonando = false
      }
    },
  },
}
</script>
