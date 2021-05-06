// Promise





// jQuery
// $.ajax({
//   url: 'http://www.omdbapi.com/?apikey=cb658281&s=Avengers',
//   success: res => console.log(res)
// })


// Vanilla Javascript
// const xhr = new XMLHttpRequest()
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       console.log(JSON.parse(xhr.response))
//     } else {
//       console.log(xhr.responseText)
//     }
//   }
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=cb658281&s=Avengers')
// xhr.send()





// Promise
// Object yang merepresentasikan keberhasilan/kegagalan sebuah event yang Asychronous di masa yang akan datang
// janji (terpenuhi/ingkar)
// states: (fullfield/rejected/pending)
// callback: (resolve/reject/finally)
// aksi: terpenuhi (then) | tidak terpenuhi (catch)











// Contoh:
// let ditepati = false
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve('Janji telah ditepati!')
//   } else {
//     reject('Ingkar janji!')
//   }
// })
// janji1
//   .then(res => console.log(res))
//   .catch(res => console.log(res))

// Contoh2:
// let ditepati = false
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve('Janji ditepati!')
//     }, 2000)
//   } else {
//     setTimeout(() => {
//       reject('Janji tidak ditepati!')
//     }, 2000)
//   }
// })
// console.log('-----Mulai-----')
// janji2
//   .finally(() => console.log('Selesai Menunggu'))
//   .then(() => console.log(janji2))
//   .catch(() => console.log(janji2))
// console.log(janji2.finally(() => console.log('Selesai Menunggu')).then(() => console.log(janji2)).catch(() => console.log(janji2)))
// console.log('-----Selesai-----')


// promise.all
const film = new Promise(res => {
  setTimeout(() => {
    res([{
      Judul: 'The Avengers',
      Penulis: 'Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)',
      Aktor: 'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth',
      Tahun: '2012',
      Genre: 'Action, Adventure, Sci-Fi'
    }])
  }, 1000)
})

const cuaca = new Promise(res => {
  setTimeout(() => {
    res([{
      Hari: 'Senin',
      Temperatur: 29,
      Kondisi: 'Berawan'
    }])
  }, 500)
})

// film.finally(() => console.log('Selesai Memuat')).then(res => console.log(res))

Promise.all([film, cuaca])
  .finally(() => console.log('Selesai Memuat'))
  .then(res => {
    // console.log(res)
    const [film, cuaca] = res
    console.log(film)
    console.log(cuaca)
  })







// Fetch
// fetch('http://www.omdbapi.com/?apikey=cb658281&s=Avengers')
//   .then(res => res.json())
//   .then(res => console.log(res))