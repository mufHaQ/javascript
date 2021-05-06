var penumpang = ['ulhaq', undefined, 'dliya']

var tambah = function(nama, penumpang) {
  if (penumpang.length == 0) {
    penumpang.push(nama)
    return penumpang
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = nama
        return penumpang
      } else if (penumpang[i] == nama) {
        console.log(nama + ' sudah naik ke angkot.')
        return penumpang
      } else if (i == penumpang.length - 1) {
        penumpang.push(nama)
        return penumpang
      }
    }
  }
}

function turun() {

}