// Method pada array


var arr = [
  'motor',
  'mobil',
  'kapal/perahu',
  'pesawat'
]


// 1. push: menambah elemen array pada bagian terakhir
// arr.push('kereta')


// 2. pop: menghapus elemen array pada bagian terakhir
// arr.pop()


// 3. unshift: : menambah elemen array pada bagian pertama
// arr.unshift('kereta')


// 4. shift: menghapus elemen array pada bagian pertama
// arr.shift()


// 5. splice: menyisipkan elemen array pada bagian tertentu
// splice(indexAwal, mauDihapusBerapa(Optional), mauDitambahElemenApa(Optional))
// arr.splice(3, 0, 'kereta')
// arr.splice(2, 1)


// 6. slice: mengambil beberapa bagian pada array, untuk menjadi array yang baru
// slice(awal, akhir)
// let arr1 = arr.slice(0, 2)

// console.log(arr.join(', '))
// console.log(arr1.join(', '))


// var arr = ['motor', 'mobil', 'kereta', 'kapal/perahu', 'pesawat']
// 7. forEach
// arr.forEach(function(e, i, a) {
//   console.log('kendaran ke-' + (i+1) + ': ' + e)
// });


// 8. map
// var angk = angka.map(function(e){
//   return e * 2
// })
// console.log(angk.join(', '))


// 9. sort
// var angka = [1, 2, 20, 10, 30, 100, 15, 40, 4, 3, 6, 7, 5, 9, 8]
// angka.sort(function (a, b) {
//   return a - b
// });
// console.log(angka.join(', '))


// 10. filter
var angka = [1,2,5,4,9,7,8,6,3,10,60,40,30,20]
var angk = angka.filter(function (e) {
  return e != 60
})
// angk.sort(function(a, b) {
//   return a-b
// })
// console.log(angk)


// 11. find
// var angka = [1, 2, 5, 4, 9, 7, 8, 6, 3, 10, 60, 40, 30, 20]
// var angk = angka.find(function(e) {
//   return e > 9
// })
console.log(angk)