// Genera public/preview.jpg, la imagen que WhatsApp (y Facebook, Telegram,
// iMessage…) muestran junto al link cuando se comparte la invitación.
//
// Por qué esta imagen no vive en src/assets/images/:
//   - Las meta tags Open Graph de index.html necesitan una URL fija y absoluta.
//     Vite le pone hash a todo lo de src/assets/, así que la ruta cambiaría en
//     cada build. En public/ el archivo se copia tal cual a la raíz del sitio.
//   - WhatsApp no renderiza WebP de forma confiable en la previsualización:
//     tiene que ser JPG o PNG, y pesar poco (por eso 1200x630 a calidad 88,
//     ~120 KB).
//
// Ojo con la regla de CLAUDE.md de que en src/assets/images/ solo viven fotos
// que usa algún componente: select-preview.webp es la excepción, la usa este
// script y nada más. No la borres pensando que sobra.
//
// Uso: npm run generar-preview

import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { stat } from 'node:fs/promises'

const FOTO = fileURLToPath(new URL('../src/assets/images/pictures/select-preview.webp', import.meta.url))
const DESTINO = fileURLToPath(new URL('../public/preview.jpg', import.meta.url))

// 1200x630 es la proporción 1.91:1 que piden Open Graph y WhatsApp para
// mostrar la previsualización grande en lugar de una miniatura cuadrada.
const ANCHO = 1200
const ALTO = 630

// La foto original (1047x716) es más ancha que alta pero no llega a 1.91:1, así
// que se recorta una banda horizontal. El `top: 60` está elegido a mano: deja
// aire arriba del pelo de él y baja el encuadre lo suficiente para que las caras
// queden en el tercio superior, lejos del texto del pie.
const RECORTE = { left: 0, top: 60, width: 1047, height: 550 }

// El texto va encima de la foto, no a un lado, para que la imagen sea lo que
// domina la miniatura. El degradado oscuro del pie es lo único que lo hace
// legible sobre el vestido claro.
const capaTexto = Buffer.from(`<svg width="${ANCHO}" height="${ALTO}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="velo" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0.45" stop-color="#2A1A12" stop-opacity="0"/>
      <stop offset="0.78" stop-color="#2A1A12" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#2A1A12" stop-opacity="0.8"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#velo)"/>
  <text x="600" y="516" font-family="Georgia, serif" font-size="58" fill="#FFF8F0" text-anchor="middle">Alejandra &amp; Josué</text>
  <line x1="510" y1="546" x2="690" y2="546" stroke="#FFF8F0" stroke-width="1" opacity="0.6"/>
  <text x="600" y="590" font-family="Georgia, serif" font-size="27" fill="#FFF8F0" text-anchor="middle" letter-spacing="6">03 . 10 . 2026</text>
</svg>`)

// Georgia como fuente: las del sitio (Cormorant, Great Vibes) vienen de Google
// Fonts por <link> y no están instaladas en el sistema, que es de donde las
// tomaría sharp al rasterizar este SVG.
await sharp(FOTO)
  .extract(RECORTE)
  .resize(ANCHO, ALTO)
  .composite([{ input: capaTexto, left: 0, top: 0 }])
  .jpeg({ quality: 88 })
  .toFile(DESTINO)

const { size } = await stat(DESTINO)
console.log(`public/preview.jpg listo — ${ANCHO}x${ALTO}, ${Math.round(size / 1024)} KB`)
