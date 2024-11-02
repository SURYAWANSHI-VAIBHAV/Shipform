import React from 'react'
import PageFeature from '../Features/pagefeature'

function Hero() {
    return (
        <div className="w-full h-auto overflow-hidden bg-white dark:bg-black">
            <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-violet-600/10 via-transparent dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                    <div className="flex justify-center">
                        <a className="group inline-flex items-center bg-black/10 text-black dark:bg-white/10 dark:text-white hover:bg-black/20 dark:hover:bg-gray-700 border border-transparent dark:border-gray-700 p-1 ps-4 rounded-full shadow-md focus:outline-none focus:bg-black/20 dark:focus:bg-gray-600" href="../figma.html">
                            <p className="me-2 text-black dark:text-gray-200 text-sm">
                                Preline UI Figma is live.
                            </p>
                            <span className="group-hover:bg-black/20 dark:group-hover:bg-gray-600 py-1.5 px-2.5 flex justify-center items-center gap-x-2 rounded-full bg-black/10 dark:bg-white/10 font-semibold text-black dark:text-gray-200 text-sm">
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </span>
                        </a>
                    </div>

                    <div className="max-w-3xl text-center mx-auto">
                        <h1 className="block font-medium text-gray-900 dark:text-gray-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                            Now it's easier than ever to build products
                        </h1>
                    </div>

                    <div className="max-w-3xl text-center mx-auto">
                        <p className="text-lg text-gray-700 dark:text-gray-400">Preline is a large open-source project, crafted with Tailwind CSS framework by Hmlstream.</p>
                    </div>

                    <div className="text-center">
                        <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg hover:shadow-blue-700/50 dark:hover:shadow-blue-800/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 dark:focus:shadow-blue-800/50 py-3 px-6" href="#">
                            Get started
                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className='-translate-y-48 md:-translate-y-60 z-10 h-[16rem] md:h-[32rem]'>
            <PageFeature/>
            </div>
        </div>
    )
}

export default Hero
