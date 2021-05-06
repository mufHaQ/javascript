// const card = document.querySelector('.card')
// const clsBtn = document.querySelector('.close')

// clsBtn.addEventListener('click', function() {
//   card.remove()
// })



// DOM Traversal
const closeBtn = document.querySelectorAll('.close')

// for (let i = 0; i < closeBtn.length; i++) {
//   closeBtn[i].addEventListener('click', function (e) {
//     // closeBtn[i].parentElement.remove()
//     e.target.parentElement.remove()
//   })
// }


closeBtn.forEach(e => {
  e.addEventListener('click', function(el){
    el.target.parentElement.remove()
  })
});