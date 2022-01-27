import React, { useState } from 'react';
import loginbg from '../../../images/bd6.jpg'
import Navigation from '../../Shared/Navigation/Navigation';
import TextField from '@mui/material/TextField';
import { Button, Spinner } from 'react-bootstrap';
import { Link , useHistory, useLocation} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Alert from '@mui/material/Alert';


const loginStyle={
    background :   `url(${loginbg})`,
    backgroundSize :'cover',
    width: '100%',
    height:'800px',

}


const Registration = () => {

    const [loginData, setLoginData] = useState({});
    const {user, registerUser, error , loading, googleSignIn} = useAuth();
    const history = useHistory();
    const location = useLocation();


    const handleInputChangle = event =>{
        const type = event.target.name;
        const value = event.target.value;
        const newData = {...loginData}
        newData[type] = value;
        setLoginData(newData);
    } 
 
    const handleRegister = event =>{

        if(loginData.password !== loginData.password2)
        {
            alert('Password did not match')
        }
        registerUser( loginData.email, loginData.password, loginData.name, history)
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
                        
                        backgroundColor: ' Wheat ',
    
                        marginTop:'-600px',
                        borderRadius:'30px'
                          }}>


               <h4 className="fw-bold">Register Now</h4>
                   {
                       (!loading) ? 

                       <form onSubmit={handleRegister}>
                   
                       <TextField 
                       style={{width: '60%'}}
                       required
                       className="my-2"
                       id="standard-basic" 
                       label="Enter Name" 
                       name="name"
                       type="text"
                       onChange={handleInputChangle}
                       variant="standard" /> <br />

                       <TextField 
                       style={{width: '60%'}}
                       required
                       className="my-2"
                       id="standard-basic" 
                       label="Enter Email" 
                       name="email"
                       type="email"
                       onChange={handleInputChangle}
                       variant="standard" /> <br />

                       <TextField 
                       required
                        style={{width: '60%'}}
                       className="my-2"
                       id="standard-basic" 
                       label="Enter Password"
                       type="password" 
                       name="password"
                       onChange={handleInputChangle}
                       variant="standard" /> <br />

                       <TextField
                       required 
                        style={{width: '60%'}}
                       className="my-2"
                       id="standard-basic" 
                       label="Re-Enter Password"
                       type="password" 
                       name="password2"
                       onChange={handleInputChangle}
                       variant="standard" /> <br />
                      
     
                       <Button className="my-2" type="submit">Register</Button> <br />
                        
                       {
                       (user?.uid) && 

                       <Alert severity="success">User Created Successfully</Alert>  
                       }
                       {
                           (error) && 
                           <Alert severity="error">{error} </Alert> 

                       }
                        <br />
                       <Link
                       style={{textDecoration:'none'}}
                       to="/login">Already Registered? Please Login</Link>
                          </form> : 

                          <Spinner animation="border" variant="success"></Spinner>
                   } 

                  
                      <p>-------------------</p>
                      <Button onClick={handleGoogleSignIn} variant="warning"><i class="fab fa-google"></i>oogle Sign in</Button> 

                     
                
            </div>
       </>
    );
};

export default Registration;
