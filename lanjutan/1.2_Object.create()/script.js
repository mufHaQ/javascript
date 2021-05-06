// Object.create()
const methodSiswa = {
  makan: function(porsi) {
    this.energi += (porsi * 2)
    return this.energi
  },
  main: function(jam) {
    this.energi -= (jam * 2) 
    return this.energi
  },
  tidur: function(jam) {
    this.energi += (jam * 5)
    return this.energi
  }
}

function Siswa(nama, energi = 10) {
  let siswa = Object.create(methodSiswa)
  siswa.nama = nama
  siswa.energi = energi
  // siswa.makan = methodSiswa.makan
  // siswa.main = methodSiswa.main
  return siswa
}
let ulhaq = Siswa('Dliyaulhaq Mufliansyah')