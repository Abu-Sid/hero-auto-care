import React from 'react';
import Footer from '../../Footer/Footer';
import Feature from '../Feature/Feature';
import Header from '../Header/Header';
import Location from '../Location/Location';
import Provider from '../Provider/Provider';
import Services from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header/>
            <Feature/>
            <Services/>
            <Provider/>
            <Testimonials></Testimonials>
            <Location/>
            <Footer/>
        </div>
    );
};

export default Home;