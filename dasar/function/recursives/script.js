// recursives

// function angka(n) {
//   console.log(n)
//   if (n === 100) return false
//   return angka(n+1)
// }
// angka(1)

function faktorial(n) {
  if (n === 0) return 1
  return n * faktorial(n-1)
}
console.log(faktorial(5))