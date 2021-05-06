// Spread Operator
// Memecah (expand/unpack) iterables menjadi single element



// menggabungkan 2 array
// const siswa = ['siswa ke-1', 'siswa ke-2', 'siswa ke-3']
// const guru = ['guru ke-1', 'guru ke-2', 'guru ke-3']
// // const orang = siswa.concat(guru)
// const orang = [...siswa, ...guru];
// console.log(orang);


// meng-copy array
// const siswa = ['siswa ke-1', 'siswa ke-2', 'siswa ke-3']
// const siswa1 = [...siswa]
// siswa1[0] = 'siswa ke-100'
// console.log(siswa1);

// const li = document.querySelectorAll('ul li')
// // const siswa = []
// // for ( let i = 0; i < li.length ; i++ ) {
// //   siswa.push(li[i].textContent)
// // }
// const siswa = [...li].map(m => m.textContent)
// console.log(siswa);

const nama = document.querySelector('.nama')
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('')
nama.innerHTML = huruf
const span = document.querySelectorAll('span')