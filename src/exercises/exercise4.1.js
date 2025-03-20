/**
 * Termina de crear la clase Movie del ejemplo anterior:
    ● Añadiendo alguna propiedad de clase.
    ● Todos las propiedades que hemos visto en los objetos películas.
    ● Métodos de instancia para:
        ○ calcular si una película tiene una calificación alta.
        ○ determinar si una película es un clásico (anterior a 1980).
        ○ devolver una cadena con los datos más relevantes (título, año y categoría).
 */

let movieData = {
    title: "Fight Club",
    director: "David Fincher",
    actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
    year: 1999,
    description:
        "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    category: "Drama",
    rating: 8.8
}

class Movie {
    static ratingThresold = 8
    // Added properties
    actors
    year
    description
    category

    constructor(params) {
        this.title = params.title
        this.rating = params.rating
        this.director = params.director
        this.actors = params.actors
        this.year = params.year
        this.description = params.description
        this.category = params.category
    }

    /**
     * 
     * @returns If is high rating movie
     */
    isHighRatedMovie() {
        return this.rating > Movie.ratingThresold
    }

    /**
     * 
     * @returns If is a classic movie
     */
    isClasicMovie() {
        return this.year < 1980
    }

    getRelevantData() {
        return `Title: ${this.title}, Year: ${this.year}, Category: ${this.category}`
    }
}

export function main4_1() {
    // Buscamos el punto de anclaje al DOM
    const selectContainerElement = document.querySelector('.ex41')

    let movie = new Movie(movieData)

    const pElement = document.createElement('p')
    pElement.classList = 'large-desc'
    pElement.textContent = movie.getRelevantData()


    selectContainerElement.appendChild(pElement)

}