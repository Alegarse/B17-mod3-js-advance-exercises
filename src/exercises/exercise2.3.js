/**
 * Ejercicio 3. Crea un elemento de formulario input de tipo texto y escucha todos los elementos de
    pulsación de tecla con el evento keydown. Cuando se escriba texto en dicho elemento se deberá
    actualizar el contenido de otro elemento tipo div (inicialmente sin contenido) con el contenido del input. 
 */

/**
 * 
 * @returns Input element
 */
function createInput() {
    const inputElement = document.createElement('input')

    inputElement.setAttribute('type', 'text')
    inputElement.setAttribute('class', 'input-text')

    return inputElement
}

/**
 * 
 * @returns Div for print keydowns
 */
function createDivforKeydowns() {
    const containerElement = document.createElement('div')

    containerElement.setAttribute('class', 'container-keydowns')

    return containerElement
}

export function main2_3() {
    // Buscamos el punto de anclaje al DOM
    const selectContainerElement = document.querySelector('.ex23')

    const inputElement = createInput()
    selectContainerElement.appendChild(inputElement)

    const containerElement = createDivforKeydowns()
    selectContainerElement.appendChild(containerElement)

    inputElement.addEventListener('keydown', (event) => {
        if (event.which >= 65 && event.which <= 90)
        containerElement.textContent += `${event.key}`
    })
}