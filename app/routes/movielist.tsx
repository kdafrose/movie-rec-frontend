import { MOVIES_SAMPLE } from "~/data/movies_sample";
import { Link } from "react-router";
import { StarRating } from "~/components/starRating";
import { useState, useEffect } from "react";

export default function MovieList(){
    const movies = MOVIES_SAMPLE.slice(0,6)
    const TMDB_IMAGE_BASE = import.meta.env.VITE_TMDB_IMAGE_BASE
    const [movielists, setMovieLists] = useState()

    return (
        <>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="pb-12">
            <h2 className="text-2xl font-bold">Username Movie Lists Collection </h2>
            <p>Welcome to your movielist collection, add more if you want haha</p>
              <button className="px-4 py-2 mt-4 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-800 focus:ring-4 transition">Add New Movielist</button>
        </div>


            <div className="py-2 flex flex-col gap-2">
                <h2 className="text-xl font-semibold">Movie List here</h2>
                <p>Description here for the movie list user has set</p>
            </div>
            <button className="px-4 py-2 mt-4 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-800 focus:ring-4 transition">View List</button>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
                    {movies.map((movie) => (
                        <div key={movie.id} className="group relative">
                            <Link to={`/movie/${movie.id}`}>
                                <img
                                    src={`${TMDB_IMAGE_BASE}${movie.poster_path}`}
                                    alt={movie.title}
                                    className="w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-60"
                                />
                                <div className="mt-4 text-center py-2 flex flex-col items-center gap-2">
                                    <h3 className="text-sm font-medium text-gray-700 flex-wrap">{movie.title}</h3>
                                    <StarRating voteAverage={movie.vote_average}/>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}