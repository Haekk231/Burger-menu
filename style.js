const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('.nav')
const navstyle = document.querySelector('.stylelist')

menu.addEventListener('click', ()=>{
  nav.classList.toggle('nav')
  close.classList.toggle('close')
  menu.style.display='none'
  navstyle.style.opacity='1'
})

close.addEventListener('click', ()=>{
  nav.classList.toggle('nav')
  close.classList.toggle('close')
  menu.style.display='block'
  navstyle.style.opacity='0'
})
