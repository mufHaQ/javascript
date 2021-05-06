// Template Literal/Template String

// Penggunaan: 
// Menggunakan back-tick (``)
// Multi-line String
// Embedded Expression
// HTML Fragments
// Expression Interpolation
// Tagged Template

// const nama = 'Dliyaulhaq'
// const umur = '16 Tahun'
// console.log(`Halo, nama saya ${nama}, umur saya ${umur}.`);

// console.log(`${alert('ok')}`)

// pengkondisian
// const x = 10
// console.log(`${x <= 10 ? 'x <= 10' : 'x > 10'}`);

const siswa = {
  nama: 'Ulhaq',
  kelas: 'XI RPL 2',
  umur: '16 Tahun'
}

const el = `<div class="siswa">
  <ul>
    <li><h2>Nama: ${siswa.nama}</h2></li>
    <li><h2>Kelas: ${siswa.kelas}</h2></li>
    <li><h2>Umur: ${siswa.umur}</h2></li>
  </ul>
</div>`

// console.log(el);