<template>
  <section class="p-4 py-20 gap-10">
    <div class="w-full h-full bg-transparent border-3 border-primary">
      <img class=" w-full h-full object-cover" src="../../assets/images/itinerario.png" alt="Itinerario" />
    </div>
  </section>
</template>

<script>
import TextBox from '../ui/TextBox.vue'
import weddingData from '../../data/wedding-data.js'
export default {
  name: 'ViewSection5',
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
