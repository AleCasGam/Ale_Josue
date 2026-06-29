<template>
  <div :class="classBox()">
    <div :class="classInnerBox()" class="border p-2">
        {{ text }}
        <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextBox',
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'default' //default, primary, secondary, dark
    }
  },
  methods: {
    classBox() {
        switch(this.type) {
            case 'primary':
                return 'm-2 p-2 bg-[#A55A46] shadow-lg text-white';
            case 'secondary':
                return 'm-2 p-2 bg-[#C07B63] shadow-lg text-white';
            case 'dark':
                return 'm-2 p-2 bg-[#4A352C] shadow-lg text-white';
            default:
                return 'm-2 p-2 bg-[#F7F1EA] shadow-lg text-[#B35E48]'; //Crema: #F7F1EA, Terracota: #B35E48
        }
    },
    classInnerBox() {
        switch(this.type) {
            case 'primary':
                return 'border-white';
            case 'secondary':
                return 'border-white';
            case 'dark':
                return 'border-white';
            default:
                return 'border-2 border-[#B35E48]';
        }
    }
  }
}
</script>

<style scoped>
</style>
