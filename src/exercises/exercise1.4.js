/**
 * Ejercicio 4. Crea un elemento “card” o tarjeta para mostrar una película utilizando tanto código HTML como código CSS para
    darle la apariencia que prefieras. Utiliza un objeto película con los datos de una película y la URL a la imagen de su portada.
    Una vez terminado, genera un duplicado dinámicamente usando código Javascript en el que utilices las propiedades y
    métodos vistos para el acceso y manipulación del DOM
 */
import { movie } from "./movies";

// 1. Funcion para crear la imagen del poster de la peli
// 2. Funcion para crear el titulo de la peli
// 3. Funcion para crear la descripcion de la peli
// 4. Añadir las clases a cada elemento para usar el css
// 5. Crear la referencia al elemento y añadirle sus partes [1,2 y 3]

/**
 * 
 * @param {*} imageUrl 
 * @returns Element img movie
 */
function createMovieImg(imageUrl) {
    const movieImgElement = document.createElement('img');
    movieImgElement.setAttribute('src', imageUrl);
    movieImgElement.classList = 'movie-img'
    return movieImgElement
}

/**
 * 
 * @param {*} title 
 * @returns Element h3 with title
 */
function createMovieTitle(title) {
    const movieTitleElement = document.createElement('h3')
    movieTitleElement.textContent = title
    movieTitleElement.classList = 'movie-title'
    return movieTitleElement
}

/**
 * 
 * @param {*} description 
 * @returns Element p with description 
 */
function createMovieDescription(description) {
    const movieDescriptionElement = document.createElement('p')
    movieDescriptionElement.textContent = description
    movieDescriptionElement.classList = 'movie-description'
    return movieDescriptionElement
}

function createMovieCard(movie) {
    const movieCardElement = document.createElement('div')
    movieCardElement.classList = 'movie-card'

    movieCardElement.appendChild(createMovieImg(movie.poster))
    movieCardElement.appendChild(createMovieTitle(movie.title))
    movieCardElement.appendChild(createMovieDescription(movie.description))

    return movieCardElement
}

export function main1_4() {
    document.querySelector('.ex14').removeAttribute('hidden')

    const movieContainerElement = document.querySelector('.ex14')

    for (let i = 1; i <= 8; i++) movieContainerElement.appendChild(createMovieCard(movie))

}