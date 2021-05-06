// Destructuring Assignment/Variables


// const perkenalan = ['Halo', 'nama', 'saya', 'Dliyaulhaq Mufliansyah']


// 1. Destruction Array
// const [salam, str, nama] = [perkenalan[0], perkenalan[1] + ' ' + perkenalan[2], perkenalan[3]]


// 2. Skipping items
// const [salam, , , nama] = perkenalan


// 3. Swap items
// let a = 1;
// let b = 2;
// [a, b] = [b, a]


// 4. Function return value
// function coba() {
//   return [1, 2]
// }

// const [a, b] = coba()


// 5. Rest parameter
// const [...vals] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// 6. Destructuring Objects
// const siswa = {
//   nama: 'Dliyaulhaq Mufliansyah',
//   umur: '16 Tahun'
// }

// const {nama, umur} = siswa


// 7. Assignment tanpa deklarasi object
// ({ nama, umur } = { nama: 'Dliyaulhaq Mufliansyah', umur: '16 Tahun' })


// 8. Assign ke variabel baru
// const siswa = {
//   nama: 'Dliyaulhaq Mufliansyah',
//   umur: '16 Tahun'
// }

// const { nama: n, umur: u } = siswa


// 9. Default Val
// const siswa = {
//   nama: 'Dliyaulhaq Mufliansyah',
//   umur: '16 Tahun'
// }

// const {nama, umur, email = 'email@default.com'} = siswa


// 10. Memberi nilai default & assign ke variabel baru
// const siswa = {
//   nama: 'Dliyaulhaq Mufliansyah',
//   umur: '16 Tahun'
// }

// const {
//   nama: n,
//   umur: u,
//   email: e = 'email@default.com'
// } = siswa


// 11. Rest parameter 2
// const siswa = {
//   nama: 'Dliyaulhaq Mufliansyah',
//   umur: '16 Tahun'
// }

// const {...vals} = siswa


// 13. Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const siswa = {
  id: 1,
  nama: 'Dliyaulhaq Mufliansyah',
  umur: '16 Tahun'
}

// function getID(siswa) {
//   return siswa.id
// }

// jika yang diambil hanya salah satu item dari object 
function getID({id}) {
  return id
}

console.log(getID(siswa));