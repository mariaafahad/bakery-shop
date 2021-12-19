import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Explorer = ({ products }) => {
    const { name, img, Ingredients, size, price, _id } = products;


    return (
        <div class="max-w-lg mx-auto">
            <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">

                <img class="rounded-t-lg" src={img} alt="" />

                <div class="p-5">

                    <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Name:{name}</h5>

                    <p class="font-normal text-gray-700 mb-3">Ingredients:{Ingredients}</p>
                    <h5>Price:{price}</h5>
                    <h5>Size:{size}</h5>
                    <Link to={`/details/purchase/${_id}`} >
                        <button className="transition duration-500 ease-in-outborder-2 border-yellow-300 rounded-full py-2 px-2 my-2 hover:border-gray-500 hover:bg-red-200 hover:text-white transform hover:-translate-y-1 hover:scale-110 ...  ">Purchase now</button>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default Explorer;