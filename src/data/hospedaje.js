// Lugares de hospedaje sugeridos para los invitados.
//
// Las imágenes se importan (no se escriben como cadena) para que Vite las meta
// al build con su hash; una ruta suelta 'assets/images/...' no existe en dist/.
//
// `price` admite tres formas:
//   null                                  -> no se muestra precio
//   400                                   -> un solo precio por noche
//   [{ text: 'Sencilla', price: 400 }]    -> una línea por tipo de habitación

import hotelViaGaray from '../assets/images/hospedajes/hotel_via-garay.webp'
import hotelSantaMonica from '../assets/images/hospedajes/hotel_santa-monica.webp'
import hotelAris from '../assets/images/hospedajes/hotel_aris.webp'
import departamentoMagda from '../assets/images/hospedajes/departamento-magda.webp'
import hotelMeson from '../assets/images/hospedajes/hotel-meson.webp'

export default [
  {
    id: 12,
    nombre: 'Departamento Magda',
    image: departamentoMagda,
    link_maps: '',
    phone: '+523441032525',
    price: 1200,
    description: "Habitación cama king-size, cocina, sala con sofá-cama para 3 personas en centro de Yahualica"
  },
  {
    id: 1,
    nombre: 'Hotel Via Garay',
    image: hotelViaGaray,
    link_maps: 'https://maps.app.goo.gl/EZAfHwnXmFZGLZJe7',
    phone: '+523441011427',
    price: null,
  },
  {
    id: 2,
    nombre: 'Hotel Santa Monica',
    image: hotelSantaMonica,
    link_maps: 'https://maps.app.goo.gl/ussUWCd8hdYkvXi4A',
    phone: '+523447840210',
    price: [
      { text: 'Sencilla', price: 400 },
      { text: 'Doble', price: 500 },
      { text: 'Triple', price: 600 },
    ],
  },
  {
    id: 3,
    nombre: 'Hotel Aris',
    image: hotelAris,
    link_maps: 'https://maps.app.goo.gl/ivSi5WJ1ANfsEfMM8',
    phone: '+523447840451',
    price: null,
  },
  {
    id: 4,
    nombre: 'Hotel El Mesón',
    image: hotelMeson,
    link_maps: 'https://maps.app.goo.gl/iX9bnKdLmAmPgHHp9',
    phone: '+523447840421',
    price: null,
  },
  {
    id: 4,
    nombre: 'Opciones en Airbnb',
    image: '',
    link_maps: 'https://www.airbnb.mx/s/Yahualica-de-Gonz%C3%A1lez-Gallo--Jal./homes?refinement_paths%5B%5D=%2Fhomes&place_id=ChIJv8f795riKIQRuy-WrFpV23Y&acp_id=9e4e2a0b-2517-4363-bf74-337070ae8d95&date_picker_type=calendar&checkin=2026-10-03&checkout=2026-10-04&search_type=user_map_move&query=Yahualica%20de%20Gonz%C3%A1lez%20Gallo%2C%20Jal.&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2026-09-01&monthly_length=3&monthly_end_date=2026-12-01&search_mode=regular_search&price_filter_input_type=2&price_filter_num_nights=1&channel=EXPLORE&ne_lat=21.198115790407787&ne_lng=-102.85162351534893&sw_lat=21.131177418534076&sw_lng=-102.93209523788221&zoom=14.422479791618958&zoom_level=14.422479791618958&search_by_map=true',
    phone: '',
    price: null,
    //
  }
]
