import axios from 'axios';
import { createActorCard } from '../components/actorCard';
import { api_key } from '../utils/consts';

export async function main6_3 () {

    try {
        const selectContainerElement = document.querySelector('.ex63')

        const movieID = '822119'
        const getCreditUrl = `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=`

        const { data: {cast: actors} } = await axios.get(getCreditUrl+api_key)

        actors.forEach(actor => {
            /*if (actor.profile_path !== null )*/ selectContainerElement.appendChild(createActorCard(actor))
        })
        
    } catch (error) {
        console.error(error.message)
    }
}