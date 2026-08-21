import React from "react";
import {StarRating} from "./starRating";
import {useState, useEffect} from "react";
import { getUserReviewsForMovie } from "~/api/reviews";

interface ReviewCard {
    review:string,
    username:string,
    rating:number,
    name:string
}

const sampleReview ={
    review:"Wow this movie is so old but is so nice because Al Pacino and Marlon Brando are in it!!",
    username: 'usernamehere',
    rating:8.2,
    name:'Kathreen Peaches'
}

export default function ReviewCard({movieId}: {movieId: number}) {
    const [review,setReview] = useState<ReviewCard>();
    useEffect(() =>{
        const getUserReview = async() =>{
            //await getUserReviewsForMovie(true, movieId).then(setReview)
        }

        getUserReview();
    },[])

    return (
        <>
            {review ? (
                <figure className="max-w-screen-md">
                <div className="flex items-center space-x-1 mb-4">
                    <StarRating voteAverage={review.rating} />
                </div>
                <blockquote>
                    <p className="text-lg font-semibold text-heading tracking-tight">{review.review}</p>
                </blockquote>
                <figcaption className="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
                    <div className="flex items-center divide-x rtl:divide-x-reverse divide-default">
                        <cite className="pe-3 font-medium text-heading">{review.name}</cite>
                        <cite className="ps-3 text-sm text-body">@{review.username}</cite>
                    </div>
                </figcaption>
            </figure>
            ) : (
                <figure className="max-w-screen-md">
                    <div className="flex items-center space-x-1 mb-4">
                        
                    </div>
                    <textarea
                        placeholder="Write your review..."
                        rows={4}
                        className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button className="px-4 py-2 mt-4 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-800 focus:ring-4 transition">Save</button>

                      <figcaption className="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
                        <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
                        <div className="flex items-center divide-x rtl:divide-x-reverse divide-default">
                            <cite className="pe-3 font-medium text-heading">Kathreen peaches</cite>
                            <cite className="ps-3 text-sm text-body">@usernamehere</cite>
                        </div>
                    </figcaption>
                </figure>
            )}
        </>
    );
}