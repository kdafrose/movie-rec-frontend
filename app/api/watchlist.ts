import { apiCall, getApiCall } from "./utils";

export const addMovieToWatchlist = async(token:boolean, movieId:number) => {
    const body = {movieId:movieId.toString()};
    return await apiCall('/addToWatchlist', 'POST', body, token);
}

export const removeMovieFromWatchlist = async (token:boolean, movieId:number) => {
    const body = {movieId:movieId.toString()};
    return apiCall('/removeWatchlist', 'DELETE', body, token);
}

export const getMoviesInWatchlist = async(token:boolean) => {
    return getApiCall('/getMoviesWatchlist', undefined, token)
}
