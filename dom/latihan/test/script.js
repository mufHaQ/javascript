const card = document.querySelector('.card')
const btn_close = document.querySelector('.btn-close')

card.addEventListener('click', function(){
  alert('ok')
})

btn_close.addEventListener('click', function(btn){
  console.log('ok')
  btn.stopPropagation()
})