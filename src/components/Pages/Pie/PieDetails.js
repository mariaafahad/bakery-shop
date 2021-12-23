import React, { useEffect, useState } from 'react';
import PieDetail from './PieDetail';

const PieDetails = () => {
    const [piedetails, setPieDetails] = useState([])
    useEffect(() => {
        fetch('https://immense-cove-10373.herokuapp.com/pie')
            .then(res => res.json())
            .then(data => setPieDetails(data))
    })
    return (

        <div>
            {/* <!-- component --> */}
            <main class="py-12 md:px-20 sm:px-14 px-6">
                <div class="sm:flex items-center shadow-md">
                    <div class="md:px-10 sm:px-5">
                        <h1 class="text-gray-800 font-bold text-2xl my-2">long established</h1>
                        <p class="text-gray-700 mb-2 md:mb-6">All pie lovers are welcome here!!!</p>
                        <div class="flex justify-between mb-2">
                            <span class="font-thin text-sm">May 20th 2020</span>
                            <span class="sm:block hidden mb-2 text-gray-800 font-bold">Read more</span>
                        </div>
                    </div>
                    <div>
                        <img class="bg-cover" src="https://i.ibb.co/8dDBSN9/top-view-delicious-thanksgiving-pumpkin-pie-23-2148686276.jpg" alt="" />
                    </div>
                </div>


                <div className=" p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {piedetails.map(pieDetail =>
                        < PieDetail
                            key={pieDetail.id}
                            pieDetail={pieDetail}
                        ></ PieDetail>
                    )}
                </div>
            </main>
        </div>
    )
};

export default PieDetails;