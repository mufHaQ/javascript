// Angkot 3

let jumlahAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

for (; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No.' + noAngkot + ' Sedang beroperasi.');
  } else {
    console.log('Angkot No.' + noAngkot + ' Sedang tidak beroperasi.');
  }
}