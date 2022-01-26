import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/carousel-banner/bg-highlight1.png';
import banner2 from '../../../images/carousel-banner/bg-highlight2.png';
import banner3 from '../../../images/carousel-banner/bg-highlight3.png';

import './Banner.css'



const Banner = () => {
  return (
    <div >
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={banner1}
            alt="First slide"
          />
          
          <Carousel.Caption>
            <div className=" my-5">
              <div className="mb-5 pb-5">
                <h1><strong className="text-light">Enjoy your tour with
                  "Flyways"</strong></h1>
                <br />
                <br />
                <h5 className="text-light fw-bold">We provide travelers with an authentic Jordanian experience that they
                  <br />can remember for the rest of their lives </h5>
              </div>
              <Link to={``}>
                <button className="btn btn-light text-success fw-bold">Top Destination</button>
              </Link>
            </div>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className=" my-5">
              <div className="mb-5 pb-5">
                <h1><strong className="text-light">Enjoy your tour with
                  "Flyways"</strong></h1>
                <br />
                <br />
                <h5 className="text-light fw-bold">We provide travelers with an authentic Jordanian experience that they
                  <br />can remember for the rest of their lives </h5>
              </div>
              <Link to={``}>
                <button className="btn btn-light text-success fw-bold">Top Destination</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className=" my-5">
              <div className="mb-5 pb-5">
                <h1><strong className="text-light">Enjoy your tour with
                  "Flyways"</strong></h1>
                <br />
                <br />
                <h5 className="text-light fw-bold">We provide travelers with an authentic Jordanian experience that they
                  <br />can remember for the rest of their lives </h5>
              </div>
              <Link to={``}>
                <button className="btn btn-light text-success fw-bold">Top Destination</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel >
    </div >
  );
};

export default Banner;