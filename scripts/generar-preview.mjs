// Genera public/preview.jpg, la imagen que WhatsApp (y Facebook, Telegram,
// iMessage…) muestran junto al link cuando se comparte la invitación.
//
// Por qué esta imagen no vive en src/assets/images/:
//   - Las meta tags Open Graph de index.html necesitan una URL fija y absoluta.
//     Vite le pone hash a todo lo de src/assets/, así que la ruta cambiaría en
//     cada build. En public/ el archivo se copia tal cual a la raíz del sitio.
//   - WhatsApp no renderiza WebP de forma confiable en la previsualización:
//     tiene que ser JPG o PNG, y pesar poco (por eso 1200x630 a calidad 86,
//     ~90 KB).
//
// Uso: npm run generar-preview

import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { stat } from 'node:fs/promises'

const FOTO = fileURLToPath(new URL('../src/assets/images/pictures/select-1.webp', import.meta.url))
const DESTINO = fileURLToPath(new URL('../public/preview.jpg', import.meta.url))

// 1200x630 es la proporción 1.91:1 que piden Open Graph y WhatsApp para
// mostrar la previsualización grande en lugar de una miniatura cuadrada.
const ANCHO = 1200
const ALTO = 630

// La foto es vertical: recortarla a 1.91:1 les cortaría la cara, así que se
// deja completa a la izquierda y el espacio que sobra se llena con el crema
// del sitio más los nombres y la fecha.
const foto = await sharp(FOTO).resize({ height: ALTO }).toBuffer()
const { width: anchoFoto } = await sharp(foto).metadata()

const centroTexto = anchoFoto + (ANCHO - anchoFoto) / 2

// Georgia como fuente: las del sitio (Cormorant, Great Vibes) vienen de Google
// Fonts por <link> y no están instaladas en el sistema, que es de donde las
// tomaría sharp al rasterizar este SVG.
const lienzo = Buffer.from(`<svg width="${ANCHO}" height="${ALTO}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#F7F2EB"/>
  <text x="${centroTexto}" y="205" font-family="Georgia, serif" font-size="32" fill="#8A6A52" text-anchor="middle" letter-spacing="9">NOS CASAMOS</text>
  <text x="${centroTexto}" y="315" font-family="Georgia, serif" font-size="64" fill="#C56F52" text-anchor="middle">Alejandra</text>
  <text x="${centroTexto}" y="390" font-family="Georgia, serif" font-size="52" fill="#C56F52" text-anchor="middle">&amp; Josué</text>
  <line x1="${centroTexto - 90}" y1="435" x2="${centroTexto + 90}" y2="435" stroke="#C56F52" stroke-width="1" opacity="0.5"/>
  <text x="${centroTexto}" y="490" font-family="Georgia, serif" font-size="32" fill="#556B2F" text-anchor="middle" letter-spacing="5">03 . 10 . 2026</text>
</svg>`)

await sharp(lienzo)
  .composite([{ input: foto, left: 0, top: 0 }])
  .jpeg({ quality: 86 })
  .toFile(DESTINO)

const { size } = await stat(DESTINO)
console.log(`public/preview.jpg listo — ${ANCHO}x${ALTO}, ${Math.round(size / 1024)} KB`)
