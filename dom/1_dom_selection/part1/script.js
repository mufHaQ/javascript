// DOM Selection

const h1 = document.getElementsByTagName('h1')
const secA = document.getElementsByClassName('section-a')
const tagLi = document.getElementsByTagName('li')

for (let i = 0; i < h1.length; i++) {
  h1[i].style.background = 'black'
  h1[i].style.color = 'white'
}

for (let i = 0; i< tagLi.length; i++) {
  tagLi[i].style.textShadow = '2px 2px 2px rgba(0, 0, 0, .3)'
}

tagLi.forEach(e => {
  console.log(e)
});