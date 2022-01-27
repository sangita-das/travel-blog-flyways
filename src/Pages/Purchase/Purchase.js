import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Purchase.css'
import axios from 'axios';

const Purchase = () => {
    const [service, setService ] = useState([])
    
    const {id} = useParams();
    const { register, handleSubmit, reset } = useForm();

    const uri =`https://lit-wildwood-89046.herokuapp.com/services/${id}`
    useEffect(()=>{
        fetch(uri)
        .then(res => res.json())
        .then(data => setService(data) )
    },[])
    const {user} = useAuth();
    const history = useHistory();
   
    const onSubmit = data => {
        console.log(data)
        axios.post('https://lit-wildwood-89046.herokuapp.com/orders', data)
        
        .then(res => {
            if(res.data.insertedId)
            {
                alert('Recieved Successfully');
                reset()
                history.replace('/')
            }
        })
    
    };



    return (

        <>
        <Navigation></Navigation>

        <div style={{width:'90%'}} className="my-1 mx-auto row"> 
                <h1 className="fs-1 fw-bold my-3 text-info ">Confirm your booking</h1>
            <div className=" col-lg-6 service-details" 
             
            >
              <h2 className='fw-bold mb-5'>Service Details</h2>
              <img className='img-fluid w-50 h-50' src={service.img} alt="" />
                    <h5 className='fw-bold mt-2'> {service.name} </h5> 
                    <p className="fw-bold">{service.address}; Price: {service.BDT}</p>
                    <h5 className='fw-bold mt-2'> {service.description}  </h5> 
                    
                    <p className="fw-bold">Price: {service.Email}</p>
                    <p></p>
            </div>
             {
                 (service._id!=null) &&

                 <div className=" col-lg-6 mt-3">
                 <h2 className="fw-bold mb-5">Customer Details</h2>
                 <form onSubmit={handleSubmit(onSubmit)}>
       <input {...register("bookingId")} readOnly value={service._id} /> <br/> 
       <input {...register("name")} readOnly value={service.name} /> <br/> 
       <input {...register("service_address")} readOnly value={service.address} /> <br/> 
       <input {...register("name")} readOnly value={user.displayName} /> <br/> 
       <input {...register("Email")} readOnly value={user.email} /> <br/> 
       <input {...register("address")} placeholder="Enter Your Address"  /> <br/> 
       <input type="tel" {...register("contact")} placeholder="Enter Your Phone Number" /> 
       <input  {...register("status")} value="pending" style={{visibility:'hidden'}} /> <br/>
       <input type="submit" value="Confirm booking"  style={{width:'40%',  backgroundColor:'green', color:'white', border:'1px solid green'}} />
     </form>
             </div>
             }
        </div>
        </>
    );
};

export default Purchase;
