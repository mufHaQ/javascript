let comp = Math.random();

if (comp <= 0.1) {
  comp = '1';
} else if (comp < 0.2 && comp > 0.1) {
  comp = '2';
} else if (comp < 0.3 && comp > 0.2) {
  comp = '3';
} else if (comp < 0.4 && comp > 0.3) {
  comp = '4';
} else if (comp < 0.5 && comp > 0.4) {
  comp = '5';
} else if (comp < 0.6 && comp > 0.5) {
  comp = '6';
} else if (comp < 0.7 && comp > 0.6) {
  comp = '7';
} else if (comp < 0.8 && comp > 0.7) {
  comp = '8';
} else if (comp < 0.9 && comp > 0.8) {
  comp = '9';
} else if (comp < 1) {
  comp = '10';
}

let hasil = '';
let kesempatan = 5;
while (kesempatan > 0) {
  let player = parseInt(prompt('Anda memiliki 3 kesempatan\n' + 'Silahkan tebak angka dari 1-10: '));

  if (comp == player) {
    hasil = 'BERHASIL!';
    kesempatan = 0;
  } else {
    kesempatan--;
    if (player > comp) {
      hasil = 'GAGAL!';
      alert('Anda gagal menebak angka\n' + 'Angka terlalu besar\n' + 'Kesempatan: ' + kesempatan);
    } else {
      hasil = 'GAGAL!';
      alert('Anda gagal menebak angka\n' + 'Angka terlalu kecil\n' + 'Kesempatan: ' + kesempatan);
    }
  }
}
alert('Angka yang dicari: ' + comp + '\n' + 'Hasil: ' + hasil);