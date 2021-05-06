// while


// let i = 1;
// while(i <= 100) {
//   console.log('Nilai i ke-' + i);
//   i++;
// }

let ulang = true;
let i = 1;
while(ulang) {
  console.log('Hello World ke-' + i);
  ulang = confirm('Ulang?');
  i++;
}