import React from "react";
import {StarRating} from "./starRating";

export default function ReviewCard({ review }: { review: string }) {

    return (
        <>
            <figure className="max-w-screen-md">
                <div className="flex items-center space-x-1 mb-4">
                    <StarRating voteAverage={9.5} />
                </div>
                <blockquote>
                    <p className="text-2xl font-semibold text-heading tracking-tight">"Wow this movie is so old but is so nice because Al Pacino and Marlon Brando are in it!!"</p>
                </blockquote>
                <figcaption className="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
                    <div className="flex items-center divide-x rtl:divide-x-reverse divide-default">
                        <cite className="pe-3 font-medium text-heading">Kathreen Peaches</cite>
                        <cite className="ps-3 text-sm text-body">@usernamehere</cite>
                    </div>
                </figcaption>
            </figure>
        </>
    );
}