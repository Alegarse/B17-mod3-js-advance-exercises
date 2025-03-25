/**
 * 
 * @param {*} imageUrl 
 * @returns Element img movie
 */
function createMoviePoster(imageUrl) {
    const movieImgElement = document.createElement('img');
    const InitPosterPath = 'https://media.themoviedb.org/t/p/w220_and_h330_face/'
    movieImgElement.setAttribute('src', InitPosterPath + imageUrl);
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
export function createMovieOverview(overview) {
    const movieOverviewElement = document.createElement('p')
    movieOverviewElement.textContent = overview
    movieOverviewElement.classList = 'movie-overview'
    return movieOverviewElement
}

export function createMovieCredits(credits) {
    const movieCreditElement = document.createElement('p')
    credits.forEach(credit => {
        movieCreditElement.textContent === ''
        ? movieCreditElement.textContent = credit.original_name
        : movieCreditElement.textContent += ', '+ credit.original_name
    })
    movieCreditElement.classList = 'movie-credit'
    return movieCreditElement
}

/**
 * 
 * @param {*} movie
 * @returns Element card for movie
 */
export function createMovieCard(movie) {
    const movieCardElement = document.createElement('div')
    movieCardElement.classList = 'movie-card'

    movieCardElement.appendChild(createMoviePoster(movie.poster_path))
    movieCardElement.appendChild(createMovieTitle(movie.title))

    return movieCardElement
}