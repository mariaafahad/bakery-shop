import React, { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../../Home/Home/Navbar';

const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 7000
        });
    }, []);
    return (
        <>
            <div>
                <Navbar />
                <div className="about">
                    <div className="container m-20 border-4 p-14">
                        <h1 data-aos="fade-up-right" className=" text-pink-900 text-6xl m-20">About Us</h1>
                        <img data-aos="flip-left" src="https://i.ibb.co/c22xLPG/photo-1491223111273-505dc52e1cf9.jpg" alt="" className="" title="image-name" />
                        <p data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="3000" className="p-14 text-orange-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p data-aos="fade-left"
                            data-aos-easing="ease-in-sine"
                            data-aos-offset="300"
                            data-aos-duration="3000"
                            className=" text-yellow-900"> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <p data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-duration="3000"
                            data-aos-easing="ease-in-sine" className=" text-orange-900">tncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

                    </div>
                </div>
            </div>


            <h1 data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="3000"
                data-aos-easing="ease-in-sine" className="text-amber-800 text-5xl self-center ">Our Chefs</h1>
            <div className="container p-20 ml-16
            sm:flex shadow-md md:px-10 sm:px-5 self-center text-orange-900">



                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="p-20 border-x-4 border-orange-500 rounded-full">
                    <img src="https://i.ibb.co/0jF7H0P/portrait-cheerful-male-chef-dressed-uniform-171337-5360.jpg" alt="" />
                    <h1>Cake Specialist: Kenwood Foster</h1>

                </div>

                <div data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="p-20 border-x-4 border-orange-500 rounded-full" >
                    <img src="https://i.ibb.co/N2pbBtf/smiling-young-male-baker-holding-loaf-breads-paper-bag-showing-thumb-up-sign-23-2147883313.jpg" alt="" />
                    <h1>Baking Specialist: Awen Gerorge</h1>
                </div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="p-20 border-x-4 border-orange-500 rounded-full">
                    <img src="https://i.ibb.co/BfxVBFJ/man-putting-pizza-oven-pizzeria-1303-25279.jpg" alt="" />
                    <h1>Oven Incharge: Devid Darkin</h1>
                </div>

            </div>



        </>
    )
};

export default AboutMe;