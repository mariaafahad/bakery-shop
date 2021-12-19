import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const OtherServices = () => {
    return (
        // < !--component -- >
        <div>
            <div class="bg-black">
                <div class="flex relative text-center">
                    <h1 class="text-3xl tracking-wider text-white text-sha uppercase font-bold p-4 self-center z-10 content-center absolute text-center w-full md:text-4xl">Welcome to Our other services</h1>
                    <img class="w-full object-cover h-72 block mx-auto  sm:block sm:w-full"
                        src="https://i.ibb.co/CzHpHdG/female-baker-holding-baked-fresh-macaroons-pastries-tray-23-2148028064.jpg"
                        alt="Banner" width="1920" height="288" />
                </div>
            </div>

            <div class="p-5 mx-auto max-w-screen-xl">
                <h2 class="font-bold uppercase text-xl pb-4">Best Options For you!!!!</h2>

                <div class="grid grid-flow-row-dense grid-cols-2 gap-3 justify-between sm:grid-cols-3 md:grid-cols-4">

                    <div>
                        <img class="border border-yellow-700 mb-1 border-solid w-full hover:border-yellow-500  hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer" alt="Best seller"
                            src="https://i.ibb.co/Y8JWz0Q/cklt1.jpg" loading="lazy" />
                        <h2 class="pt-2 m-0 leading-4 font-semibold">Chocolate Collections</h2>
                        <p>$210</p>
                        <p class="text-green-500 italic font-medium">In Stock</p>
                    </div>
                    <div class="">
                        <img class="border border-yellow-700 border-solid w-full hover:border-yellow-500  hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer" alt="Best seller"
                            src="https://i.ibb.co/5T31SYv/bread.jpg" loading="lazy" />
                        <h2 class="pt-2 m-0 leading-4 font-semibold">Bread Collections</h2>
                        <p>$210</p>
                        <p class="text-green-500 italic font-medium">In Stock</p>
                    </div>
                    <div class="">
                        <img class="border border-yellow-700 border-solid w-full hover:border-yellow-500  hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer" alt="Best seller"
                            src="https://i.ibb.co/KwNLCwM/side-view-puff-pastries-with-ground-meat-sesame-seeds-shortcakes-filled-with-mashed-potato-table-141.jpg" loading="lazy" />
                        <h2 class="pt-2 m-0 leading-4 font-semibold">Puff Pestry Collections</h2>
                        <p>$210</p>
                        <p class="text-green-500 italic font-medium">In Stock</p>
                    </div>
                    <div class="">
                        <img class="border border-yellow-700 border-solid w-full hover:border-yellow-500  hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer" alt="Best seller"
                            src="https://i.ibb.co/vjFn6wg/set-various-american-style-cookies-light-concrete-background-shortbread-with-confetti-sesame-seed-pe.jpg" loading="lazy" />
                        <h2 class="pt-2 m-0 leading-4 font-semibold">Cookie collections</h2>
                        <p>$210</p>
                        <p class="text-red-500 italic font-medium">Out of Stock</p>
                    </div>
                    <div class="">
                        <img class="border border-yellow-700 border-solid w-full hover:border-yellow-500  hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer" alt="Best seller"
                            src="https://i.ibb.co/6Z23jPM/meacaroon.jpg" loading="lazy" />
                        <h2 class="pt-2 m-0 leading-4 font-semibold">Macaroon Collections</h2>
                        <p>$210</p>
                        <p class="text-green-500 italic font-medium">In Stock</p>
                    </div>
                    <div class="">
                        <img class="border border-yellow-700 border-solid w-full hover:border-yellow-500  hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer" alt="Best seller"
                            src="https://i.ibb.co/nwzg80y/giftbox.jpg" loading="lazy" />
                        <h2 class="pt-2 m-0 leading-4 font-semibold">Gift Boxes</h2>
                        <p>$210</p>
                        <p class="text-green-500 italic font-medium">In Stock</p>
                    </div>
                    <div class="">
                        <img class="border border-yellow-700 border-solid w-full hover:border-yellow-500  hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer" alt="Best seller"
                            src="https://i.ibb.co/0ZdVV8j/sprnkl3.jpg" loading="lazy" />
                        <h2 class="pt-2 m-0 leading-4 font-semibold">Sprinkle</h2>
                        <p>$210</p>
                        <p class="text-red-500 italic font-medium">Out of Stock</p>
                    </div>
                    <div class="">
                        <img class="border border-yellow-700 border-solid w-full hover:border-yellow-500  hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer" alt="Best seller"
                            src="https://i.ibb.co/SVvM0WF/wrpngppr1.jpg" />
                        <h2 class="pt-2 m-0 leading-4 font-semibold">Wrapping Paper</h2>
                        <p>$210</p>
                        <p class="text-green-500 italic font-medium">In Stock</p>
                    </div>

                </div>
            </div>

            <div class="bg-gray-200">
                <section class="py-5 mx-auto max-w-screen-xl  sm:flex flex-grow-0 sm:p-5">
                    <article class="flex-col justify-center inline-flex self-stretch  p-6">
                        <h2 class="uppercase font-semibold text-xl">Design</h2>
                        <strong class="text-lg pb-2 font-normal font-sans sm:text-2xl">You can also Add your Designs here</strong>

                        <Link to='/design'><button class="font-semibold uppercase border-black border p-3 max-w-max hover:bg-gray-600 hover:text-white">See Here</button></Link>
                    </article>
                    <figure>
                        <img
                            src="https://i.ibb.co/K63pHH1/1000-F-221274646-QBTajv-SFDYWKYi8-DVq-VTRKC5m-BDJIZTY.jpg"
                            alt="Banner" looding="lazy" />
                    </figure>
                </section>
            </div>
        </div>
    );
};

export default OtherServices;