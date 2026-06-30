<template>
  <div>
    <audio
      ref="audio"
      loop
      preload="auto"
    >
      <!-- <source src="/music/wedding.mp3" type="audio/mpeg"> -->
    </audio>

    <button @click="toggleMusic">
      {{ isPlaying ? "🔊" : "🎵" }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
    };
  },

  mounted() {
    this.$refs.audio.volume = 0.3;
  },

  methods: {
    toggleMusic() {
      if (this.isPlaying) {
        this.$refs.audio.pause();
      } else {
        this.$refs.audio.play();
      }

      this.isPlaying = !this.isPlaying;
    },
  },
};
</script>