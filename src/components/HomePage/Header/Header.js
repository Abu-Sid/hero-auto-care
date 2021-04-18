import React from 'react';
import "./Header.scss";
const Header = () => {
    return (
        <>
        <div className="background">
                <div className="bg-color">
                    <div className='container text-left' style={{paddingTop:"4rem",marginLeft:"5rem"}}>
                        <h1 className="text-white pt-5 " ><strong>WE DO IT ALL</strong></h1>
                        
                        <h3 className="text-white pt-5 " ><strong>FROM OIL CHANGES TO INSPECTIONS <br/> WE'RE HERE TO KEEP YOUR CAR RUNNING.</strong></h3>
                            {/* <input  className="form-control p-3 mr-3" style={{ width: '600px' }} type="text" /> */}
                        <button className="btn btn-primary rounded-pill pr-3 pl-3">Our Services</button>
                        
                    </div>
                </div>

            </div>
        {/* <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main> */}
        </>
    );
};

export default Header;