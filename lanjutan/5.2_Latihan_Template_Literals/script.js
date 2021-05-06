// Latihan Template Literals

// 1. HTML Fragments
// const siswa = {
//   nama: 'Dliyaulhaq Mufliansyah',
//   umur: '16 Tahun',
//   nis: '3733',
//   email: 'masbrowmess33@gmail.com'
// }

// const el = `<div class="siswa">
//   <h1>Siswa</h1>
//   <ul>
//     <li class="nama">
//       <h3>Nama: ${siswa.nama}</h3>
//     </li>
//     <li class="umur">
//       <h3>Umur: ${siswa.umur}</h3>
//     </li>
//     <li class="nis">
//       <h3>nis: ${siswa.nis}</h3>
//     </li>
//     <li class="email">
//       <h3>email: ${siswa.email}</h3>
//     </li>
//   </ul>
// </div>`




// 2. Looping
// const siswa = [
//   {
//     nama: 'siswa 1',
//     email: 'siswa1@mail.com'
//   },
//   {
//     nama: 'siswa 2',
//     email: 'siswa2@mail.com'
//   },
//   {
//     nama: 'siswa 3',
//     email: 'siswa3@mail.com'
//   },
//   {
//     nama: 'siswa 4',
//     email: 'siswa4@mail.com'
//   },
// ]

// const el = `<div class="siswa">
//   <h1>Siswa: </h1>
//   ${siswa.map(m => `<ul>
//     <li>
//       <h3>Nama: ${m.nama}</h3>
//       </li>
//     <li>
//       <h3>Email: ${m.email}</h3>
//     </li>
//   </ul>`)}
// </div>`




// 3. Conditional
// const lagu = {
//   judul: 'Attention',
//   penyanyi: 'Charlie Puth',
// }

// const el = `<div class="lagu">
//   <h1>Lagu: </h1>
//   <ul>
//     <li><h2>Judul: ${lagu.judul}</h2></li>
//     <li><h2>Penyanyi: ${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ``}</h2></li>
//   </ul>
// </div>`




// 4. Nested
const siswa = {
  nama: 'Dliyaulhaq',
  kelas: 'XI RPL 2',
  mapel: [
    'Bahasa Indonesia',
    'Bahasa Inggris',
    'Matematika'
  ]
}

function cetakMapel(mapel) {
  return `
    <ol>
      ${mapel.map(mp => `
        <h2>
          <li>${mp}</li>
        </h2>
      `).join('')}
    </ol>
  `
}

const el = `<div class="siswa">
  <h2>Nama: ${siswa.nama}</h2>
  <h2>Kelas: ${siswa.kelas}</h2>
  <h2>Mapel: </h2>
  <ul>
    ${cetakMapel(siswa.mapel)}
  </ul>
</div>`




document.body.innerHTML = el