import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { searchMovie } from "~/api/movies";
import type { Movielist } from "../types";
import {Link} from 'react-router'

const TMDB_IMAGE_BASE = import.meta.env.VITE_TMDB_IMAGE_BASE;

export default function Search() {
    const { query } = useParams();
    const [movies, setMovies] = useState<Movielist[]>([]);

    useEffect(() => {
        if (query) {
            searchMovie(query).then(setMovies);
        }
    }, [query]);

    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
            {query && (
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Search Results for "{query}"</h2>
            )}
            <div className="mt-6 grid grid-cols-6 gap-x-6 gap-y-10 xl:gap-x-8">
                {movies.map((movie) => (
                    <div key={movie.id} className="group relative">
                        <Link to={`/movie/${movie.id}`}>
                            <img
                                src={`${TMDB_IMAGE_BASE}${movie.poster_path}`}
                                alt={movie.title}
                                className="w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-60"
                            />
                            <div className="mt-4 text-center">
                                <h3 className="text-sm font-medium text-gray-700 flex-wrap">{movie.title}</h3>
                                <p className="mt-1 text-sm text-gray-500"> Release: {movie.release_date}</p>
                            </div>
                         </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}