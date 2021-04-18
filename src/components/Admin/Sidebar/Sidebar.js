import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../../App';
import "./Sidebar.css";
const Sidebar = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    useEffect(() => {
        fetch(`https://thawing-ravine-07119.herokuapp.com/admin?email=${loggedUser.email}`)
            .then(res => res.json())
            .then(data => {
                    if (data[0]){
                    const newUser = { ...loggedUser };
                    newUser.setUser = true;
                    setLoggedUser(newUser)
                    }
                else {
                    const newUser = { ...loggedUser };
                    newUser.setUser = false;
                    setLoggedUser(newUser)
                }
            })
    }, [])
    return (
        
            <div className="sidebar">
                
            {!loggedUser.setUser ?
            <>
            <Link to="/order">
               <h3><PersonAddIcon/>Orders</h3>
            </Link>
            <Link to="/addReview">
               <h3><PersonAddIcon/> Add Review</h3>
            </Link>
            </>
            :
            <>
            <Link to="/manage"> 
              <h3><SupervisorAccountIcon/>Manage Service List</h3> 
            </Link>
          
            <Link to="/addProduct">
               <h3><PersonAddIcon/> Add Service</h3>
            </Link>
            
            <Link to="/addAdmin">
               <h3><PersonAddIcon/> Make Admin</h3>
            </Link>
            <Link to="/allOrders">
               <h3><PersonAddIcon/> All Orders</h3>
            </Link>
            </>
}   
            </div>
    );
};

export default Sidebar;