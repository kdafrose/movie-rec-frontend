import type { MovieDetail } from "../types";
import React, {useEffect, useState} from "react";
import { StarRating } from "~/components/starRating";
import ReviewCard from "~/components/reviewCard";
import {useParams} from "react-router";
import {getMovieDetails} from "~/api/movies";

export default function MovieInfo() {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState<MovieDetail | null>(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            if (movieId) {
                const details = await getMovieDetails(movieId);
                setMovieDetails(details);
            } 
        };

        fetchMovieDetails();
    }, []);


    return (
        <>
        <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                {movieDetails ? (
                                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                <img className="w-full dark:hidden" src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
                <img className="w-full hidden dark:block" src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
                </div>

                <div className="mt-6 sm:mt-8 lg:mt-0">
                <h1
                    className="text-4xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
                >
                    {movieDetails.title}
                </h1>
                <p className=" text-gray-500 dark:text-gray-400 mb-2"> 
                {movieDetails.runtime} mins | Status: {movieDetails.status}
                </p>
                <p className=" text-gray-500 dark:text-gray-400"> 
                    Release Date: {movieDetails.release_date} | Language: {movieDetails.original_language.toUpperCase()} | Popularity: {movieDetails.popularity}
                </p>
                <p className="mb-6 text-gray-500 dark:text-gray-400">
                    Production Companies: {movieDetails.production_companies.map((company) => company.name).join(', ')}
                </p>
                {movieDetails.genres && movieDetails.genres.length > 0 && (
                    <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Genres:</h2>
                    <ul className="flex flex-wrap gap-2 mt-2">
                        {movieDetails.genres.map((genre) => (
                        <li key={genre.id} className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded-full dark:bg-gray-800 dark:text-gray-300">
                            {genre.name}
                        </li>
                        ))}
                    </ul>
                    </div>
                )}

                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">

                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
                        <StarRating voteAverage={movieDetails.vote_average} />
                    <p
                        className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
                    >
                        {movieDetails.vote_average} / 10
                    </p>
                    <a
                        href="#"
                        className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                    >
                        {movieDetails.vote_count} votes
                    </a>
                    </div>
                </div>

                <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                    <a
                    href="#"
                    title=""
                    className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    role="button"
                    >
                    <svg
                        className="w-5 h-5 -ms-2 me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                        />
                    </svg>
                    Add to Watchlist
                    </a>

                    <a
                    href="#"
                    title=""
                    className="text-white mt-4 sm:mt-0 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800 flex items-center justify-center"
                    role="button"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 4h10l4 4v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm10 0v4h4"
                        />
                    </svg>

                    Add to Movie List
                    </a>
                </div>

                <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Overview:</h2>
                <h2 className="text-lg mb-1 font-semibold text-gray-900 sm:text-lg dark:text-white">
                    {movieDetails.tagline}
                </h2>
                <p className="mb-6 text-gray-500 dark:text-gray-400">
                    {movieDetails.overview}
                </p>
                    
                    <div className="py-12">
                        <h2 className="text-2xl/9 font-bold tracking-tight text-gray-900 pb-6">My Review</h2>
                        <ReviewCard review={movieDetails.overview} />
                    </div>
                
                </div>
            </div>
                ) :
                (
                    <p>Error fetching movie details.</p>
                )}
            </div>
            </section>
        </>
    )
}