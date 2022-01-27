import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Navigation = () => {

  const {user, logOut} = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" style={{background:'DarkSlateGray'}} variant="light">
        <Container>
        
        <Navbar.Brand as={Link} to='/' >  <h3 style={{fontFamily:'cursive'}}> <span  className="text-warning">FlyWays  </span> </h3> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link className="text-light" as={Link} to='/home' >Home</Nav.Link>
            <Nav.Link className="text-light" as={Link} to='/explore' >Explore</Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/blogs">Blogs</Nav.Link>
          </Nav> 
          {
            (!user.uid) ? 
            <Nav>
            <Nav.Link className="text-light" as={Link} to='/login' >Login</Nav.Link>
             </Nav> 
          :
          <div className="d-flex">
            
            
             <h5 className="my-auto text-primary" style={{marginRight: '15px'}}>Welcome, {user.displayName}</h5> <Button onClick={logOut}> LogOut </Button>

             <Nav>
            <Nav.Link as={Link} className="fw-bolder mx-2 text-light"  to='/dashboard' >Dashboard</Nav.Link>
            </Nav>
          </div>
          
          }
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;