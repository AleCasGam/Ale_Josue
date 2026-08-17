<template>
  <!--
    Botón de doble marco: el <a> pinta el fondo terracota y el <span> interior
    lleva la línea blanca separada del borde. Se usa para la ceremonia, la
    recepción y el hospedaje; solo cambian el icono, el texto y el destino.

    Con `to` navega dentro del sitio (RouterLink); con `href` abre un enlace
    externo en otra pestaña.
  -->
  <component
    :is="etiqueta"
    v-bind="atributos"
    class="w-fit my-2 p-1.5 rounded-md bg-[#C07B63] shadow-md
           transition-transform duration-200 active:scale-95 hover:scale-[1.03]"
  >
    <span class="flex items-center justify-center gap-3 rounded border border-white/80 px-5 py-2.5">
      <component :is="icono" class="w-5 h-5 text-white shrink-0" />
      <span class="font-serif font-bold uppercase tracking-widest text-white text-sm">
        {{ texto }}
      </span>
    </span>
  </component>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'BotonEnlace',
  props: {
    // enlace externo; se ignora si viene `to`
    href: {
      type: String,
      default: '',
    },
    // ruta interna del sitio, p. ej. "/hospedaje"
    to: {
      type: String,
      default: '',
    },
    texto: {
      type: String,
      required: true,
    },
    // el componente del icono, ya importado por la vista que usa el botón
    icono: {
      type: [Object, Function],
      required: true,
    },
  },
  computed: {
    etiqueta() {
      return this.to ? RouterLink : 'a'
    },
    atributos() {
      if (this.to) {
        return { to: this.to }
      }

      return {
        href: this.href,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    },
  },
}
</script>
