import React from "react";

export default function About(){
    return (
        <>
            <div className="px-24 py-12">
                <h2 className="text-2xl/9 font-bold tracking-tight text-gray-900 pb-6">About youpick</h2>

                <div className="px-4 sm:px-0">
                    <h3 className="text-base/7 font-semibold text-gray-900">Project Details & Serverless Architecture</h3>
                    <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">A detailed overview of the project architecture, technologies, and AWS serverless infrastructure.</p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Frontend</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">React, React Router, Amazon Cloud Front (CF), Amazon S3 Bucket (hosts frontend files)</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Backend</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">API Gateway, AWS Lambda</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Database</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">AWS Relational Database (RDS), PostgreSQL</dd>
                    </div>
                    <   div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Other</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">The Movie Database (TMDB) API, Tailwind Components, HyperUI Components</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">About</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                        This project is a movie recommendation application that takes users’ preferred genres and recommends a movie for their next watch. The application also includes a movie log and review system, allowing users to save movies to a watchlist for future viewing. Additionally, users can create and curate their own custom movie lists.
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Attachments</dt>
                        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                            <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                            <div className="flex w-0 flex-1 items-center">
                                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5 shrink-0 text-gray-400">
                                <path d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z" clip-rule="evenodd" fill-rule="evenodd" />
                                </svg>
                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                <span className="truncate font-medium text-gray-900">resume_back_end_developer.pdf</span>
                                <span className="shrink-0 text-gray-400">2.4mb</span>
                                </div>
                            </div>
                            <div className="ml-4 shrink-0">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                            </div>
                            </li>
                            <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                            <div className="flex w-0 flex-1 items-center">
                                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5 shrink-0 text-gray-400">
                                <path d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z" clip-rule="evenodd" fill-rule="evenodd" />
                                </svg>
                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                <span className="truncate font-medium text-gray-900">youpick_erd.pdf</span>
                                <span className="shrink-0 text-gray-400">37kb</span>
                                </div>
                            </div>
                            <div className="ml-4 shrink-0">
                                <a href="/youpick_erd.pdf" download className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                            </div>
                            </li>
                        </ul>
                        </dd>
                    </div>
                    </dl>
                </div>
            </div>
        </>
    );
}
