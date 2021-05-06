// This pada Arrow Function


// Constructor Function
// const siswa = function() {
//   this.nama = 'Ulhaq'
//   this.umur = '16 Tahun'
//   console.log(this)
// }

// siswa.prototype.halo = function(nama) {
//   return `Halo ${nama}.`
// }

// let sws = new siswa()


// Arror Function

// const siswa = function () {
//   this.nama = 'Ulhaq'
//   this.umur = '16 Tahun'
//   console.log(this)
// }

// // Kalau method bisa menggunakan Arrow Function
// siswa.prototype.halo = nama => {
//   return `Halo ${nama}.`
// }

// // Arrow Function tidak menyimpan this/tidak ada this
// siswa.prototype.sayHalo = () => `Halo ${this}.`

// let sws = new siswa()


// let nama = 'dliya'
// let one = function () {
//   this.nama = 'ulhaq'
//   return (function () {
//     console.log(this.nama);
//   }())
// }

// let two = function () {
//   this.nama = 'ulhaq'
//   return (() => {
//     console.log(this.nama);
//   })()
// }

// let on = new one()
// let tw = new two()






// const sw1 = {
//   nama: 'ulhaq',
//   printNama: function() {
//     return this.nama
//   }
// }

// const sw2 = {
//   nama: 'ulhaq',
//   printNama: () => {
//     return this.nama
//   }
// }

// console.log(sw1.printNama())
// console.log(sw2.printNama())












// Latihan

const box = document.querySelector('.box')

box.addEventListener('click', function() {
  let satu = 'size'
  let dua = 'color'

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu]
  } 

  box.classList.toggle(satu)
  setTimeout(() => {
    this.classList.toggle(dua)
  }, 500);
})



