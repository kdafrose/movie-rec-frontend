const BASE_URL = import.meta.env.VITE_API_TMDB_BASE_URL;
const SEARCH_BASE_URL = import.meta.env.VITE_API_TMDB_SEARCH_BASE_URL;
const TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
import {getTMDBCall} from "./utils";


export const getMovieDetails = async(movieId:string) => {
    const url = `${BASE_URL}/${movieId}?language=en-US`;
    return await getTMDBCall(url, TMDB_ACCESS_TOKEN);
}
export const topRatedMovies = async() => {
    const url = `${BASE_URL}/top_rated?language=en-US&page=1`;
    return await getTMDBCall(url, TMDB_ACCESS_TOKEN);
}

export const getUpcomingMovies = async() => {
    const url = `${BASE_URL}/upcoming?language=en-US&page=1`;
    return await getTMDBCall(url, TMDB_ACCESS_TOKEN);
}

export const nowPlayingMovies = async() => {
    const url = `${BASE_URL}/now_playing?language=en-US&page=1`;
    return await getTMDBCall(url, TMDB_ACCESS_TOKEN);
}

export const popularMovies = async() => {
    const url = `${BASE_URL}/popular?language=en-US&page=1`;
    return await getTMDBCall(url, TMDB_ACCESS_TOKEN);
}

export const searchMovie = async(query:string) => {
    //const url = `${SEARCH_BASE_URL}/movie?query=${encodeURIComponent(query)}&include_adult=true&language=en-US&page=1`;
    const url = `${SEARCH_BASE_URL}/movie?query=${query}&include_adult=true&language=en-US&page=1`;
    const data =await getTMDBCall(url, TMDB_ACCESS_TOKEN);
    return data.results;
}
