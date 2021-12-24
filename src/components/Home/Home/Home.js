import React from 'react';
import Footer from '../../Pages/Footer/Footer';
import OurHistory from '../../Pages/OurHistory/OurHistory';
import Services from '../../Services/Services';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OurHistory></OurHistory>
            <Footer></Footer>
        </div>
    );
};

export default Home;