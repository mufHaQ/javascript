// Manipulasi Node

const secB = document.querySelector('.section-b')
const ulB = secB.querySelector('ul')
const liB3 = ulB.querySelector('li:nth-child(3)')

// List 6
const newLiB1 = document.createElement('li')
const newLiBText1 = document.createTextNode('List 6')
newLiB1.appendChild(newLiBText1)
ulB.appendChild(newLiB1)

// List 5
const newLiB2 = document.createElement('li')
const newLiBText2 = document.createTextNode('List 5')
const liB6 = ulB.querySelector('li:nth-child(6)')
newLiB2.appendChild(newLiBText2)
ulB.insertBefore(newLiB2, liB6)

// li 3
ulB.removeChild(liB3)

const newLiB7 = document.createElement('li')
const newLiB7Text = document.createTextNode('List 7')
newLiB7.appendChild(newLiB7Text)
ulB.replaceChild(newLiB7, newLiB1)
