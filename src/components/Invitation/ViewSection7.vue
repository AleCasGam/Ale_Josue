<template>
  <section class="flex flex-col p-4 py-20 gap-10">
    <h1 class="font-cormorant text-primary text-4xl font-bold text-center">Código de Vestimenta</h1>
    <div class="w-full h-full">
      <img class="w-full h-full object-cover border-2 border-primary" src="../../assets/images/codigo-vestimenta-3.png" alt="Código de Vestimenta" />
    </div>
  </section>
</template>

<script>
import TextBox from '../ui/TextBox.vue'
import weddingData from '../../data/wedding-data.js'
export default {
  name: 'ViewSection7',
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
