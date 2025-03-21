/**
 * Práctica propuesta. Crea un elemento de formulario input de tipo ‘text’ para que el usuario
    introduzca un número de teléfono. Crea un botón y cuando se haga clic en él válida de forma
    sencilla el formato del número introducido.
    Se deberá mostrar un mensaje que indique si el número es válido o no, pero solo mostrando
    las 3 última cifras, sustituyendo las anteriores por asteriscos como: *** *** 946 
 */

import { padStart } from "lodash-es"

/**
 * 
 * @returns Label element
 */
function createLabel() {
    const labelElement = document.createElement('label')

    labelElement.textContent = 'Inserte un número de teléfono en formato XXXXXXXXX'

    return labelElement
}

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
function createDivforTelephone() {
    const containerElement = document.createElement('div')

    containerElement.setAttribute('hidden', true)
    containerElement.classList = 'cont-tel'

    return containerElement
}

/**
 * 
 * @returns Button Element
 */
function createValidateButton() {
    const buttonElement = document.createElement('button')

    buttonElement.textContent = 'Validar número introducido'
    buttonElement.classList = 'validate'

    return buttonElement
}

function validateNumber(number) {

    const numbers = '0123456789'
    console.log(number)

    number = number.replaceAll(' ', '').replaceAll('-','').replaceAll('+','')
    if (number.length != 9) return false

    let arrayNumbers = number.split('')
    if (arrayNumbers[0] === '0') return false
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (!numbers.includes(arrayNumbers[i])) {
            return false;
        }
    }

    let length = number.length
    let aux = number.slice(-3)
    let arrayPad = aux.padStart(length, '*').split('')
    let result = ''
    let counter = 0
    arrayPad.forEach(char => {
        if (counter === 3)
        {
            result += ' '
            counter = 0
        }
        result += char
        counter++
    })

    return result
}

export function main4_2() {

    // Buscamos el punto de anclaje al DOM
    const selectContainerElement = document.querySelector('.ex42')

    const labelElement = createLabel()
    selectContainerElement.appendChild(labelElement)

    const inputElement = createInput()
    selectContainerElement.appendChild(inputElement)

    const buttonElement = createValidateButton()
    selectContainerElement.appendChild(buttonElement)

    const containerElement = createDivforTelephone()
    selectContainerElement.appendChild(containerElement)

    buttonElement.addEventListener('click', (event) => {
        let numbertoValidate = document.querySelector('.input-text').value
        let validate =  validateNumber(numbertoValidate)
        let containerElement = document.querySelector('.cont-tel')
        containerElement.removeAttribute('hidden')
        if (!validate) {
            containerElement.classList = 'cont-tel error'
            containerElement.textContent = 'Is not a valid number'
        } else {
            containerElement.classList = 'cont-tel valid'
            containerElement.textContent = validate
        }
    })
}