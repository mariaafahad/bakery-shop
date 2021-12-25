
import { Link } from 'react-router-dom';

const Service = ({ service }) => {


    const { name, img, description, price } = service;
    return (



        <div class="max-w-lg mx-auto">
            <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">

                <img class="rounded-t-lg scale-100" src={img} alt="" />

                <div class="p-5">

                    <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Name:{name}</h5>

                    <p class="font-normal text-gray-700 mb-3">Description:{description}</p>
                    <h5>Price:{price}</h5>
                    <Link to={`/details/${service.id}`} >
                        <button className="transition duration-500 ease-in-outborder-2 border-yellow-300 rounded-full py-2 px-2 my-2 hover:border-gray-500 hover:bg-red-200 hover:text-white transform hover:-translate-y-1 hover:scale-110 ...  ">Purchase now</button>
                    </Link>

                </div>
            </div>

        </div>

    );
};

export default Service;