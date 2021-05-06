// Parameter & Argument

function tambah(a, b) {
  return a + b
}

function kali(a, b) {
  return a * b
}

let h1 = tambah(10, 20, 30) // Nilai 30 akan menjadi nilai default, yaitu undefined
// semua nilai h1, akan ditampung kedalam variabel bernama argumenst

function args() {
  // return arguments[0] + arguments[1]
  let hasil = 0
  for (let i = 0; i < arguments.length; i++) {
    hasil += arguments[i]
  }
  return hasil
}

console.log(args(10, 20, 70))