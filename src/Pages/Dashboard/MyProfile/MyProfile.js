import React, {useState, useEffect} from 'react';
import useAuth from '../../../hooks/useAuth'
import { Button } from 'react-bootstrap';
import './MyProfile.css'
import { useHistory } from 'react-router-dom';
const MyProfile = () => { 
    const [image, setImage] = useState(null) 
    const [userInfo, setUserInfo] = useState([]);
    console.log(userInfo)
    const [dob, setDob] = useState(null) 
    const { user } = useAuth();
    const history = useHistory();

    
    useEffect(()=>{
        fetch(`https://lit-wildwood-89046.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setUserInfo(data))
      },[user.email])

      const handleProfileUpdate = e =>{ 
        e.preventDefault()
        const formData = new FormData()
        if(!userInfo.dob)
        {
          formData.append('dob', dob)
        }
        else{
          formData.append('dob', userInfo.dob)
        }
       
        formData.append('image', image)
        formData.append('email', user.email)


        fetch(`https://lit-wildwood-89046.herokuapp.com/users/${user.email}`, {
            method: 'PUT',
            body: formData
            })
            .then(response => response.json())
            .then(data => {
           
             alert('Updated Successfully')
             
             document.getElementById("pic").reset(); 
             history.go(0)
            })
            .catch(error => {
            console.error('Error:', error);
            });
       
      }
      
   
    return ( 
        <div className='my-3'>
        <div className='mt-3 w-75 mx-auto'>
            <h1>My Profile</h1>
              <div className='row'>
                  <div className='col-lg-5 mx-auto my-3' style={{width:'300px', height:'300px', border:'2px solid salmon'}}>
                       
                       <img  className='img-fluid mt-3' style={{width:'250px', height:'250px'}} src={`data:image/*;base64,${userInfo.profilePhoto}`} alt="" /> <br /> <br />

                  </div>
                  <div style={{marginLeft:'10%'}} className='col-lg-7 text-start my-auto '>
                      <div className='row userInfo'>
                          <div className='col-lg-6 mx-auto my-3'>
                          <p>Name: {userInfo.displayName} </p>
                          <p>Email : {userInfo.email} </p>
                          </div>
                          <div className='col-lg-6 mx-auto my-3'>
                            {
                              (userInfo.dob) ? 

                              <p> Date of Birth : {userInfo.dob} </p>:
                               <input onChange={e => setDob(e.target.value)} type="date" name="dob" id="" />
                            }
                            <p>Role: {userInfo.role} </p>
                          </div>
                      </div>
                  </div>
              </div>
        </div>  
         <br /> <br />
        
                  <div>
                   <form id='pic' onSubmit={handleProfileUpdate}>

                   <input 
                  style={{marginRight:'3px'}}
                 accept='image/*'
                 type="file"
                 name="file" 
                 onChange={e => setImage(e.target.files[0])}
                 />

                <Button type='submit'>Update Profile</Button> 
                   </form>
                  </div>
        </div>
    );
}; 


export default MyProfile;