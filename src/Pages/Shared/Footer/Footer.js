import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-all w-100 p-3">
            <div className="footer row ">
            <div className="col-lg-3 col-xs-12 my-auto py-3">
               
            <h1 style={{fontFamily:'cursive'}}> <span  className="text-warning">FlyWays  </span> </h1>  

            <p>Treat yourself with a journey to your inner self. Visit a mystique Tibet and start your spiritual adventure. We promise, you’ll enjoy every step you make.</p> 
                
            </div> 
            <div className="col-lg-3 col-xs-12 my-auto py-3 ">
                <p>Looking for a new destination ? </p>
                <Link to="/explore"><Button variant="success">Explore</Button></Link>
            </div>
            <div className="col-lg-3 col-xs-12 my-auto py-3">
                <h3>At a glance</h3>
                <p><Link className="url"  to="/home">Home</Link></p>
                <p><Link className="url"  to="/explore">Package </Link></p>
                

            </div> 
            <div className="col-lg-3 col-xs-12 my-auto py-3">
                <h3>Contact Us</h3>
                <p>Email: visit@flyways.com</p> 
                <a target='blank' href='https://www.facebook.com/'>
                 <span className='fs-4 p-2'> <i className="fab fa-facebook"></i></span>
                </a> 
                 
                <a target='blank' href='https://www.instagram.com/'>
                <span className='fs-4 p-2'><i className="fab fa-instagram"></i></span>
                </a> 

                <a target='blank' href='https://www.linkedin.com/'>
                <span className='fs-4 p-2'><i className="fab fa-linkedin"></i></span>
                </a> 
              
            </div>
        </div>
        <hr />
        <div>
            <footer style={{fontWeight:'600', color:'orangered'}}> Copyright 2022 © flyways | All rights reserved. | Terms and Conditions | Privacy Policy</footer>
        </div>
        </div>
    );
};

export default Footer;