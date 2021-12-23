import React, { useEffect, useState } from 'react';
import DonutDetail from './DonutDetail';



const DonutDetails = () => {
    const [donutdetails, setDonutDetails] = useState([])
    useEffect(() => {
        fetch('https://immense-cove-10373.herokuapp.com/donut')
            .then(res => res.json())
            .then(data => setDonutDetails(data))
    })
    return (

        <div>
            {/* <!-- component --> */}
            <main class="py-12 md:px-20 sm:px-14 px-6">
                <div class="sm:flex items-center shadow-md">
                    <div class="md:px-10 sm:px-5">
                        <h1 class="text-gray-800 font-bold text-2xl my-2">long established</h1>
                        <p class="text-gray-700 mb-2 md:mb-6">Here are some extraordinery donut we make.</p>
                        <div class="flex justify-between mb-2">
                            <span class="font-thin text-sm">May 20th 2020</span>
                            <span class="sm:block hidden mb-2 text-gray-800 font-bold">Read more</span>
                        </div>
                    </div>
                    <div>
                        <img class="bg-cover" src="https://i.ibb.co/bWPTh4q/colorful-tasty-donuts-144627-18315.jpg" alt="" />
                    </div>
                </div>


                <div className=" p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {donutdetails.map(donutdetail =>
                        <DonutDetail
                            key={donutdetail.id}
                            donutdetail={donutdetail}
                        ></DonutDetail>
                    )}
                </div>
            </main>
        </div>

    );
};

export default DonutDetails;