
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Banner.css'

const Banner = () => {

    return (
        <>

            <div class="flex flex-col  mx-auto -mt-20 overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-500">
                <div class="relative z-10 flex w-full min-h-screen px-5 pt-20 mx-auto sm:px-12 sm:h-screen max-w-7xl sm:pt-0 lg:px-0">
                    <div class="w-full md:w-2/3">
                        <div class="flex flex-col items-start justify-center w-full h-full pb-20">
                            <div class="relative w-full lg:pl-10">

                                <h1 class="relative z-0 w-full animate-pulse max-w-md py-2 text-4xl font-black text-left  sm:py-5 sm:text-6xl" data-unsp-sanitized="clean">My Bakery</h1>
                            </div>

                            <div class="flex flex-col items-start my-4 text-left lg:pl-10">
                                <p class="max-w-md mb-10 text-base font-light text-gray-200 sm:text-lg lg:text-xl dark:text-dark-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laborum deleniti eius aliquam tenetur quisquam maiores tempora odit, distinctio ex porro dolore atque nulla a dolorum similique ratione voluptas consequatur.</p>

                                <div class="relative flex flex-col items-center justify-start w-full space-y-5 sm:w-auto lg:space-y-0 lg:space-x-5 lg:flex-row">
                                    <Link to='/explore' class="flex items-center animate-bounce justify-center w-full px-8 py-3 text-base font-medium leading-6  text-blue-600 transition duration-150 ease-in-out border border-transparent rounded-lg sm:w-auto sm:rounded-full bg-blue-50 xl:px-10 hover:bg-white focus:outline-none focus:border-blue-700 focus:shadow-outline-blue md:py-4 xl:text-xl hover:shadow-black" data-unsp-sanitized="clean">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                        Explore For Order
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="relative w-0 md:w-1/2"></div>
                </div>
                <div class="absolute  top-0 left-0 z-0 flex items-start justify-center w-full h-screen overflow-hidden opacity-75">
                    <div class="relative z-20 w-1/2">
                        <div class="absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-yellow-500 to-yellow-500"></div>
                    </div>
                    <div class="relative z-10 w-1/2 ">
                        <div class="absolute top-0 right-0 hidden w-full h-full sm:block">
                            <div class="flex items-center justify-center w-screen h-screen transform scale-75 -rotate-12 -translate-x-80 sm:-translate-x-64 sm:scale-125 md:scale-125 min-w-persp md:-translate-x-24">
                                <div class="flex flex-col flex-wrap items-start justify-start w-full h-screen mx-auto space-x-3 space-y-3 transformPerspective">
                                    <div class="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm mt-3 ml-3">
                                        <img src="https://i.ibb.co/pPmffjK/rainbow.jpg" alt="" class="object-cover w-full h-auto" />
                                    </div>
                                    <div class="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                                        <img src="https://i.ibb.co/pPmffjK/rainbow.jpg" alt="" class="object-cover w-full h-auto" />
                                    </div>
                                    <div class="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                                        <img src="https://i.ibb.co/pPmffjK/rainbow.jpg" alt="" class="object-cover w-full h-auto" />
                                    </div>
                                    <div class="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                                        <img src="https://i.ibb.co/KwNLCwM/side-view-puff-pastries-with-ground-meat-sesame-seeds-shortcakes-filled-with-mashed-potato-table-141.jpg" alt="" class="object-cover w-full h-auto" />
                                    </div>
                                    <div class="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                                        <img src="https://i.ibb.co/KwNLCwM/side-view-puff-pastries-with-ground-meat-sesame-seeds-shortcakes-filled-with-mashed-potato-table-141.jpg" alt="" class="object-cover w-full h-auto" />
                                    </div>
                                    <div class="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                                        <img src="https://i.ibb.co/KwNLCwM/side-view-puff-pastries-with-ground-meat-sesame-seeds-shortcakes-filled-with-mashed-potato-table-141.jpg" alt="" class="object-cover w-full h-auto" />
                                    </div>
                                    <div class="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                                        <img src="https://i.ibb.co/pPmffjK/rainbow.jpg" alt="" class="object-cover w-full h-auto" />
                                    </div>
                                    <div class="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                                        <img src="https://i.ibb.co/pPmffjK/rainbow.jpg" alt="" class="object-cover w-full h-auto" />
                                    </div>
                                    <div class="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                                        <img src="https://i.ibb.co/pPmffjK/rainbow.jpg" alt="" class="object-cover w-full h-auto" />
                                    </div>
                                    <div class="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                                        <img src="https://i.ibb.co/pPmffjK/rainbow.jpg" alt="" class="object-cover w-full h-auto" />
                                    </div>
                                    <div class="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                                        <img src="https://i.ibb.co/pPmffjK/rainbow.jpg" alt="" class="object-cover w-full h-auto" />
                                    </div>
                                    <div class="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                                        <img src="https://i.ibb.co/pPmffjK/rainbow.jpg" alt="" class="object-cover w-full h-auto" />
                                    </div>
                                    <div class="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                                        <img src="https://i.ibb.co/pPmffjK/rainbow.jpg" alt="" class="object-cover w-full h-auto" />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="absolute top-0 left-0 z-50 w-full h-screen bg-gradient-to-r from-yellow-500 t to-transparent"></div>
                    </div>
                </div>
            </div>
        </>









    );
};

export default Banner;