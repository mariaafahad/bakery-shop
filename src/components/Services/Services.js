import Aos from 'aos';

import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    useEffect(() => {
        Aos.init({
            duration: 7000
        });
    }, []);


    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div clasName="container">
            <div data-aos="fade-right" className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

                {services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)}
            </div>
        </div>
    );
};

export default Services;