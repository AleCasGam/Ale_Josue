<template>
  <section class="p-4 gap-10">
    <div class="w-full h-[50vh] bg-transparent border border-primary">
      <img class="p-4 w-full h-full object-cover" src="../../assets/images/pictures/pre-boda-1.png" alt="Pre Boda 1" />
    </div>

    <div class="flex flex-col text-center gap-4">
      <h1 class="text-primary text-4xl font-bold font-cormorant">¡Nos casamos!</h1>
      <span class="font-serif text-secondary text-xl">
        <p>Con el corazón lleno de alegría tenemos el honor de invitarte a celebrar el día en que uniremos nuestras vidas en matrimonio.</p>
        <p>Tu compañía será el mejor regalo para hacer de este momento un recuerdo inolvidable.</p>
      </span>
    </div>
  </section>
</template>

<script>
import TextBox from '../ui/TextBox.vue'
import weddingData from '../../data/wedding-data.js'
export default {
  name: 'ViewSection2',
  components: {
    TextBox
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
