/**
 * Ejercicio 1. Acceso al DOM.
    Crea un archivo HTML con un párrafo con un id único.
    Utiliza document.getElementById() para acceder al párrafo y muestra su contenido en la consola.
    En el archivo HTML anterior crea varios elementos con la misma clase.
    Ahora utiliza document.querySelectorAll() para acceder a todos los elementos con dicha clase y muestra
    su contenido en la consola.
 */

export function main1_1() {
    document.querySelector('.ex11').removeAttribute('hidden')
    console.log(document.getElementById('unique-Id'))
    console.log(document.querySelectorAll('.exercise1-1'))
}