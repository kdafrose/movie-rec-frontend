import {apiCall, getApiCall} from './utils'

export const createReview = async(token:string, movieId:number, rating:number, reviewText:string) => {
    const body = {movieId:movieId.toString(), numStars:rating.toString(), review:reviewText};
    return await apiCall('/createReview', 'POST', body, token);
}

export const editReview = async(token:string, movieId:number, rating:number, reviewText:string) => {
    const body = {movieId:movieId.toString(), numStars:rating.toString(), review:reviewText};
    return await apiCall('/editReview', 'PATCH', body, token);
}

export const deleteReview = async(token:string, movieId:number) => {
    const body = {movieId:movieId.toString()};
    return await apiCall('/deleteReview', 'DELETE', body, token);
}

export const getUserReviewsForMovie = async(token:string, movieId:number) => {
    const queryParams = {movieId:movieId.toString()};
    return await getApiCall('/getReviewsForMovie', queryParams, token);
}

export const getAllReviewsForMovie = async(movieId:number) => {
    const queryParams = {movieId:movieId.toString()};
    return await getApiCall('/getAllReviews', queryParams);
}   
