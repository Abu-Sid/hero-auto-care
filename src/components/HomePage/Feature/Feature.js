import React from 'react';
import whyHero from '../../../Image/why-hero.jpeg';


const services = [
    { 
        title: 'Gives You Time',
        detail: 'HERO gives you your most precious resource back, allowing you time to focus on what matters most to you.'

    },
    {
        title: 'Transparent Pricing ',
        detail: 'Take the hassle out of negotiating the cost of car care & maintenance and pay an affordable price.',

    },
    {
        title: 'Quality Service',
        detail: 'Service Providers are vetted before becoming a HERO Provider. HERO Providers are rated and reviewed. ',

    },
    {
        title: 'Stress-Free',
        detail: 'Request a service and a provider will come to you not the other way around. No more time wasted waiting in lines.',

    },
    {
        title: 'Easy Communication',
        detail: 'Stay in touch with your HERO Provider throughout the entire service.Your smile is our goal',

    },
    {
        title: 'No Hassle Payment',
        detail: 'Pay securely though the HERO app only when the service is complete. Always listen to our customer.',

    }

]

const Feature = () => {
    return (
        <div className=" pt-5">
            <div className="text-center">
                <img style={{width:'60%'}}src={whyHero} alt=""/>
            </div>
            <div className="d-flex flex-wrap justify-content-center mt-3">
                {
                    services.map(service =>
                        <div className="card m-2 " style={{ width: '20rem', border: 'none' }}>
                            <div className="card-body text-center">
                                <h3 className="card-title shared-color">{service.title}</h3>
                                <p className="card-text shared-color text">{service.detail}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Feature;