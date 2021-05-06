const gajah = document.querySelector('.gajah')
const orang = document.querySelector('.orang')
const semut = document.querySelector('.semut')
const img = document.querySelectorAll('.bawah img')
const hasilGame = document.querySelector('.hasil .hasil-game')
const cmptr = document.querySelector('.computer img')

function comp() {
  let comp = Math.random()

  if (comp < 0.34) return 'gajah'
  if (comp > 0.33 && comp < 0.67) return 'orang'
  return 'semut'
}

function hasil(comp, player) {
  if (player == comp) return 'SERI!'
  if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!'
  if (player == 'orang') return (comp == 'semut') ? 'MENANG!' : 'KALAH!'
  if (player == 'semut') return (comp == 'gajah') ? 'MENANG!' : 'KALAH!'
}

function putar() {
  const gambar = ['gajah', 'orang', 'semut']
  let i = 0
  const startTime = new Date().getTime()
  setInterval(function () {
    if (new Date().getTime() - startTime > 1000) {
      clearInterval()
      return
    }
    cmptr.setAttribute('src', 'img/' + gambar[i++] + '.png')
    if (i == gambar.length) i = 0
  }, 100)
}

img.forEach((e) => {
  e.addEventListener('click', function () {
    const computer = comp()
    const player = e.className
    const hsl = hasil(computer, player)
    putar()
    setTimeout(() => {
      cmptr.setAttribute('src', 'img/' + computer + '.png')
      console.log('\ncomputer: ' + computer)
      console.log('player: ' + player)
      hasilGame.innerText = hsl
    }, 1000);
  })
});

// gajah.addEventListener('click', function(){
//   const computer = comp()
//   const player = gajah.className
//   const hsl = hasil(computer, player)
//   console.log('\ncomp: ' + computer)
//   console.log('player: ' + player)
//   hasilGame.innerText = hsl

//   cmptr.setAttribute('src', 'img/' + computer + '.png')
// })

// orang.addEventListener('click', function () {
//   const computer = comp()
//   const player = orang.className
//   const hsl = hasil(computer, player)
//   console.log('\ncomp: ' + computer)
//   console.log('player: ' + player)
//   hasilGame.innerText = hsl

//   cmptr.setAttribute('src', 'img/' + computer + '.png')
// })

// semut.addEventListener('click', function () {
//   const computer = comp()
//   const player = semut.className
//   const hsl = hasil(computer, player)
//   console.log('\ncomp: ' + computer)
//   console.log('player: ' + player)
//   hasilGame.innerText = hsl

//   cmptr.setAttribute('src', 'img/' + computer + '.png')
// })