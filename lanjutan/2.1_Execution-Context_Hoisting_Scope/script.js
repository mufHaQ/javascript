// Execution Context, Hoisting & Scope

// console.log(nama)
// var nama = 'ulhaq'

// Creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// Execution phase



// -------------
// console.log(hello());

// -------------
// var nama = 'ulhaq'
// var umur = 16

// -------------
// function tidak apa jika dipanggil sebelum dibuat
// var harus di definisikan terlebih dahulu
// console.log(hello());

// -------------
// function hello() {
//   return `Halo, nama saya ${nama}, saya berumur ${umur} tahun`
// }


// -------------
// function membuat Local Execution Context
// yang di dalamnya terdapat Creation & Execution phase
// window & arguments
// hoisting






// studi kasus

// kasus-1
// var url = 'https://github.com/'
// var username = 'mufHaQ'

// function cetakURL(username, url) {
//   var github_url = url + username
//   return github_url
// }

// console.log(cetakURL(username, url));


// kasus-2
// function a() {
//   console.log('ini a')

//   function b() {
//     console.log('ini b')

//     function c() {
//       console.log('ini c')
//     }
//     c()
//   }
//   b()
// }
// a()