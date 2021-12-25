import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurHistory = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000
        });
    }, []);
    return (
        <div>
            <div className="container flex ">
                <div className="m-20" data-aos="zoom-in">
                    <img src="https://i.ibb.co/hKjyZg9/10957920.jpg" alt="" />
                </div>
                <div className="p-10 m-20 border-l-2 border-orange-800" data-aos="zoom-in" >
                    <h1 className="text-3xl text-orange-800" >Our History- 1995</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptatibus veniam aspernatur nihil mollitia cupiditate praesentium, minima dolore illo iste vel fuga perspiciatis, rerum repudiandae at tempore, atque molestiae aperiam?</p>
                </div>
            </div>
            <div className="container flex ">
                <div className="m-20" data-aos="zoom-in">
                    <h1 className="text-3xl text-orange-800" >Our History- 2006</h1>
                    <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptatibus veniam aspernatur nihil mollitia cupiditate praesentium, minima dolore illo iste vel fuga perspiciatis, rerum repudiandae at tempore, atque molestiae aperiam?</p>
                </div>
                <div data-aos="zoom-in" className="p-10 m-10 border-l-2 border-orange-800 ">
                    <img src="https://i.ibb.co/vHRps19/1306023.jpg" alt="" />

                </div>
            </div>
        </div>

    );
};

export default OurHistory;