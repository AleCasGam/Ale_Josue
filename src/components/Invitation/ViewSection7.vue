<template>
  <section class="p-4 relative">
    <img class="absolute top-0 left-0 w-full h-full object-cover" src="../../assets/images/marco-flores.png" alt="">
    <div class="w-full h-full bg-transparent p-6">
      <img class="w-full h-full object-cover" src="../../assets/images/codigo-vestimenta.png" alt="Itinerario" />
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
