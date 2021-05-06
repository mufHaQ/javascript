// CLosure

// function init() {
//   let nama = 'ulhaq'
//   function tampilNama() {
//     console.log(nama)
//   }
//   tampilNama()
// }
// init()


// function init() {
//   // let nama = 'ulhaq'
//   return function(nama) {
//     console.log(nama)
//   }
// }
// let innt = init()
// innt('Ulhaq')


// function salam(waktu) {
//   return function(nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}.`)
//   }
// }
// let pagi = salam('Pagi')
// let siang = salam('Siang')
// let sore = salam('Sore')
// let malam = salam('Malam')
// pagi('Ulhaq')


let add = (function() {
  let count = 0
  return function() {
    return ++count
  }
}())
count = 10
// let addC = add()
console.log(add())
console.log(add())
console.log(add())