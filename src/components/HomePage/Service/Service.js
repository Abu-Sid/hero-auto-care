import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../App';
import uber from '../../../Image/uber.jpeg';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
const Services = () => {
    const [orderProduct,setOrderProduct]=useContext(ProductContext)
    console.log("serviceProduct",orderProduct);
  const [serviceData, setServiceData] = useState();
  useEffect(() => {
    fetch("https://thawing-ravine-07119.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
        setOrderProduct(data);
      });
  }, [setOrderProduct]);
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h1 className="text-primary text-uppercase ">Services at Your Fingertips</h1>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <div className="w-100 row mt-5">
                    {
                        serviceData?.map(service => <ServiceDetail service={service} key={service._id}></ServiceDetail>)
                    }
                </div>
            </div>
            <img style={{width:'100%',marginTop:'2rem'}} src={uber} alt=""/>
        </section>
    );
};

export default Services;