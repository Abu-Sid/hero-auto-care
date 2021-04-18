import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState();
  useEffect(() => {
    fetch("https://thawing-ravine-07119.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setTestimonialData(data);
        
      });
  }, []);
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header text-center">
                   <h1 className="text-white text-uppercase fw-bold">What Our Customers Says</h1>
               </div>
               <div className="card-deck mt-5 pb-3">
                    {
                        testimonialData?.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial._id}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;    