import { MOVIES_SAMPLE } from "~/data/movies_sample"
import type { MovieDetail } from "~/types"
import {useState, useEffect,useMemo} from 'react'
import MovieReviewsCard from "~/components/movieReviewsCard"

interface ListProps {
    movieListId:number;
    listName:string;
}

export default function List({movieListId, listName}:ListProps){
    const TMDB_IMAGE_BASE = import.meta.env.VITE_TMDB_IMAGE_BASE
    
    const randomMovie = useMemo(() => 
    MOVIES_SAMPLE[Math.floor(Math.random() * MOVIES_SAMPLE.length)]
, []);

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

    return (
        <>
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-8 lg:px-8 gap-6">
            <div 
            className="relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url(${TMDB_IMAGE_BASE}${randomMovie.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            >
                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">Classic RomComming Movies</h2>
                <p className="mt-6 text-lg/8 text-pretty text-gray-300">Best Movies and are in my opinion considered as classics and a must watch! If you havent seen any of these are you really a romcom fan?</p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                    <a href="#" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"> Add More Movies </a>
                    <a href="#" className="text-sm/6 font-semibold text-white hover:text-gray-100">
                    Learn more
                    <span aria-hidden="true">→</span>
                    </a>
                </div>
                </div>
                <div className="relative mt-16 h-80 lg:mt-8">
                {/* <img  src={`${TMDB_IMAGE_BASE}${randomMovie.backdrop_path}`} alt="App screenshot" className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10" /> */}
                </div>
            </div>
            {/**End of Movie List Details Card */}

            <MovieReviewsCard movies={MOVIES_SAMPLE} reviews={reviewListSample}/>
        </div>

        </>
    )
}