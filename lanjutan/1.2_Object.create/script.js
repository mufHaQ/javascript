// 2. Function Declaration (cara yang lebih efektif)
const methodSiswa1 = {
  makan: function (makanan, porsi) {
    this.energi += (porsi * 5)
    return `hari ${this.nama} sarapan dengan ${makanan}`
  },
  main: function () {
    this.energi -= 5
    return `energi = ${this.energi}`
  },
  tidur: function () {
    this.energi += 5
    return `energi = ${this.energi}`
  }
}

function Siswa2(nama, energi = 10) {
  let siswa = {}
  siswa.nama = nama
  siswa.energi = energi
  siswa.makan = methodSiswa1.makan
  siswa.main = methodSiswa1.main
  siswa.tidur = methodSiswa1.tidur
  return siswa
}
let ulhaq1 = Siswa2('ulhaq')


// 4. Object.Create
const methodSiswa2 = {
  makan: function (makanan, porsi) {
    this.energi += (porsi * 5)
    return `hari ${this.nama} sarapan dengan ${makanan}`
  },
  main: function () {
    this.energi -= 5
    return `energi = ${this.energi}`
  },
  tidur: function () {
    this.energi += 5
    return `energi = ${this.energi}`
  }
}

function Siswa3(nama, energi = 10) {
  let siswa = Object.create(methodSiswa2)
  siswa.nama = nama
  siswa.energi = energi
  return siswa
}
let ulhaq2 = Siswa3('ulhaq')