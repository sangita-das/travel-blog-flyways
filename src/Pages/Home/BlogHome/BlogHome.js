
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'


import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useBlog from '../../../hooks/useBlog';

SwiperCore.use([EffectCoverflow,Pagination]);

const BlogHome = () => {
    const {blogs} = useBlog()

    return (

            <div  className=" my-5">
     <h2 style={{color:' Gold '}} className="mb-3 fw-bold fs-1" >Blog Posts</h2>
     
     
     <p>One inspiring story is worth traveling. Discover more about local food, tradition and history. Read the stories that make you want to travel.</p>
     
     <p style={{color:'GoldenRod'}}> -----------------------------------------------------</p>

    <div className="slider-portfolio">

    {
                 
                 (blogs.length < 1) && <Spinner animation="border" variant="disabled"></Spinner> 
             
         }
    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
  "rotate": 50,
  "stretch": 0,
  "depth": 100,
  "modifier": 1,
  "slideShadows": true
}} pagination={true} className="mySwiper">
     
     {
         blogs.slice(0,5).map(blog => 
            
            <SwiperSlide key={blog._id}>
            <div 
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            style={{
                    width:'400px',
                    height:'600px',
                    border: '3px solid PaleGoldenRod'
                }} className=" mx-auto text-center p-3">
                <div 
                 
                >
                    <img className="img-fluid"  style={{width:'250px', height:'250px', borderRadius:'50%'}} src={`data:image/*;base64,${blog?.image}`}alt="" />
                </div>
                <div >
                    <h4> {blog.title.slice(0,50)} </h4>
                    <h5 style={{color:'green'}}> {blog?.author} </h5>
                    <p>{blog.description.slice(0,250)}</p>
                    <Link to={`/blog/${blog?._id}`}>
                    <Button className='w-50 mx-auto' variant='success'> Read More </Button>
                    </Link>
                </div>
            </div>
        </SwiperSlide> 

        
            )
     }
  </Swiper>
    </div>
    </div>

    );
};

export default BlogHome;