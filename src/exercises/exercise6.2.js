import axios from 'axios';
import { createMovieCard, createMovieOverview,createMovieCredits } from '../components/movieCard';
import { api_key } from '../api-rest/apiConfig';

export async function main6_2 () {

    try {
        const selectContainerElement = document.querySelector('.ex62')

        const movieID = '822119'
        const getPostUrl = `https://api.themoviedb.org/3/movie/${movieID}?api_key=`
        const getCreditUrl = `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=`

        const { data: movieInfo } = await axios.get(getPostUrl+api_key)
        const { data: {cast: credits} } = await axios.get(getCreditUrl+api_key)

        selectContainerElement.appendChild(createMovieCard(movieInfo))

        const overviewAndCreditsContainer = document.createElement('div')

        overviewAndCreditsContainer.classList = 'overview-credits-movie'
        overviewAndCreditsContainer.appendChild(createMovieOverview(movieInfo.overview))
        overviewAndCreditsContainer.appendChild(createMovieCredits(credits))
        
        selectContainerElement.appendChild(overviewAndCreditsContainer)

    } catch (error) {
        console.error(error.message)
    }
}