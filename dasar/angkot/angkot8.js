// angkot8

function Angkot(supir, trayek, penumpang, kas) {
  this.supir = supir
  this.trayek = trayek
  this.penumpang = penumpang
  this.kas = kas

  this.naik = function (namaPenumpang) {
    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == undefined) {
        this.penumpang[i] = namaPenumpang
        return this.penumpang
      }
    }
    
    this.penumpang.push(namaPenumpang)
    return this.penumpang
  }

  this.turun = function (namaPenumpang, bayar) {
    if (this.penumpang.length == 0) {
      alert('Angkot masih kosong!')
      return false
    }

    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined
        this.kas += bayar
        return this.penumpang
      }
    }
  }
}

var angkot1 = new Angkot('Steve', ['Kudus', 'Pati'], [], 0)
var angkot2 = new Angkot('Arga', ['Pati', 'Kudus'], [], 0)