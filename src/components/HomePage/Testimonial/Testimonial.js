import { Grid } from '@material-ui/core';
import RateReviewIcon from '@material-ui/icons/RateReview';
import React from 'react';
const Testimonial = ({testimonial}) => {
    const {name,review} =testimonial;
    return (
        <div className="card shadow rounded-5">
             <Grid item align="center">
             <RateReviewIcon  fontSize="large"/>
             </Grid>
            <div className="card-body">
               
                <p className="card-text text-center">{review}</p>
            </div>
            <div className="card-footer d-flex  justify-content-center">
                
                    <h4 className="text-primary ">{name}</h4>
            </div>
       </div>
    );
};

export default Testimonial;
