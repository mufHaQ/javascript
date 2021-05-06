var penumpang = []

var naik = function (nama, penumpang) {
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

var turun = function (nama, penumpang) {
  if (penumpang == 0) {
    console.log('Angkot masih kosong!')
    return penumpang
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == nama) {
        penumpang[i] = undefined
        return penumpang
      } else if (penumpang[i] != nama) {
        console.log('Penumpang tidak ada!')
        return penumpang
      }
    }
  }
}