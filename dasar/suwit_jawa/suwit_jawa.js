// Suwit Jawa

let hasil = '';
let ulang = true;
while (ulang) {
  // Menangkap pilihan player
  let player = prompt('Suwit Jawa\nSilahkan pilih salah satu: gajah, orang, atau semut');

  // Menangkap pilihan computer
  let comp = Math.random();

  // Membangkitkan bilangan random
  if (comp < 0.3333) {
    comp = 'gajah';
  } else if (comp > 0.33 && comp < 0.666) {
    comp = 'orang';
  } else {
    comp = 'semut';
  }

  // Menentukan rules
  if (['gajah', 'orang', 'semut'].includes(player) == false) hasil = 'Anda memasukkan pilihan yang salah!';
  if (player == 'gajah') hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
  if (player == 'semut') hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
  if (player == 'orang') hasil = (comp == 'semut') ? 'MENANG!' : 'KALAH!';
  if (player == comp) hasil = 'SERI!';

  // Tampilkan hasil
  alert('Computer: ' + comp + '\n' + 'Player: ' + player + '\n' + 'Hasil: ' + '\n' + '  Player: ' + hasil);

  ulang = confirm('Apakah anda ingin mengulangi lagi?');
}