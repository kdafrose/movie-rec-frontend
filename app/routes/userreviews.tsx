import React from "react";
import MovieReviewsCard from "~/components/movieReviewsCard";
import { MOVIES_SAMPLE } from "~/data/movies_sample";

export default function UserReviews(){
        const reviewListSample = [
        {
            review:'Omg so nice and good',
            numStar:4.23,
            username:'usernamehere',
            name:'Kathreen Peaches',
            userId: 1,
            movieId:238
        },
        {
            review:'Omg so nice and good',
            numStar:4.23,
            username:'usernamehere',
            name:'Kathreen Peaches',
            userId: 2,
            movieId:278
        },
        {
            review:'Omg so nice and good',
            numStar:4.23,
            username:'usernamehere',
            name:'Kathreen Peaches',
            userId: 3,
            movieId:772071
        },
        {
            review:'Omg so nice and good',
            numStar:4.23,
            username:'usernamehere',
            name:'Kathreen Peaches',
            userId: 4,
            movieId:240
        },
        {
            review:'Omg so nice and good',
            numStar:4.23,
            username:'usernamehere',
            name:'Kathreen Peaches',
            userId: 4,
            movieId:240
        },{
            review:'Omg so nice and good blah blah add more words so i can see how much space it takes up',
            numStar:4.23,
            username:'usernamehere',
            name:'Kathreen Peaches',
            userId: 4,
            movieId:240
        },
        {
            review:'Omg so nice and good',
            numStar:4.23,
            username:'usernamehere',
            name:'Kathreen Peaches',
            userId: 4,
            movieId:240
        }
    ]

    return(
        <>
        <MovieReviewsCard movies={MOVIES_SAMPLE} reviews={reviewListSample}/>
        </>
    )
}