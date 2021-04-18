import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import "./AddService.css";


const AddService = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext);
  const { register, handleSubmit,reset } = useForm();
  const [imageURL, setImageURL] = useState(null);
  
  const onSubmit = data => {
    console.log(data);
    const productData = {
      name: data.name,
      price:data.price,
      imageURL: imageURL
    };
    const url = `https://thawing-ravine-07119.herokuapp.com/addService`;
    console.log(productData);
    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
    .then(res => res.json())
    .then(data=>{
      alert("Service Added Successfully")})
      reset()
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '0ebf60e54ff9b3704a6d9cb7fb796b92');
    imageData.append('image', event.target.files[0]);
    
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    .then(function (response) {
      setImageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  return (
    <>
    <Sidebar/>
    <div className="admin-container">
      
      <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Add New Service</h1>
      <label>Service Name</label>
      <input name="name"  {...register("name")} />
      <label>Price</label>
      <input type="number" name="price" {...register("price")} />
      <label>Upload Image</label>
      <input name="exampleRequired" type="file" onChange={handleImageUpload} />
      <input type="submit"  className="submitButton"/>
      </form>
    </div>
    </>
  );
};

export default AddService;