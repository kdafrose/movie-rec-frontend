import { apiCall, getApiCall } from "./utils";

export const createMovielist = async(token:boolean, title:string, description:string) => {
    const body = {title, description};
    return await apiCall('/newList', 'POST', body, token);
}

export const addInMovielist = async (token:boolean, movieId:number, movielistId:number) => {
    const body = {movieId:movieId.toString(), movielistId:movielistId.toString()};
    return await apiCall('/addToMovieList', 'POST', body, token)
}

export const deleteMovieInList = async(token:boolean, movieId:number, movielistId:number) => {
    const body = {movieId:movieId.toString(), movielistId:movielistId.toString()};
    return await apiCall('/removeFromMovielist', 'DELETE', body, token)
}

export const deleteMovielist = async(token:boolean, movielistId:number) => {
    const body = {movielistId:movielistId.toString()};
    return await apiCall('/removeMovielist', 'DELETE', body, token)
}

export const editMovielist = async(token:boolean, movielistId:number, title:string, description:string) => {
    let body:Record<string, string> = {movielistId:movielistId.toString()};
    if(title !== '') body = {...body, title};
    if(description !== '') body = {...body, description};

    return await apiCall('/editMovielist', 'PATCH', body, token)
}

export const getMovielists = async(token:boolean) => {
    return await getApiCall('/getMovielists', undefined, token)
}

export const getMoviesInMovielist = async(token:boolean, movielistId:number) => {
    const queryParams = {movielistId:movielistId.toString()};
    return await getApiCall('/getListItems', queryParams, token)
}
