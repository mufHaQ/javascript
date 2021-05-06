// for..of VS for..in





// for..of

// array
const siswa = [
  'Siswa 1',
  'Siswa 2',
  'Siswa 3'
]

// for (let i = 0;i < siswa.length;i++) {
//   console.log(siswa[i]);
// }

// siswa.forEach(e => console.log(e))

// for( const s of siswa ) {
//   console.log(s);
// }

// string
// const nama = 'Dliyaulhaq Mufliansya'
// for (const str of nama) {
//   console.log(str);
// }

// for (const [i, s] of siswa.entries()) {
//   console.log(`${s} adalah siswa ke-${i+1}`);
// }

// NodeList
// const liNama = document.querySelectorAll('.nama')
// liNama.forEach(e => console.log(e.textContent));
// for (const el of liNama) console.log(el.textContent)

// Arguments
// function calc() {
//   // console.log(arguments);

//   let jumlah = 0
//   for ( a of arguments ) {
//     jumlah += a
//   }
//   return jumlah
// }

// console.log(calc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));





// for..in
// const siswa = {
//   nama: 'siswa',
//   umur: '17 Tahun',
//   email: 'siswa@mail.com'
// }

// for ( s in siswa ) {
//   console.log(siswa[s]);
// }