/**
 * Ejercicio 2. Cambiar el contenido de un elemento del DOM.
    Crea un archivo HTML con un div vacío.
    Escribe una función que utilice document.querySelectorAll() para acceder al elemento del div y añada el
    siguiente contenido: un párrafo con un ‘lorem ipsum…’ y debajo un botón con el texto ‘Continuar’
 */

const data = {
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quisquam neque eveniet ratione aspernatur quos alias, iste suscipit explicabo repudiandae odio. Ea autem laudantium earum accusantium sint. Id, consequatur perspiciatis!",
    button: "Continuar"
}

function addParagraph(text) {
    let pElement = document.createElement('p')
    pElement.textContent = text
    return pElement

}

function addButton(text) {
    let buttonElement = document.createElement('button')
    buttonElement.textContent = text
    return buttonElement
}

export function main1_2() {
    document.querySelector('.ex12').removeAttribute('hidden')

    let containerElement = document.querySelector('.ex12')

    containerElement.appendChild(addParagraph(data.paragraph))
    containerElement.appendChild(addButton(data.button))
}