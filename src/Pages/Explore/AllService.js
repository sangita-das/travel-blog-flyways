import React from 'react';
import Rating from "react-rating";
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllService = ({service}) => {

    // Destructuring service object
    const {img, name, address, description, star, _id, BDT} = service;

    console.log(service);

    return (
        <Col
        data-aos="zoom-in-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
        >
        <Card className="my-2 p-3">
          <Card.Img
          className="mx-auto"
          style={{width:'300px', height: '220px'}}            
           variant="top" src={img} />
          <Card.Body>
          <Card.Title className="fw-bold text-danger"> {name} </Card.Title>
            <Card.Title className="fw-bold text-danger"> {address} </Card.Title>
            <Card.Text>
              Price: {BDT}TK 
            </Card.Text>

            <Card.Text>
               <Rating
                initialRating={star}
                readonly
                emptySymbol="far fa-star text-danger"
                fullSymbol="fas fa-star text-danger"></Rating> 
           </Card.Text>
            <Link to={`/purchase/${_id}`} >
              <Button  variant="warning">Buy Now</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default AllService;