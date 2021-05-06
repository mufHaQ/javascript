// Destructuring Function

// function penjumlahanPerkalian(a, b) {
//   return [a + b, a * b]
// }

// function kalkulasi(a, b) {
//   return [a + b, a * b, a - b, a / b]
// }

// const jumlah = penjumlahanPerkalian(10, 100)
// const [jumlah, kali] = penjumlahanPerkalian(10, 100)

// console.log(jumlah);
// console.log(kali);

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b
//   }
// }

// const {tambah: tam, kurang: kur, kali: kal, bagi: bag} = kalkulasi(10, 100)





// Destructuring Function Arguments
const dataUlhaq = {
  nama: 'Dliyaulhaq Mufliansyah',
  umur: '16 Tahun',
  email: 'masbrowmess33@gmail.com',
  alamat: {
    provinsi: 'Jawa Tengah',
    kabupaten: 'Kudus',
    kecamatan: 'Undaan',
    desa: 'Undaan Tengah',
    rw: '3', 
    rt: '5',
    pos: '59372'
  }
}

// function printData(nama, umur) {
//   return `Halo, nama saya ${nama}, umur saya ${umur}.`
// }
// console.log(printData(dataUlhaq.nama, dataUlhaq.umur));

function printData({nama, umur, alamat: {provinsi, kabupaten, kecamatan, desa, rw, rt, pos}}) {
  return `Halo, nama saya ${nama}, umur saya ${umur}, alamat RT/RW ${rt + '/' + rw}.`
}

console.log(printData(dataUlhaq));