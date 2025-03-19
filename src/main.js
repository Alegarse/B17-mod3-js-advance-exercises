import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from './vite.svg'
import {categories, movies} from './data'
import * as exercises from "./exercises/exercises";


// HMTL VARIABLES
let indexBase = `
  <div class="main">
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://github.com/Alegarse" target="_blank">
      <img src="https://www.arenalsoft.es/logo_ags.svg" class="logo" alt="AGS logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>JavaScript Advanced Exercises</h1>
    <p>Debes habilitar la consola de insepcción para visualizar los resultados de algunos ejercicios cuando hagas click en cada botón correspondiente</p>
    <div class="exercises-grid">
      <div class="grid-tema">
        <h3>Tema 1</h3>
        <button id="ex11">Ejercicio 1</button>
        <button id="ex12">Ejercicio 2</button>
        <button id="ex13">Ejercicio 3</button>
        <button id="ex14">Ejercicio 4</button>
      </div>
      <div class="grid-tema">
        <h3>Tema 2</h3>
        <button id="ex21-2">Ejercicio 1-2</button>
        <button id="ex23">Ejercicio 3</button>
        <button id="ex2a">Ejercicio A</button>
      </div>
      <div class="grid-tema">
        <h3>Tema 3</h3>
        <button id="ex31">Ejercicio 1</button>
        <button id="ex32">Ejercicio 2</button>
        <button id="ex33">Ejercicio 3</button>
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
    <div class="ex21-2" hidden></div>
    <div class="ex23" hidden></div>
    <div class="ex2a" hidden></div>
    <div class="ex31" hidden></div>
    <div class="ex32" hidden></div>
    <div class="ex33" hidden></div>
`


// JAVASCRIPT CODE
function showInMain(element) {
  document.querySelector('#app').innerHTML = element
  createEventListeners()
}

function showMainButton() {
  document.querySelector('#exit').toggleAttribute('hidden')
}

function showExercise(exercise) {
  console.clear()
  document.querySelector(`.ex${exercise}`).toggleAttribute('hidden')
  document.querySelector('.main').toggleAttribute('hidden')
  showMainButton(true)
}

function createEventListeners() {
  //document.querySelector('#exit').addEventListener("click", showInMain(indexBase)) No funciona!
  document.querySelector('#exit').onclick = () => { showInMain(indexBase); showMainButton()}
  // Exercises Topic 1
  document.querySelector('#ex11').onclick = () => { showExercise('11'); exercises.main1_1()}
  document.querySelector('#ex12').onclick = () => { showExercise('12'); exercises.main1_2()}
  document.querySelector('#ex13').onclick = () => { showExercise('13'); exercises.main1_3()}
  document.querySelector('#ex14').onclick = () => { showExercise('14'); exercises.main1_4()}
  // Exercises Topic 2
  document.querySelector('#ex21-2').onclick = () => { showExercise('21-2'); exercises.main2_12(movies,categories)}
  document.querySelector('#ex23').onclick = () => { showExercise('23'); exercises.main2_3()}
  document.querySelector('#ex2a').onclick = () => { showExercise('2a'); exercises.main2_a()}
  // Exercises Topic 3
}

showInMain(indexBase)
showMainButton()
