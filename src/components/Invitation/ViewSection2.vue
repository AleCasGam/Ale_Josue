<template>
  <section>
      <div class="relative w-full flex justify-center py-[35%] mt-8">
        <TextBox type="" class="absolute left-0 top-18 w-[48%] max-w-[200px] ">
          <span class="font-serif text-xl">{{ data.messages.texto1 }}</span>
        </TextBox>
        <div class="absolute right-4 top-0 bg-white shadow-lg p-2 pb-6 w-[48%] max-w-[12rem] flex items-center justify-center">
          <img class="w-full h-full object-cover" src="../../assets/images/pictures/pre-boda-1.png" alt="Pre Boda 1" />
        </div>
      </div>
    </section>
</template>

<script>
import TextBox from '../ui/TextBox.vue'
import weddingData from '../../data/wedding-data.js'
export default {
  name: 'ViewSection1',
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
