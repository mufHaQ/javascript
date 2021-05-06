// Angkot 2
let jumlahAngkot = prompt('Masukkan jumlah angkot: ');
let angkotBeroperasi = prompt('Masukkan jumlah angkot yang beroperasi: ');
let nomorAngkot = 1;

while (nomorAngkot <= angkotBeroperasi) {
  console.log('Angkot No.' + nomorAngkot + ' Beroperasi dengan baik.');
  nomorAngkot++;
}

for (; nomorAngkot <= jumlahAngkot; nomorAngkot++) {
  console.log('Angkot No.' + nomorAngkot + ' Sedang tidak beroperasi.');
}