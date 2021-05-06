// Async Await

// const nProm1 = true
// const prom1 = new Promise((res, rej) => {
//   const waktu = 2000
//   if (waktu < 5000) {
//     if (nProm1) {
//       setTimeout(() => {
//         res('Promise Berhasil!')
//       }, waktu)
//     } else {
//       rej('Promise Gagal!')
//     }
//   } else {
//     rej('Promise Gagal, waktu terlalu lama!')
//   }
// })

// async function start() {
//   console.log('-----Mulai-----');
//   await prom1
//     .then(res => console.log(res))
//     .catch(res => console.log(res))
//   setTimeout(() => {
//     console.log('-----Selesai-----');
//   }, 100)
// }

// start()



function syc() {
  const nProm1 = true
  return prom1 = new Promise((res, rej) => {
    const waktu = 2000
    if (waktu < 5000) {
      if (nProm1) {
        setTimeout(() => {
          res('Promise Berhasil!')
        }, waktu)
      } else {
        rej('Promise Gagal!')
      }
    } else {
      rej('Promise Gagal, waktu terlalu lama!')
    }
  })
}

async function start() {
  console.log('-----Mulai-----');
  try {
    const test = await syc()
    console.log(test);
  } catch (err) {
    console.error(err)
  }
  console.log('-----Selesai-----');
}

start()