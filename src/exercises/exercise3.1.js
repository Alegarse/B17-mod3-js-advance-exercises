/**
 * Ejercicio 1. Usa setTimeout para mostrar un mensaje en pantalla con un retraso de 2 segundos.
 */

export function main3_1() {
    // Buscamos el punto de anclaje al DOM
    const selectContainerElement = document.querySelector('.ex31')

    setTimeout(() => {
        const pElement = document.createElement('p')
        pElement.classList = 'show-hide-description'
        pElement.textContent = 'Mensaje de pantalla con 2 segundos de retraso'
        selectContainerElement.appendChild(pElement)
    }, 2000)
}