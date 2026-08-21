import React from "react";
import type { Movielist, Reviews } from "~/types";
import { Link } from "react-router";
import { StarRating } from "./starRating";

interface MovieReviewsCardProps {
    movies: Movielist[];
    reviews: Reviews[];
}

export default function MovieReviewsCard({ movies, reviews }: MovieReviewsCardProps) {
    const TMDB_IMAGE_BASE = import.meta.env.VITE_TMDB_IMAGE_BASE;

    return (
       <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mt-6 grid grid-cols-4 gap-x-6 gap-y-10  xl:gap-x-8">
                {reviews.map((review) => {
                    const movie = movies.find((m) => m.id === review.movieId);
                    if (!movie) return null;

                    return (
                        <div key={review.userId} className="group relative">
                            <Link to={`/movie/${movie.id}`}>
                                <img
                                    src={`${TMDB_IMAGE_BASE}${movie.poster_path}`}
                                    alt={movie.title}
                                    className="w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 aspect-[2/3]"
                                />
                                <div className="mt-4 text-center gap-2 flex flex-col items-center">
                                    <h3 className="text-md font-medium text-gray-700 flex-wrap">{movie.title}</h3>
                                    <StarRating voteAverage={(review.numStar / 5) * 10} />
                                    <p className="mt-1 text-md text-gray-500 italic">{review.review}</p>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}