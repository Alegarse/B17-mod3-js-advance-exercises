import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from './vite.svg'
import * as exercises from "./exercises/exercises";


// HMTL VARIABLES
let indexBase = `
  <div class="main">
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://github.com/Alegarse" target="_blank">
      <img src="https://raw.githubusercontent.com/Alegarse/Dev_Utils/9574e643ce173b9a5c06c714c4c5ef7e532bcf92/logo_ags.svg" class="logo" alt="AGS logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>JavaScript Advanced Exercises</h1>
    <div class="exercises-grid">
      <div class="grid-tema">
        <h3>Tema 1</h3>
        <button id="ex11">Ejercicio 1</button>
        <button id="ex12">Ejercicio 2</button>
        <button id="ex13">Ejercicio 3</button>
        <button id="ex14">Ejercicio 4</button>
      </div>
    </div>
    <div class="card">
      <button id="repo-button" type="button"><a href="https://github.com/Alegarse/B17-mod3-js-advance-exercises" target="_blank" title="Open link to repository">Repositorio</a></button>
    </div>
  </div>
  <div class="ex11" hidden>
      <p id="unique-Id">Parrafo del ejercicio 1.1 de JavaScript Avanzado</p>
      <h1 class="exercise1-1">Título de prueba con misma clase</h1>
      <div class="exercise1-1">Div de prueba con misma clase</div>
      <p class="exercise1-1">Párrao de prueba con misma clase</p>
    </div>
    <div class="ex12" hidden></div>
    <div class="ex13" hidden></div>
    <div class="ex14" hidden></div>
`


// JAVASCRIPT CODE
function showInMain(element) {
    document.querySelector('#app').innerHTML = element
    createEventListeners()
}

function showMainButton(visible) {
    visible 
        ? document.querySelector('#exit').removeAttribute('hidden')
        : document.querySelector('#exit').setAttribute('hidden',true)
}

function showExercise(exercise) {
    document.querySelector(`.ex${exercise}`).removeAttribute('hidden')
    document.querySelector('.main').setAttribute('hidden',true)
    showMainButton(true)
}

function createEventListeners() {
    document.querySelector('#exit').onclick = () => {showInMain(indexBase);showMainButton(false)}
    document.querySelector('#ex11').onclick = () => {showExercise('11');exercises.main1_1()}
    document.querySelector('#ex12').onclick = () => {showExercise('12');exercises.main1_2()}
    document.querySelector('#ex13').onclick = () => {showExercise('13');exercises.main1_3()}
    document.querySelector('#ex14').onclick = () => {showExercise('14');exercises.main1_4()}
}

showInMain(indexBase)
showMainButton(false)
