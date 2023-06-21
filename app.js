const aPlay = document.querySelector('.aPlay')
const aPause = document.querySelector('.aPause')

const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const fecha = document.querySelector('.fecha')
const invitacion = document.querySelector('.invitacion')
const modalInvitacion = document.querySelector('.modalInvitacion')
const modalContador = document.querySelector('.modalContador')

const musica = new Audio('/audio/musica.mp3')
const sprite = document.querySelector('.sprite')

play.addEventListener('click', () => {
  sprite.classList.add('movimiento')
  musica.play()
  aPlay.classList.add('hidden')
  aPause.classList.toggle('hidden')
})

pause.addEventListener('click', () => {
  sprite.classList.remove('movimiento')
  musica.pause()
  aPlay.classList.toggle('hidden')
  aPause.classList.toggle('hidden')
})

invitacion.addEventListener('click', () => {
  modalInvitacion.classList.toggle('hidden')
  modalContador.classList.add('hidden')
})

fecha.addEventListener('click', () => {
  modalContador.classList.toggle('hidden')
  modalInvitacion.classList.add('hidden')
})
