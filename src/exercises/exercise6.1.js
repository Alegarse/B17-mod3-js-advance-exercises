import axios from 'axios';
import { createMovieCard } from '../components/movieCard';
import { api_key } from '../api-rest/apiConfig';

export async function main6_1 () {

    try {
        const selectContainerElement = document.querySelector('.ex61')

        const getPostUrl = 'https://api.themoviedb.org/3/movie/popular?api_key='

        const { data: {results: dataInfo} } = await axios.get(getPostUrl+api_key)
        dataInfo.forEach(movie => {
            console.log(movie)
            selectContainerElement.appendChild(createMovieCard(movie))
        })

    } catch (error) {
        console.error(error.message)
    }
}