import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import "./AddReview.css";


const AddReview = () => {
  const { register, handleSubmit,reset } = useForm();
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  console.log(loggedUser);
  const onSubmit = data => {
    console.log(data);
    const productData = {
      name: data.name,
      review:data.review,
      
    };
    const url = `https://thawing-ravine-07119.herokuapp.com/addReview`;
    console.log("review",productData);
    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
    .then(res => res.json())
    .then(data=>{
      alert("Review Added Successfully")})
      reset()
  };

  
  return (
    <>
    <Sidebar/>
    <div className="admin-container">
      
      <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Write A Review</h1>
      <label>Your Name</label>
      <input name="name" value={loggedUser.displayName}  {...register("name")} />
      <label>Your Review</label>
      <input name="review" {...register("review")} />
      <input type="submit"  className="submitButton"/>
      </form>
    </div>
    </>
  );
};

export default AddReview;