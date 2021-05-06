const container = document.querySelector('.container')
const sec = document.querySelectorAll('section')
const secA = document.querySelector('.section-a')
const secB = document.querySelector('.section-b')
const li5A = secA.querySelector('li:nth-child(5)')

sec.forEach(function(e, i) {
  // sec[i].setAttribute('name', 'section')
  // sec[i].removeAttribute('name')
  sec[i].classList.add('section-wrap')
  sec[i].classList.remove('section')
});
li5A.innerHTML = '<em>List 5</em>'