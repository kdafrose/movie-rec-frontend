import MovieCarousel from "~/components/MovieCarousel"
import { MOVIES_SAMPLE } from "~/data/movies_sample"

export default function WatchList(){
    const watchlistSample = MOVIES_SAMPLE
    return (
        <>
        <div className='px-37 py-12'>
            <h2 className='text-2xl font-bold'>Welcome to your Watchlist</h2>
            <p className="text-md py-4 font-medium text-gray-700 flex-wrap">Blah blah blah welcome to you watchlist add more movies you want to watch in the future</p>
            <button className="px-4 py-2 mt-4 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-800 focus:ring-4 transition">Add More Movies</button>
        </div>
        <MovieCarousel movies={watchlistSample}/>  
        </>
    )
}