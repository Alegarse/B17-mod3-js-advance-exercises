import axios from 'axios';
import { apiConfig } from './apiConfig';

export async function getMovieListData() {
    let movieListUrl =apiConfig.baseUrl
    movieListUrl += 
    return await axios(movieListUrl)
}