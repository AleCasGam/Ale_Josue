<template>
  <div class="closed-invitation flex flex-col items-center justify-center w-full h-screen p-2">
    <div class="envelope-wrapper" @click="openEnvelope">
      <!-- Sobre cerrado: se anima al hacer clic -->
      <img
        class="sobre-img sobre-cerrado"
        src="../assets/images/sobre-cerrado.png"
        alt="Sobre Cerrado"
      />
    </div>
    <p class="hint-text">Toca para abrir</p>
  </div>
</template>

<script>
export default {
  name: 'ClosedInvitation',
  emits: ['open'],
  data() {
    return {

    }
  },
  methods: {
    openEnvelope() {
      setTimeout(() => {
        this.$emit('open')
      }, 700)
    }
  }
}
</script>

<style scoped>
.closed-invitation {
  width: 100%;
  height: 100%;
}

/* ── Contenedor del sobre ── */
.envelope-wrapper {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sobre-img {
  display: block;
  max-width: min(320px, 90vw);
  width: 100%;
  user-select: none;
  -webkit-user-drag: none;
}

/* Efecto hover sutil en el sobre cerrado */
.sobre-cerrado:not(.animate-open) {
  transition: transform 0.25s ease, filter 0.25s ease;
}
.sobre-cerrado:not(.animate-open):hover {
  transform: scale(1.04) translateY(-4px);
  filter: drop-shadow(0 12px 24px rgba(0,0,0,0.18));
}

/* ── Animación: sobre cerrado desaparece ── */
@keyframes envelopeOpen {
  0%   { opacity: 1; }
  100% { opacity: 0; }
}

.sobre-cerrado.animate-open {
  animation: envelopeOpen 0.7s ease forwards;
  pointer-events: none;
}

/* ── Texto de pista ── */
.hint-text {
  margin-top: 16px;
  font-size: 0.85rem;
  color: #9b7b5a;
  letter-spacing: 0.08em;
  animation: hintPulse 2.2s ease-in-out infinite;
}

@keyframes hintPulse {
  0%, 100% { opacity: 0.45; transform: translateY(0); }
  50%       { opacity: 1;    transform: translateY(-4px); }
}
</style>
