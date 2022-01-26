import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data =>{
   
    axios.post('http://localhost:5000/services', data)
    .then(res=> {
        if(res.data.insertedId)
        {
            alert('This package Added Successfully')
            reset()
        }
    })
  } 
    return (
        <div>
            <h2 className="fw-bold mb-4">Please Add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}> <br />
      <input {...register("name")} placeholder="package Name" /> <br />
      <input {...register("address")} placeholder="Location" /> <br />
      <input {...register("img")} placeholder="Image Url" /> <br />
      <input {...register("description")} placeholder="Description" /> <br />
      <input type="number" {...register("BDT")} placeholder="price" /> <br />
      
      <Button type="submit" >Add New Package</Button>
    </form>
        </div>
    );
};

export default AddProduct;