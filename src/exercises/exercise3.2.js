/**
 * Ejercicio 2. Usa setInterval and clearInterval para cambiar el color de fondo de un cuadrado
    cada segundo. Elimina el evento/intervalo despues de que cambie de color 20 veces.
 */

function changeBoxColor() {
    let counter = 1
    let intervalId = setInterval(() => {
        const boxElement = document.querySelector('.box')
        let class_ = 'box bg-red'
        if (counter <= 19) {
            switch (boxElement.classList.value) {
                case 'box bg-red':
                    class_ = 'box bg-green'
                    break;
                default:
                    class_ = 'box bg-red'
            }
        } else {
            clearInterval(intervalId)
        }
        boxElement.classList = class_
        counter++    
    }, 1000)
}

export function main3_2() {
    // Buscamos el punto de anclaje al DOM
    const selectContainerElement = document.querySelector('.ex32')

    const boxElement = document.createElement('div')
    boxElement.classList = 'box bg-red'
    selectContainerElement.appendChild(boxElement)

    changeBoxColor()
}