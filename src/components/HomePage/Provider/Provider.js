import React from 'react';
import provider from '../../../Image/provider.jpeg';
const Provider = () => {
    return (
        <div className="card bg-dark text-white " >
            <img src={provider}  class="card-img" alt="..."/>
            <div className="card-img-overlay d-inline" style={{marginTop:"20%",marginLeft:"5rem"}} >
                <h1 className="card-title"><strong>Become a HERO Service Provider</strong></h1> <br/>
                <h3 className="card-text" style={{color:"#16322e"}}><strong>Build Clients. Work When You Want. <br/> Increase Sales.</strong></h3>
                <button className="btn btn-primary rounded-pill pr-3 pl-3">Learn More</button>
            </div>
        </div>
    );
};

export default Provider;