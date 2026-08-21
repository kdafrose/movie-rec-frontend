import { useState } from "react"
import { StarRating } from "./starRating"

export default function ReviewList(){
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
        }
    ]
    const [movieReviews, setMovieReviews] = useState(reviewListSample)

    return (
        <>
            <h2 className="text-2xl/9 font-bold tracking-tight text-gray-900 px-4 mx-34 pb-12">Other Review</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mx-36 pb-12">
                {movieReviews.map((review) => (
                    <div key={review.userId} className="bg-neutral-primary-soft p-6 rounded-xl shadow-md transition-colors">
                        <StarRating voteAverage={(review.numStar / 5) * 10} />
                        <p className="text-heading font-semibold text-base leading-relaxed my-4">{review.review}</p>
                        <div className="flex items-center gap-3 mt-4">
                            <div className="w-10 h-10 rounded-full bg-neutral-secondary-medium flex items-center justify-center shrink-0">
                                <span className="text-heading font-semibold text-sm">
                                    {review.name.charAt(0).toUpperCase()}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-sm font-semibold text-heading italic">{review.name}</p>
                                <span className="text-default-medium">|</span>
                                <p className="text-sm text-body">@{review.username}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
