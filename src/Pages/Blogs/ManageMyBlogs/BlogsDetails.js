import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

const BlogsDetails = () => {
    const id = useParams();
    const [blog, setBlog] = useState({}); 
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
         setLoading(true)
        fetch(`http://localhost:5000/blogs/${id.id}`)
        .then(res => res.json())
        .then(data => {
            setBlog(data)
            setLoading(false)
        })
    },[id.id])

     
     if(loading){return <CircularProgress></CircularProgress>} 
    return (

        <>
        <div className="w-75 mx-auto my-5">
            <div>
                
                <img style={{width:'50%', height:'50%'}}  className='img-fluid my-4'  src={`data:image/jpeg;base64,${blog.image}`} alt="" />

            </div> 

            <div className="text-start">
            <h2 className="fw-bold">{blog.title} </h2>
                <h6 style={{color:'blue'}}> Blog By {blog.author} </h6>

                <p> {blog.description} </p>
            </div>
        
        </div>
        <Link to='/blogs'><Button variant='warning'>Go Back to Blogs </Button></Link>
        <Footer></Footer>
        </>
    );
};

export default BlogsDetails;