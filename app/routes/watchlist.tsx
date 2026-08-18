import MovieCarousel from "~/components/MovieCarousel"
import { MOVIES_SAMPLE } from "~/data/movies_sample"

export default function WatchList(){
    const watchlistSample = MOVIES_SAMPLE
    return (
        <>
        
        <MovieCarousel movies={watchlistSample}/>
        </>
    )
}