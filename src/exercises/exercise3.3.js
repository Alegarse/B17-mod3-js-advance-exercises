/**
 * Ejercicio 3. Utiliza setInterval para crear un efecto debounce de 500 ms al leer el texto de un
    input.
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

export function main3_3() {
    // Buscamos el punto de anclaje al DOM
    const selectContainerElement = document.querySelector('.ex33')

    const inputElement = createInput()
    selectContainerElement.appendChild(inputElement)

    const containerElement = createDivforKeydowns()
    selectContainerElement.appendChild(containerElement)

    inputElement.addEventListener('keydown', (event) => {
        let intervalId
        let showed = false
        if (event.which >= 65 && event.which <= 90)
            intervalId = setInterval(() => {
                containerElement.textContent += `${event.key}`
                showed = true
                if (showed) clearInterval(intervalId)
        }, 500)
        
            
    })

}