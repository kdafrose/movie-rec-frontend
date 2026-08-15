
const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500"

interface Movie {
    id: number;
    title: string;
    original_title: string;
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface MovieCarouselProps {
    movies: Movie[];
    title?: string;
}

export default function MovieCarousel({ movies, title }: MovieCarouselProps) {
    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
            {title && (
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
            )}
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
                {movies.map((movie) => (
                    <div key={movie.id} className="group relative">
                        <img
                            src={`${TMDB_IMAGE_BASE}${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-60"
                        />
                        <div className="mt-4 text-center">
                            <h3 className="text-sm font-medium text-gray-700 flex-wrap">{movie.title}</h3>
                            <p className="mt-1 text-sm text-gray-500"> Release: {movie.release_date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}