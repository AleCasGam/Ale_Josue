<template>
  <!-- Adorno para separar fotos: ramita de olivo, corazón, ramita espejada -->
  <div class="flex shrink-0 items-center justify-center gap-3 py-1">
    <svg
      class="w-14 h-5 text-[#A3B18A]"
      viewBox="0 0 64 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 12 C 22 12, 42 12, 60 12"
        stroke="currentColor"
        stroke-width="1.1"
        stroke-linecap="round"
      />
      <!-- hojas de arriba -->
      <ellipse cx="16" cy="7.6" rx="5.4" ry="2.5" transform="rotate(-22 16 7.6)" fill="currentColor" />
      <ellipse cx="30" cy="6.8" rx="5.8" ry="2.7" transform="rotate(-18 30 6.8)" fill="currentColor" />
      <ellipse cx="44" cy="7.4" rx="5.2" ry="2.4" transform="rotate(-15 44 7.4)" fill="currentColor" />
      <!-- hojas de abajo, alternadas -->
      <ellipse cx="22" cy="16.4" rx="5.4" ry="2.5" transform="rotate(22 22 16.4)" fill="currentColor" />
      <ellipse cx="36" cy="17.2" rx="5.8" ry="2.7" transform="rotate(18 36 17.2)" fill="currentColor" />
      <ellipse cx="50" cy="16.6" rx="5" ry="2.3" transform="rotate(15 50 16.6)" fill="currentColor" />
    </svg>

    <HeartIcon class="w-3.5 h-3.5 shrink-0 text-primary" />

    <svg
      class="w-14 h-5 text-[#A3B18A] -scale-x-100"
      viewBox="0 0 64 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 12 C 22 12, 42 12, 60 12"
        stroke="currentColor"
        stroke-width="1.1"
        stroke-linecap="round"
      />
      <ellipse cx="16" cy="7.6" rx="5.4" ry="2.5" transform="rotate(-22 16 7.6)" fill="currentColor" />
      <ellipse cx="30" cy="6.8" rx="5.8" ry="2.7" transform="rotate(-18 30 6.8)" fill="currentColor" />
      <ellipse cx="44" cy="7.4" rx="5.2" ry="2.4" transform="rotate(-15 44 7.4)" fill="currentColor" />
      <ellipse cx="22" cy="16.4" rx="5.4" ry="2.5" transform="rotate(22 22 16.4)" fill="currentColor" />
      <ellipse cx="36" cy="17.2" rx="5.8" ry="2.7" transform="rotate(18 36 17.2)" fill="currentColor" />
      <ellipse cx="50" cy="16.6" rx="5" ry="2.3" transform="rotate(15 50 16.6)" fill="currentColor" />
    </svg>
  </div>
</template>

<script>
import { HeartIcon } from '@heroicons/vue/24/solid'

export default {
  name: 'SeparadorCorazon',
  components: {
    HeartIcon,
  },
}
</script>
