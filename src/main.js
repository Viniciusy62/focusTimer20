import "../toggleMode.js"
// Funcionalidades esperadas dos botões:

// Play   : aciona o timer;
// Stop   : para o timer;
// +    : aumenta em mais 5 minutos o tempo do timer;
// -    : diminui em 5 minutos o tempo do timer.

// Obs: fique à vontade para adicionar animações ou alterar as cores dos cards.

/*
DEFINIR:
index
state
elements
events
actions
timer
sounds
toggleMode
*/ 

//STATE

// const state = {
//   isRunning: false,
//   isMuted: true,
//   isDark: false,
// }

const controllerIsRunning = document.querySelector(".controller")

const btnPlay = document.querySelector("#btn-play")

const btnPause = document.querySelector("#btn-pause")

const btnStop = document.querySelector("#btn-stop")


btnPlay.addEventListener("click", () => {
  controllerIsRunning.classList.add("running")
})

btnStop.addEventListener("click", () => {
  controllerIsRunning.classList.remove("running")
})