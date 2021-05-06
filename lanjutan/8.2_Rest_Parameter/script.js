// Rest Parameter


// function myFunc() {
//   return [...arguments]
// }
// console.log(myFunc(1, 2, 3, 4, 5));


// function jumlah(...args) {
//   // let total = 0
//   // for (const arg of args) {
//   //   total += arg
//   // }
//   // return total

//   return args.reduce((acc, curr) => acc + curr)
// }

// console.log(jumlah(1, 2, 3, 4, 5));


// Array Destructuring
// const kel  = ['orang1', 'orang2', 'orang3', 'orang4', 'orang5']
// const [ketua, wakil, ...anggota] = kel
// console.log(anggota);


// Object Destructuring
// const team = {
//   pm: 'Orang1',
//   frontend1: 'Orang-Frontend-1',
//   frontend1: 'Orang-Frontend-2',
//   backend: 'Orang-Backend-2',
//   ux: 'Orang-UX',
//   devops: 'Orang-DevOps'
// }

// const {pm, ...devTeam} = team
// console.log(devTeam)


// Filtering
function filterBay(type, ...values) {
  return values.filter(v => typeof(v) === type)
}

console.log(filterBay('number', 1, 2, 'Orang', 3, true, false))