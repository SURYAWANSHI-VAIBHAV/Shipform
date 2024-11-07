import React from 'react'

function Pricing() {
    return (
        <div className='w-full py-20'>
            <div className='w-full mx-auto px-10 lg:px-0 flex justify-center max-w-[60rem]'>
                <div className="mt-6 md:mt-12 grid md:grid-cols-3 w-full sm:w-auto gap-3 md:gap-6 lg:gap-3 xl:gap-6 lg:items-center">
                    <div className="flex flex-col bg-white flex-shrink-0 border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-neutral-800">
                        <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Starter</h4>
                        <span className="mt-7 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-neutral-200">$0</span>
                        <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">Perfect for individuals just getting started</p>

                        <ul className="mt-7 space-y-2.5 text-sm">
                            <li className="flex gap-x-2">
                                <svg className="shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                <span className="text-gray-800 dark:text-neutral-400">
                                    1 user
                                </span>
                            </li>

                            <li className="flex gap-x-2">
                                <svg className="shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                <span className="text-gray-800 dark:text-neutral-400">
                                    Basic features
                                </span>
                            </li>

                            <li className="flex gap-x-2">
                                <svg className="shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                <span className="text-gray-800 dark:text-neutral-400">
                                    Email support
                                </span>
                            </li>
                        </ul>

                        <a className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-violet-600 text-violet-600 hover:border-violet-500 hover:text-violet-500 focus:outline-none focus:border-violet-500 focus:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400 dark:focus:text-violet-400 dark:focus:border-violet-400" href="#">
                            Start now
                        </a>
                    </div>

                    <div className="flex flex-col bg-white border-2 border-violet-900 text-center shadow-xl rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-violet-700">
                        <p className="mb-3"><span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-white">Best Value</span></p>
                        <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Professional</h4>
                        <span className="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-neutral-200">
                            $49
                        </span>
                        <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">Great for growing teams and advanced features</p>

                        <ul className="mt-7 space-y-2.5 text-sm">
                            <li className="flex gap-x-2">
                                <svg className="shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                <span className="text-gray-800 dark:text-neutral-400">
                                    3 users
                                </span>
                            </li>

                            <li className="flex gap-x-2">
                                <svg className="shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                <span className="text-gray-800 dark:text-neutral-400">
                                    All features
                                </span>
                            </li>

                            <li className="flex gap-x-2">
                                <svg className="shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                <span className="text-gray-800 dark:text-neutral-400">
                                    24/7 support
                                </span>
                            </li>
                        </ul>

                        <a className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-700 focus:outline-none focus:bg-violet-700 disabled:opacity-50 disabled:pointer-events-none" href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html">
                            Get started
                        </a>
                    </div>

                    <div className="flex flex-col bg-white border flex-shrink-0 border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-neutral-800">
                        <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Enterprise</h4>
                        <span className="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-neutral-200">
                            $149
                        </span>
                        <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">All the tools you need to scale your business</p>

                        <ul className="mt-7 space-y-2.5 text-sm">
                            <li className="flex gap-x-2">
                                <svg className="shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                <span className="text-gray-800 dark:text-neutral-400">
                                    10 users
                                </span>
                            </li>

                            <li className="flex gap-x-2">
                                <svg className="shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                <span className="text-gray-800 dark:text-neutral-400">
                                    Premium features
                                </span>
                            </li>

                            <li className="flex gap-x-2">
                                <svg className="shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                <span className="text-gray-800 dark:text-neutral-400">
                                    Dedicated support
                                </span>
                            </li>
                        </ul>

                        <a className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-violet-600 text-violet-600 hover:border-violet-500 hover:text-violet-500 focus:outline-none focus:border-violet-500 focus:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400 dark:focus:text-violet-400 dark:focus:border-violet-400" href="#">
                            Contact us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
