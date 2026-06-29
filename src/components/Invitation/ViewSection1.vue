<template>
    <section class="gap-18">
        <span class="font-serif font-bold text-2xl tracking-[0.2em] text-muted">
            NUESTRA BODA
        </span>
        <div
            class="flex flex-col gap-1 font-cormorant font-semibold text-[5rem] leading-none text-primary items-center">
            <span>{{ data.bride || 'Alejandra' }}</span>
            <span>&</span>
            <span>{{ data.groom || 'Josué' }}</span>
        </div>
        <!-- font-cormorant -->

        <span class="font-serif font-bold text-2xl tracking-[0.2em] text-muted uppercase">
            {{ data.date || 'Fecha de la boda' }}
        </span>


        <Countdown class="py-2 text-gold" />
    </section>
</template>

<script>
import TextBox from '../ui/TextBox.vue'
import Countdown from './Countdown.vue'
import weddingData from '../../data/wedding-data.js'
export default {
    name: 'ViewSection1',
    components: {
        TextBox,
        Countdown,
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