import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from './vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://github.com/Alegarse" target="_blank">
      <img src="https://raw.githubusercontent.com/Alegarse/Dev_Utils/9574e643ce173b9a5c06c714c4c5ef7e532bcf92/logo_ags.svg" class="logo" alt="AGS logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>JavaScript Advance Exercises</h1>
    <div class="exercises-grid">
    </div>
    <div class="card">
      <button id="repo-button" type="button"><a href="https://github.com/Alegarse/B17-mod3-js-advance-exercises" target="_blank" title="Open link to repository">Repositorio</a></button>
    </div>
  </div>
`