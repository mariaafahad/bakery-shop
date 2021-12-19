import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const OrderList = ({ list }) => {
    const { name, price, img } = list;
    // console.log(name, price);
    return (

        <div class="h-screen">
            <div class="w-80 mt-24 m-auto lg:mt-16 max-w-sm">
                <img src={img && img} alt="" class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover" />
                <div class="bg-white shadow-2xl rounded-b-3xl">
                    <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">Order Summary</h2>
                    <div class="w-5/6 m-auto">
                        <p class="text-center text-gray-500 pt-5">You can order diffrent items from anywhere you like!</p>
                    </div>
                    <div class="grid grid-cols-4 w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">

                        <div class="col-span-2 pt-1">
                            <p class="text-gray-800 font-bold lg:text-sm">Name:{name && name}</p>
                            <p class="text-gray-500 text-sm">Price: {price && price}</p>
                        </div>

                    </div>
                    <div class="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700">
                        <Link to='/payment'>   <button class="lg:text-sm text-lg font-bold text-yellow-500">Proceed to Payment</button></Link>

                    </div>
                    <div class="text-center m-auto mt-6 w-full h-16">
                        <button class="text-gray-500 font-bold lg:text-sm hover:text-gray-900">Cancel Order</button>
                    </div>
                </div>
            </div>
        </div>





    );
};

export default OrderList;