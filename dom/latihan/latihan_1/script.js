// Javascript Latihan 1

const h1 = document.querySelector('h1')
const btn_change_color = document.createElement('button')
const btn_change_color_text = document.createTextNode('Change Color')
const btn = document.querySelectorAll('button')
const btn_random_color_text = document.createTextNode('Random')
const btn_random_color = document.createElement('button')
const btn_reset = document.createElement('button')
const btn_reset_text = document.createTextNode('reset')
const input_range_one = document.createElement('input')
const input_range_two = document.createElement('input')
const input_range_three = document.createElement('input')
const br_one = document.createElement('br')
const br_two = document.createElement('br')
const br_three = document.createElement('br')
const div_one = document.createElement('div')
const div_two = document.createElement('div')
const div_three = document.createElement('div')

btn_random_color.append(btn_random_color_text)
btn_change_color.append(btn_change_color_text)
h1.after(btn_change_color)
btn_random_color.setAttribute('type', 'button')
btn_change_color.after(btn_random_color)
btn_reset.append(btn_reset_text)
btn_random_color.after(btn_reset)
btn_reset.after(br_one)
input_range_one.setAttribute('type', 'range')
input_range_two.setAttribute('type', 'range')
input_range_three.setAttribute('type', 'range')
input_range_one.setAttribute('id', 'div_one')
input_range_two.setAttribute('id', 'div_two')
input_range_three.setAttribute('id', 'div_three')
input_range_one.setAttribute('min', '0')
input_range_one.setAttribute('max', '255')
input_range_two.setAttribute('min', '0')
input_range_two.setAttribute('max', '255')
input_range_three.setAttribute('min', '0')
input_range_three.setAttribute('max', '255')
br_one.after(input_range_one)
input_range_one.after(br_two)
br_two.after(input_range_two)
input_range_two.after(br_three)
br_three.after(input_range_three)

btn_change_color.addEventListener('click', function () {
  if (!document.body.classList.contains('light-blue')) {
    document.body.classList.toggle('light-blue')
  } else {
    document.body.removeAttribute('class')
  }
})

input_range_one.value = 255
input_range_two.value = 255
input_range_three.value = 255

btn_reset.addEventListener('click', function () {
  document.body.style.backgroundColor = ''
  document.body.removeAttribute('class')
  document.body.removeAttribute('style')
  input_range_one.value = 255
  input_range_two.value = 255
  input_range_three.value = 255
})

function rdnm() {
  let rn = Math.round(Math.random() * 255)
  return rn
}

function setRndm() {
  return 'rgb(' + rdnm() + ', ' + rdnm() +
    ', ' + rdnm() +
    ')'
}

btn_random_color.addEventListener('click', function () {
  document.body.style.backgroundColor = setRndm()
  input_range_one.value = 255
  input_range_two.value = 255
  input_range_three.value = 255
})

let red = 0;
let green = 0;
let blue = 0;
input_range_one.addEventListener('input', function () {
  red = input_range_one.value
  document.body.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')'
})
input_range_two.addEventListener('input', function () {
  green = input_range_two.value
  document.body.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')'
})
input_range_three.addEventListener('input', function () {
  blue = input_range_three.value
  document.body.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')'
})

window.addEventListener('mousemove', function(e){
  const h3 = document.getElementsByTagName('h3')[0]
  h3.innerText = e.clientX + ' ' + e.clientY
})