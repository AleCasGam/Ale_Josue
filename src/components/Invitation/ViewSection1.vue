<template>
    <section class="p-4 ">
        <div class="relative items-center justify-center gap-10 w-full h-fit px-4 py-10 flex flex-col border border-primary rounded-md">
            <!-- corazón montado sobre la línea del marco: el fondo crema la corta -->
            <span class="absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 bg-background px-2">
                <HeartIcon class="w-4 h-4 text-primary" />
            </span>
            <span class="font-serif font-bold text-xl tracking-[0.2em] text-muted">
                NUESTRA BODA
            </span>
            <div
                class="flex flex-col gap-1 font-cormorant font-semibold text-[4rem] leading-none text-primary items-center">
                <span>{{ data.bride || 'Alejandra' }}</span>
                <span>&</span>
                <span>{{ data.groom || 'Josué' }}</span>
            </div>
            <!-- font-cormorant -->

            <span class="font-serif mt-4 font-bold text-xl tracking-[0.2em] text-muted uppercase">
                {{ data.date || 'Fecha de la boda' }}
            </span>


            <Countdown class="mt-12 text-gold" />

             <span class="absolute -bottom-4 left-1/2 flex -translate-x-1/2 -translate-y-1/2 bg-background px-2">
                <HeartIcon class="w-4 h-4 text-primary" />
            </span>
        </div>
    </section>
</template>

<script>
import TextBox from '../ui/TextBox.vue'
import Countdown from './Countdown.vue'
import weddingData from '../../data/wedding-data.js'
import { HeartIcon } from '@heroicons/vue/24/solid'

export default {
    name: 'ViewSection1',
    components: {
        TextBox,
        Countdown,
        HeartIcon,
    },
    data() {
        return {
            data: weddingData,
        };
    }
};
</script>

<style scoped>
/* .texto-outline {
  color: white;
  -webkit-text-stroke: 1.5px #6E2A14;
  paint-order: stroke fill;
} */
</style>