<template>
  <section>
    <div class="w-full h-screen p-6 gap-6 grid grid-rows-3">
      <div class="w-full bg-cover bg-center bg-no-repeat image-1" />
      <div class="w-[60%] justify-self-center bg-cover bg-center bg-no-repeat image-2" />
      <div class="w-full bg-cover bg-center bg-no-repeat image-3" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ViewSection6',
  components: {
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped>

.image-1 {
  background-image: url('../../assets/images/pictures/pre-boda-3.png');
}
.image-2 {
  background-image: url('../../assets/images/pictures/pre-boda-mano.png');
}
.image-3 {
  background-image: url('../../assets/images/pictures/pre-boda-4.png');
}
</style>