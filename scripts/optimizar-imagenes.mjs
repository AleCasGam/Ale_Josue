// Convierte a WebP todas las imágenes de src/assets/images/.
//
// Los PNG/JPG originales se conservan como fuente: Vite solo mete al build lo
// que algún componente importa, así que no pesan en el sitio publicado.
// El script es idempotente, se puede volver a correr cuando se agreguen fotos.
//
// Uso: npm run optimizar-imagenes

import sharp from 'sharp'
import { readdir, stat } from 'node:fs/promises'
import { join, extname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const RAIZ = fileURLToPath(new URL('../src/assets/images/', import.meta.url))
const CALIDAD = 82 // suficiente para fotos; subir solo si se nota pérdida
const EXTENSIONES = ['.png', '.jpg', '.jpeg']

async function* recorrer(dir) {
  for (const entrada of await readdir(dir, { withFileTypes: true })) {
    const ruta = join(dir, entrada.name)
    if (entrada.isDirectory()) yield* recorrer(ruta)
    else yield ruta
  }
}

const enMB = (bytes) => (bytes / 1024 / 1024).toFixed(2) + ' MB'

let totalAntes = 0
let totalDespues = 0
const filas = []

for await (const ruta of recorrer(RAIZ)) {
  const ext = extname(ruta).toLowerCase()
  if (!EXTENSIONES.includes(ext)) continue

  const destino = ruta.slice(0, -ext.length) + '.webp'
  const antes = (await stat(ruta)).size

  // webp conserva el canal alfa, así que las sombras y recortes siguen igual
  await sharp(ruta).webp({ quality: CALIDAD, effort: 6 }).toFile(destino)

  const despues = (await stat(destino)).size
  totalAntes += antes
  totalDespues += despues

  filas.push({
    archivo: relative(RAIZ, ruta).replace(/\\/g, '/'),
    antes: enMB(antes),
    después: enMB(despues),
    ahorro: Math.round((1 - despues / antes) * 100) + '%',
  })
}

// Lo normal es que no haya nada que convertir: en el repo solo viven los .webp
// ya optimizados. Solo aparece trabajo cuando se agrega una foto nueva.
if (filas.length === 0) {
  console.log('No hay imágenes nuevas que convertir, todo está en WebP.')
} else {
  console.table(filas)
  console.log(
    `\nTotal: ${enMB(totalAntes)} → ${enMB(totalDespues)} ` +
      `(${Math.round((1 - totalDespues / totalAntes) * 100)}% menos)`
  )
}
