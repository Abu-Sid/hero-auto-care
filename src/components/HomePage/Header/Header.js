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
        </>
    );
};

export default Header;