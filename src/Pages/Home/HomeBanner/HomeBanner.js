import React from 'react';
import { Button } from 'react-bootstrap';
import homebanner from '../../../images/Banner/banner1.jpg';
import homebanner1 from '../../../images/bd4.jpg';
import homebanner2 from '../../../images/bd5.jpg';
import homebanner3 from '../../../images/bd2.jpg';
import Typewriter from 'typewriter-effect';

const HomeBanner = () => {
   
    return (
       <>
        <div  
            
           
        
             style={{width: "85%", 
             backgroundColor:'whitesmoke' ,
             paddingBottom:'150px', paddingTop:'50px',
             
            } 
             } className="row my-5 text-start mx-auto px-5  ">
            <div
            
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2500"
            
            className='col-lg-6 my-auto mb-3'>
               
               <h2 className="fw-bold text-success">
               
               <Typewriter
  options={{
    strings: ['Welcome to FLYWAYS', 'Dare To Explore'],
    autoStart: true,
    loop: true,
  }}
/>
               
               </h2>
              
               <p>Exploring means learning. Bring new experiences from each journey. Meet different cultures, traditions and landscapes. Choose your next destination and start your trip.When it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinations or vibrant landscapes, we have offers for you.</p>
               <Button>Explore Now</Button>
            </div>
            <div  
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2500"
            className='col-lg-6 mb-3'>
                <img style={{width: '600px', height:'400px',borderRadius:'20px'}} className="img-fluid mx-auto" src={homebanner} alt="" />
            </div>
        </div>  
        
        {/*  */}

        <div
        
        data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
        style={{width: '75%', marginTop:'-100px'}} className="row mx-auto mb-5" >
            
          <div style={{border:'1px solid white', backgroundColor:'rgba(  222, 221, 206   , 0.8)'}} className="p-3 col-lg-4 d-flex align-items-center">
              <div>
              <img style={{width: '600px', height:'400px',borderRadius:'20px'}} className="img-fluid mx-auto" src={homebanner1} alt="" />
              </div>
          </div>
          
          <div style={{border:'1px solid white', backgroundColor:'rgba(   222, 221, 206   , 0.8)'}} className="p-3 col-lg-4 d-flex align-items-center">
              <div>
              <img style={{width: '600px', height:'400px',borderRadius:'20px'}} className="img-fluid mx-auto" src={homebanner2} alt="" />
              </div> 
          </div>

          <div style={{border:'1px solid white', backgroundColor:'rgba(  222, 221, 206  , 0.8)'}} className="p-3 col-lg-4 d-flex align-items-center">
              <div>
              <img style={{width: '600px', height:'400px',borderRadius:'20px'}} className="img-fluid mx-auto" src={homebanner3} alt="" />
              </div>
          </div>
             
        
        </div>
       
       </>
    );
};

export default HomeBanner;