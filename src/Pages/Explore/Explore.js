import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import AllService from './AllService';
import Footer from '../Shared/Footer/Footer';

const Explore = () => {
    const [services, setServices] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data => setServices(data))

    },[])

    if(services === null){return <Spinner animation="grow" ></Spinner>}
    return (
       <>
          
          <Navigation></Navigation>
            
            
            
            <div style={{width:'90%', margin: '0 auto '}}>
            <h2 
            style={{fontWeight:'600', color:'green',
             borderBottom:'5px solid gray', width:'50%',
             margin:' 10px auto',padding:'5px'
             }}
            >Explore and get your Desire Place</h2>
              
                <Row xs={1} md={3}  className="my-5">
               {
                   services.map(service => <AllService 
                    
                    key={service._key}
                    service = {service}
                   
                   ></AllService> )
               }
            </Row>
            
        </div>
        <Footer></Footer>
       </>
    );
};

export default Explore;