// Latihan Map, Filter & Reduce



// Ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'))

// Pilih hanya yang 'JAVASCRIPT LANJUTAN'
let js_lanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// Ambil durasi masing masing video
  .map(item => item.dataset.duration)

// Ubah durasi menjadi int, ubah menit menjadi detik
  .map(waktu => {
    // 10:30
    let splitWaktu = waktu.split(':').map(part => parseFloat(part))
    return (splitWaktu[0] * 60) + splitWaktu[1]
  })

// Jumlah semua detiknya
  .reduce((total, detik) => total + detik)

// Ubah formatnya menjadi jam-menit-detik
const jam = Math.floor(js_lanjut / 3600)
js_lanjut = js_lanjut - jam * 3600
const menit = Math.floor(js_lanjut / 60)
const detik = js_lanjut - menit * 60

// Simpan didalam DOM
const totalVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length

const vid = document.querySelector('.jumlah-video')
const dur = document.querySelector('.total-durasi')

vid.textContent = `${totalVideo} Video.`
dur.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`