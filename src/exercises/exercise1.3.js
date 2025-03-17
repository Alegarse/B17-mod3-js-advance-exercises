/**
 * Ejercicio 3. Crea una web en HTML que muestre 4 cuadrados rellenos de color hex. #3b78d7. Usando
    CSS centrar los cuadrados horizontal y verticalmente con una separación de 10px.
    Una vez esté listo el código CSS elimina los elementos HTML y crea una función que le pasemos el
    número de cuadrados y añada todos los elementos HTML necesarios para mostrar el mismo resultado
    que antes. Ahora crea las clases necesarias en CSS para que los cuadrados alternen 3 colores
    sucesivamente y actualiza tu función para que aplique las clases.
    Nota: para definir las clases CSS que va a tener un elemento en Javascript usa la propiedad “className”
    de dicho elemento asignándole una cadena de texto con el nombre de las clases.
 */

const colors = {
    blue: 'blue',
    green: 'green',
    yellow: 'yellow'
}

function createSquare(quantity, containerElement) {
    let color = 0
    for(let i = 1; i <= quantity; i++) {
        let square = document.createElement('div')
        square.setAttribute("class", "square")
        if (color === 0) {
            square.classList = `square ${colors.blue}`
            color++
        } else if (color === 1) {
            square.classList = `square ${colors.green}`
            color++
        } else {
            square.classList = `square ${colors.yellow}`
            color = 0
        }
        containerElement.appendChild(square)
    }
    
}

export function main1_3() {
    let containerElement = document.querySelector('.ex13')
    createSquare(4, containerElement)
}