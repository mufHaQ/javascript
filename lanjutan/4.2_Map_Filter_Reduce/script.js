// Filter, Map & Reduce

const angka = [-9, 1, 9, -6, -5, 2, 10, -2, -7, -10, -4, 5, 6, -1, -3]
const angka2 = [4, 2, 14, 15, 5, 12, 10, 13, 3, 11, 8, 7, 1, 6, 9]
const angka3 = [1, 2, 3, 4, 5]

// mencari angka >= 3

// for
// let newAngka = []
// for ( let i = (-10); i <= angka.length; i++ ) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i])
//   }
// }
// console.log(newAngka)

// filter
// let newAngka = angka.filter(a => a >= 3)
// console.log(newAngka);

// map
// kali semua angka dengan 2
// let newAngka = angka.map(a => a * 2)
// console.log(newAngka);

// reduce
// jumlahkan seluruh elemen array
// const newAngka = angka2.reduce((accumulator, currentValue) => accumulator + currentValue)
// console.log(newAngka)
// const newAngka2 = angka3.reduce((acc, curr) => acc + curr)
// console.log(newAngka2);

// Method Chaining
// Cari angka > 5
// angka * 3
// jumlahkan
const hasil = angka3.filter(a => a > 1) // 2, 3, 4, 5
.map(a => a * 3) // 6, 9, 12, 15
.reduce((acc, curr) => acc + curr) // 42
console.log(hasil);