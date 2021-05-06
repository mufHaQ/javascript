// Cara membuat Object

// 1. Object Literal
let siswa1 = {
  nama: 'ulhaq',
  alamat: 'Kudus',
  energi: 10,
  makan: function(makanan, porsi = 1){
    this.energi += (porsi * 5)
    return `hari ${this.nama} sarapan dengan ${makanan}`
  },
  main: function(){
    this.energi -= 5
    return `energi = ${this.energi}`
  }
}


// 2. Function Declaration
function Siswa2(nama, energi = 10) {
  let siswa  = {}
  siswa.nama = nama
  siswa.energi = energi
  siswa.makan = function(makanan, porsi){
    this.energi += (porsi * 5)
    return `hari ${this.nama} sarapan dengan ${makanan}`
  }
  siswa.main = function(){
    this.energi -= 5
    return `energi = ${this.energi}`
  }
  return siswa
}
let ulhaq1 = Siswa2('ulhaq', 10)


// 3. Constructor Function
function Siswa3(nama, energi = 10) {
  this.nama = nama
  this.energi = energi
  this.makan = function (makanan, porsi) {
    this.energi += (porsi * 5)
    return `hari ${this.nama} sarapan dengan ${makanan}`
  }
  this.main = function () {
    this.energi -= 5
    return `energi = ${this.energi}`
  }
}
let ulhaq2 = new Siswa3('ulhaq', 10)


// 4. Object.Create
