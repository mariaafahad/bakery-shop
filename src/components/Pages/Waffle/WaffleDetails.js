import React, { useEffect, useState } from 'react';
import WaffleDetail from './WaffleDetail';



const WaffleDetails = () => {
    const [waffledetails, setWaffleDetails] = useState([])
    useEffect(() => {
        fetch('https://immense-cove-10373.herokuapp.com/waffle')
            .then(res => res.json())
            .then(data => setWaffleDetails(data))
    })
    return (

        <div>
            {/* <!-- component --> */}
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
                    <div>
                        <img class="bg-cover" src="https://i.ibb.co/bRCJYx5/1000-F-280802790-AOP1u-HJZCHnz-Sve-XMG9s34-S4-Anualggl.jpg" alt="" />
                    </div>
                </div>


                <div className=" p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {waffledetails.map(waffleDetail =>
                        < WaffleDetail
                            key={waffleDetail.id}
                            waffleDetail={waffleDetail}
                        ></ WaffleDetail>
                    )}
                </div>
            </main>
        </div>
    )
};

export default WaffleDetails;