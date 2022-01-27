
import React, { useState } from 'react';
import loginbg from '../../../images/bd3.jpg'
import Navigation from '../../Shared/Navigation/Navigation';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Alert } from '@mui/material';
import './Login.css'


const loginStyle={
    background :   `url(${loginbg})`,
    backgroundSize :'cover',
    width: '100%',
    height:'800px',

}

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const {loginUser, googleSignIn, error} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleInputChangle = event =>{
        const type = event.target.name;
        const value = event.target.value;
        const newData = {...loginData}
        newData[type] = value;
        setLoginData(newData);
    } 

    const handleLogin = event =>{
        loginUser(loginData.email, loginData.password , history, location)
        event.preventDefault();
       
    }

    const handleGoogleSignIn = () =>
    {
          googleSignIn(history, location);
          
    }
    return (
        
       <>
        <Navigation></Navigation>
          <div style={loginStyle} >
            
            </div>
            <div className="mx-auto p-4 login" style={{border: '2px solid gray',
                        
                        backgroundColor: ' BlanchedAlmond ',
    
                        marginTop:'-600px',
                        borderRadius:'30px'
                          }}>


               <h4 className="fw-bold">Login Now</h4>
               <form onSubmit={handleLogin}>
                   
                   <TextField 
                    style={{width: '60%'}}
                   className="my-2"
                   required
                   id="standard-basic" 
                   label="Enter Email" 
                   name="email"
                   type="email"
                   onChange={handleInputChangle}
                   variant="standard" /> <br />
                   <TextField 
                    style={{width: '60%'}}
                    required
                   className="my-2"
                   id="standard-basic" 
                   label="Enter Password"
                   type="password" 
                   name="password"
                   onChange={handleInputChangle}
                   variant="standard" /> <br />
                   

                   <Button className="my-2" type="submit">Login</Button> <br />
                   {
                       (error) && 

                       <Alert severity="error">{error} </Alert> 
                   }
                   <Link
                   style={{textDecoration:'none'}}
                   to="/register">New user ? Please Register</Link>
                      </form> 
                      <p>-------------------</p>
                      <Button onClick={handleGoogleSignIn} variant="warning"><i class="fab fa-google"></i>google Sign in</Button>
                
            </div>
       </>
        
    );
};

export default Login;
