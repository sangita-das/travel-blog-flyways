import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import logo from '../../../images/logo.png';
const Navigation = () => {

  const {user, logOut} = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" style={{background:'DarkSlateGray'}} variant="light">
        <Container>
        
        <Navbar.Brand as={Link} to='/' >  <h3 style={{fontFamily:'cursive'}}> <span  className="text-warning">FlyWays  </span> </h3> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/home' >Home</Nav.Link>
            <Nav.Link as={Link} to='/explore' >Explore</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
          </Nav> 
          {
            (!user.uid) ? 
            <Nav>
            <Nav.Link as={Link} to='/login' >Login</Nav.Link>
             </Nav> 
          :
          <div className="d-flex">
            
            
             <h5 className="my-auto text-white" style={{marginRight: '15px'}}>Welcome, {user.displayName}</h5> <Button onClick={logOut}> LogOut </Button>

             <Nav>
            <Nav.Link as={Link} className="fw-bolder mx-2"  to='/dashboard' >Dashboard</Nav.Link>
            </Nav>
          </div>
          
          }
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;