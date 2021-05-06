// Object Revisited



// 1. Object Literal
// let siswa = {
//   nama: 'Dliyaulhaq Mufliansyah',
//   energi: 10,
//   makan: function(porsi) {
//     this.energi += (porsi * 5)
//     return this.energi
//   }
// }


// 2. Function Declaration
// function Siswa(nama, energi = 10) {
//   let siswa = {}
//   siswa.nama = nama
//   siswa.energi = energi
//   siswa.makan = function (porsi) {
//     this.energi += (porsi * 5)
//     return this.energi
//   }
//   siswa.main = function(jam) {
//     this.energi -= (jam * 5)
//     return this.energi
//   }
//   return siswa
// }
// let ulhaq = Siswa('Dliyaulhaq Mufliansyah')


// 3. Constructor Function
function Siswa(nama, energi = 10) {
  this.nama = nama
  this.energi = energi
  this.makan = function (porsi) {
    this.energi += (porsi * 5)
    return this.energi
  }
  this.main = function (jam) {
    this.energi -= (jam * 5)
    return this.energi
  }
}
let ulhaq = new Siswa('Dliyaulhaq Mufliansyah')