import React , {useEffect, useState} from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Service from './Service';


const Services = () => {
    const [services, setServices] = useState(null);

    useEffect(()=>{
        // fetch('https://quiet-chamber-40235.herokuapp.com/products')
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data => setServices(data))

    },[])

    if(services === null){return <Spinner animation="border" />}
    return (
        <div style={{width:'90%'}} className="mx-auto">
            <h2 className="fw-bold">Top Destination & Available Package</h2>
            <p style={{color:'gray'}}> -----------------------------------------------------</p>
            
            <Row xs={1} md={3}  className="my-5">
               {
                   services.slice(0,6).map(service => <Service 
                     key={service._id}
                     service={service}
                   ></Service>)
               }
            </Row>

        </div>
    );
};

export default Services;