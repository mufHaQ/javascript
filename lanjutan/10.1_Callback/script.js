// Callback



// Synchronous Callback
// function halo(nama) {
//   alert(`Halo, ${nama}`)
// }
// function cetakNama(callback) {
//   const nama = prompt('Masukkan Nama: ')
//   callback(nama)
// }
// cetakNama(nama => alert(`Halo, ${nama}`))



// Contoh Asynchronous Callback
// const orang = [
//   {
//     nama: 'Orang Kudus',
//     alamat: 'Kudus'
//   },
//   {
//     nama: 'Orang Pati',
//     alamat: 'Pati'
//   },
//   {
//     nama: 'Orang Semarang',
//     alamat: 'Semarang'
//   }
// ]
// console.log('-----Mulai-----')
// orang.forEach(orang => {
//   for (let i = 0; i <= 10000000; i++) {
//     const date = new Date()
//   }
//   console.log(orang.nama);
// })
// console.log('-----Selesai-----');



// Asynchronous Callback
// function getDataURL(url, success, error) {
//   let xhr = new XMLHttpRequest()
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response)
//       } else if (xhr.status === 404) {
//         error()
//       }
//     }
//   }
//   xhr.open('get', url)
//   xhr.send()
// }
// console.log('-----Mulai-----')
// getDataURL('data/link.json', res => {
//   const link = JSON.parse(res).data
//   link.map(lk => console.log(lk.url))
// }, err => {
//   console.log(err);
// })
// console.log('-----Selesai-----')


// jQuery
console.log('-----Mulai-----')
$.ajax({
  url: 'data/link.json',
  success: res => {
    res.data.forEach(dt => console.log(dt.url))
  },
  error: e => {
    console.log(e.responseText)
  }
})
console.log('-----Selesai-----')