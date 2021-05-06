const li       = document.querySelectorAll('li')
const btn_dark = document.querySelector('button')
const body     = document.querySelector('body')
const container= document.querySelector('.container')

li.forEach((e, i) => {
  li[i].addEventListener('click', function () {
    li[i].classList.toggle('tgl-ligh-blue')
  })
});

btn_dark.addEventListener('click', function () {
  body.classList.toggle('dark-mode')
  if (btn_dark.innerText === 'Dark Mode') {
    btn_dark.innerText = 'Light Mode'
    btn_dark.style.backgroundColor = 'rgb(40, 40, 40)'
    btn_dark.style.color = 'white'
  } else {
    btn_dark.innerText = 'Dark Mode'
    body.removeAttribute('class')
    btn_dark.style.backgroundColor = 'white'
    btn_dark.style.color = 'black'
  }
})