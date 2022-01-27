import React , {useEffect, useState} from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Service from './Service';


const Services = () => {
    const [services, setServices] = useState(null);
    // console.log(services)

    useEffect(()=>{
       
        fetch('https://lit-wildwood-89046.herokuapp.com/services')
        .then(res=>res.json())
        .then(data => setServices(data))

    },[])

    if(services === null){return <Spinner animation="border" />}
    return (
        <div style={{width:'90%'}} className="mx-auto text-warning">
            <h2 className="fw-bold">Top Destination & Available Package</h2>
            <p style={{color:'grayLimeGreen'}}> -----------------------------------------------------</p>
            
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