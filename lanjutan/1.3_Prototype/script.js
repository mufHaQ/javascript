// Prototype

function Siswa1(nama, energi = 10) {
  this.nama = nama
  this.energi = energi
}

Siswa1.prototype.makan = function (makanan, porsi) {
  this.energi += (porsi * 5)
  return `hari ${this.nama} sarapan dengan ${makanan}`
}

Siswa1.prototype.main = function(waktu) {
  this.energi -= waktu
  return `${this.nama} main selama ${waktu} jam.`
}

Siswa1.prototype.tidur = function(waktu) {
  this.energi += waktu
  return `${this.nama} tidur selama ${waktu} jam.`
}

let ulhaq1 = new Siswa1('ulhaq')



// versi class
class Siswa2 {
  constructor(nama, energi = 10) {
    this.nama = nama
    this.energi = energi
  }

  makan(makanan, porsi) {
    this.energi += (porsi * 5)
    return `hari ${this.nama} sarapan dengan ${makanan}`
  }

  main(waktu) {
    this.energi -= waktu
    return `${this.nama} main selama ${waktu} jam.`
  }

  tidur(waktu) {
    this.energi += waktu
    return `${this.nama} tidur selama ${waktu} jam.`
  }
}

let ulhaq2 = new Siswa2('ulhaq')