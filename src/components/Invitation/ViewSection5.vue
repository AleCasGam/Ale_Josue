<template>
  <section class="p-4">
    <div class="w-full h-fit bg-transparent border-3 border-primary">
      <img class=" w-full h-full max-h-[85vh] object-cover" src="../../assets/images/itinerario.webp" alt="Itinerario" />
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
