import { MOVIES_SAMPLE } from "~/data/movies_sample"
import MovieCarousel from "~/components/MovieCarousel"
import { useState, useEffect } from "react"

export default function Profile() {
    const [watchedSeeMore, setWatchedSeeMore] = useState(false);
    const [highestSeeMore, setHighestSeeMore] = useState(false);
    const [lowestSeeMore, setLowestSeeMore] = useState(false);

    return (
        <>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">

                {/* Profile Section */}
                <div className="flex items-center gap-6 mb-12 p-6 bg-neutral-primary-soft border border-default rounded-xl shadow-xs">
                    <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
                        <img
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1160"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-heading">@usernamehere</h2>
                        <p className="text-sm text-body mt-1">353 movies watched</p>
                    </div>
                </div>

                {/* Watched Movies */}
                <div className="mb-4">
                    <div className="flex justify-between items-center px-8">
                        <h2 className="text-2xl font-bold text-heading">Watched Movies</h2>
                        <button
                            onClick={() => setWatchedSeeMore(!watchedSeeMore)}
                            className="text-sm text-body hover:text-heading transition-colors"
                        >
                            {watchedSeeMore ? "See Less" : "See More"}
                        </button>
                    </div>
                    <MovieCarousel movies={watchedSeeMore ? MOVIES_SAMPLE : MOVIES_SAMPLE.slice(0, 6)} />
                </div>

                {/* Highest Rated */}
                <div className="mb-4">
                    <div className="flex justify-between items-center px-8">
                        <h2 className="text-2xl font-bold text-heading">Highest Rated Movies</h2>
                        <button
                            onClick={() => setHighestSeeMore(!highestSeeMore)}
                            className="text-sm text-body hover:text-heading transition-colors"
                        >
                            {highestSeeMore ? "See Less" : "See More"}
                        </button>
                    </div>
                    <MovieCarousel movies={highestSeeMore ? MOVIES_SAMPLE : MOVIES_SAMPLE.slice(0, 6)} />
                </div>

                {/* Lowest Rated */}
                <div className="mb-4">
                    <div className="flex justify-between items-center px-8">
                        <h2 className="text-2xl font-bold text-heading">Lowest Rated Movies</h2>
                        <button
                            onClick={() => setLowestSeeMore(!lowestSeeMore)}
                            className="text-sm text-body hover:text-heading transition-colors"
                        >
                            {lowestSeeMore ? "See Less" : "See More"}
                        </button>
                    </div>
                    <MovieCarousel movies={lowestSeeMore ? MOVIES_SAMPLE : MOVIES_SAMPLE.slice(0, 6)} />
                </div>

            </div>
        </>
    );
}