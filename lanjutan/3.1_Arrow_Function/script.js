// Arrow Function

// implicit return
// let nama = (nama, waktu) => `Selamat ${waktu}, ${nama}.`
// console.log(nama('Ulhaq', 'Pagi'))

let arr = ['asdasdasdasdasda', 'jsandnaskldasd', 'oioioioi']
// let mp = arr.map((lng) => lng.length)
// console.log(mp)

let mp2 = arr.map(nama => ({
  nama,
  length: nama.length
}))
console.table(mp2)