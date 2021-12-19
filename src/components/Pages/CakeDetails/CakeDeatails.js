import React, { useEffect, useState } from 'react';
import CakeDetail from './CakeDetail';

const CakeDeatails = () => {
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/cake')
            .then(res => res.json())
            .then(data => setDetails(data))
    })

    return (
        <div>

            <main class="py-12 md:px-20 sm:px-14 px-6">
                <div class="sm:flex items-center shadow-md">
                    <div class="md:px-10 sm:px-5">
                        <h1 class="text-gray-800 font-bold text-2xl my-2">long established</h1>
                        <p class="text-gray-700 mb-2 md:mb-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                        <div class="flex justify-between mb-2">
                            <span class="font-thin text-sm">May 20th 2020</span>
                            <span class="sm:block hidden mb-2 text-gray-800 font-bold">Read more</span>
                        </div>
                    </div>
                    <div >
                        <img class="bg-cover" src="https://i.ibb.co/6Pcp8h5/front-view-delicious-chocolate-cake-concept-23-2148801126.jpg" alt="" />
                    </div>
                </div>


                <div className=" p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {details.map(detail =>
                        <CakeDetail
                            key={detail.key}
                            detail={detail}
                        ></CakeDetail>
                    )}
                </div>
            </main>
        </div>
    );
};

export default CakeDeatails;