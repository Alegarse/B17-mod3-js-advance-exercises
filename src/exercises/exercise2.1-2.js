/**
 * Ejercicio 1. Crea un elemento de formulario select con Javascript y añadelo al DOM. Dicho elemento
    select debe mostrar las categorías de las películas de la constante ‘movies-categories’.
    Añade un listener para escuchar un evento que nos permita saber cuando el usuario a seleccionado una
    de las categorías y muestra en otro elemento del DOM el nombre de la categoría (primera letra en
    mayúscula, el resto en minúscula).
    A continuación muestra en el DOM con una lista desordenada el título de las películas en esa categoría
    (utiliza el mismo array de películas de la práctica 1).
 */

/**
* Ejercicio 2. Continuando con el ejercicio anterior, añade a la lista de títulos de películas un nuevo
    elemento (por Javascript) que alterne el texto “Ocultar descripción” y “Mostrar descripción” y que
    escuche el evento clic. Al hacer clic sobre dicho elemento se debe mostrar/ocultar la descripción de la
    película.
*/

import { capitalizeString } from "../utils/utils"

/**
 * 
 * @param {*} categories 
 * @returns Select with category options
 */
function createSelectElement(categories) {

    const selectElement = document.createElement('select')
    selectElement.setAttribute('class', 'categories-select')

    const arrayCategories = Object.entries(categories)

    arrayCategories.forEach(category => {
        const optionElement = document.createElement('option')
        optionElement.setAttribute('value', category[0])
        optionElement.textContent = category[1]
        selectElement.appendChild(optionElement)
    })

    return selectElement
}

/**
 * 
 * @returns Container that show selected category
 */
function createContainerForSelectedCategory() {

    const containerElement = document.createElement('div')
    containerElement.setAttribute('class', 'container-ex21')

    const selectedLabelElement = document.createElement('p')
    selectedLabelElement.textContent = 'Selected category: '
    containerElement.appendChild(selectedLabelElement)

    const selectedDivElement = document.createElement('p')
    selectedDivElement.setAttribute('class', 'selected-category')
    containerElement.appendChild(selectedDivElement)

    return containerElement
}


/**
 * 
 * @param {*} movies 
 * @param {*} category 
 * @returns Unordered list with movies filtered by category
 */
function createUnorderedList(movies, category) {

    const ulElement = document.createElement('ul')
    ulElement.setAttribute('class', 'movies-list')

    let index = 0
    movies.forEach(movie => {
        if (movie.category.toLowerCase() === category) {
            index++

            const liContainerElement = document.createElement('div')
            liContainerElement.setAttribute('class', 'container-li')

            const liElement = document.createElement('li')
            liElement.setAttribute('class', 'title-movie-li')
            liElement.setAttribute('id', `index${index}`)
            liElement.textContent = movie.title

            let idSelector = '#button'+index
            const descElement = createDescriptionForMovie(movie.description)
            liElement.addEventListener('click', () => {
                if (descElement.hasAttribute('hidden')) {
                    descElement.removeAttribute('hidden')
                    document.querySelector(idSelector).textContent = 'Ocultar descripción'
                } else {
                    descElement.setAttribute('hidden', true)
                    document.querySelector(idSelector).textContent = 'Mostrar descripción'
                }
            })

            liContainerElement.appendChild(liElement)

            const buttonMovieElement = createButtonElement('Mostrar descripción', 'button'+index)
            buttonMovieElement.addEventListener('click', () => {
                if (descElement.hasAttribute('hidden')) {
                    descElement.removeAttribute('hidden')
                    document.querySelector(idSelector).textContent = 'Ocultar descripción'
                } else {
                    descElement.setAttribute('hidden', true)
                    document.querySelector(idSelector).textContent = 'Mostrar descripción'
                }
            })
            liContainerElement.appendChild(buttonMovieElement)

            
            liContainerElement.appendChild(descElement)

            ulElement.appendChild(liContainerElement)
        }
    })

    return ulElement
}

/**
 * 
 * @returns Button with selected text
 */
function createButtonElement(buttonText, index) {
    const buttonElement = document.createElement('p')

    buttonElement.setAttribute('id', index)
    buttonElement.setAttribute('class', 'show-hide-description')
    buttonElement.textContent = buttonText

    return buttonElement
}

/**
 * 
 * @param {*} description 
 * @returns Element p with description
 */
function createDescriptionForMovie(description ) {
    const descriptionElement = document.createElement('p')

    descriptionElement.setAttribute('class', 'movie-desc')
    descriptionElement.setAttribute('hidden', true)
    descriptionElement.textContent = description

    return descriptionElement
}


export function main2_12(movies, categories) {

    // Buscamos el punto de anclaje al DOM
    const selectContainerElement = document.querySelector('.ex21-2')

    // Creamos y añadimos el Select
    selectContainerElement.appendChild(createSelectElement(categories))

    // Creamos el contenedor para mostrar que categoría seleccionamos y lo añadimos
    selectContainerElement.appendChild(createContainerForSelectedCategory())

    // Listener para escuchar el evento change del select
    selectContainerElement.addEventListener('change', (event) => {
        document.querySelector('.selected-category').textContent = capitalizeString(event.target.value)

        // Veriicamos si había ya un nodo con información anterior y lo quitamos
        let nodeElement = document.querySelector('.movies-list')
        if (nodeElement !== null && nodeElement.isConnected) selectContainerElement.removeChild(nodeElement)

        const ulListElement = createUnorderedList(movies, event.target.value)

        // Lista desordenada para mostrar peliculas filtradas por la categoría seleccionada
        selectContainerElement.appendChild(ulListElement)
    })

}