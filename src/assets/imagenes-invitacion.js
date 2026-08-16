// Imágenes que aparecen una vez abierta la invitación.
//
// Se importan aquí para que Vite les asigne su URL final (con hash) y podamos
// precargarlas mientras el invitado todavía ve el sobre cerrado. Las que se
// usan como background-image en CSS también cuentan: al pedirlas por JS quedan
// en la caché del navegador y el fondo las reutiliza sin volver a descargarlas.
//
// Al cambiar una foto en cualquier ViewSection hay que actualizarla también
// aquí, si no se carga hasta que el invitado llegue a esa sección.

import sobreAbierto from './images/sobre-abierto-sombra.webp'
import select1 from './images/pictures/select-1.webp'
import santuarioEncino from './images/pictures/santuario-encino.webp'
import casaFlorencia from './images/pictures/casa-florencia.webp'
import itinerario from './images/itinerario.webp'
import select2 from './images/pictures/select-2.webp'
import select3 from './images/pictures/select-3.webp'
import selectMano from './images/pictures/select-mano.webp'
import codigoVestimenta from './images/codigo-vestimenta-3.webp'
import select11 from './images/pictures/select-11.webp'
import select12 from './images/pictures/select-12.webp'
import select21 from './images/pictures/select-21.webp'
import select22 from './images/pictures/select-22.webp'

// En orden de aparición: lo de arriba es lo que se ve primero al abrir.
export default [
  sobreAbierto, // portada
  select1, // sección 2, foto
  santuarioEncino, // sección 3, ceremonia
  casaFlorencia, // sección 4, recepción
  itinerario, // sección 5
  select2, // sección 6, galería
  select3, // sección 6, galería
  selectMano, // sección 6, galería
  codigoVestimenta, // sección 7
  select11, // sección 8, mesa de regalos
  select12, // sección 8, mesa de regalos
  select21, // sección 9, agradecimiento
  select22, // sección 9, agradecimiento
]
