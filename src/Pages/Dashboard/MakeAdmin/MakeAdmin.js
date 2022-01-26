import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const MakeAdmin = () => {
    const [email, setEmail] = useState();
    const history = useHistory();

    const emailChange = event =>{
        setEmail(event.target.value)
    }

    const handleadmin = event =>{
        event.preventDefault()
        const admin = {email: email}
        axios.put('http://localhost:5000/users/admin',admin)
        .then(res =>{
                console.log(res)
                if(res.data.modifiedCount)
                {
                    alert("Admin maded Successfully")

                }
                else{
                    alert('Admin already exist or User Does Not Exist')
                }
                history.replace('/dashboard')

            })
        
        
    }
    return (
        <div className="my-5">
            <form onSubmit={handleadmin}>
            <h2 className="fs-2 fw-bold my-3">Make a User Admin</h2>
            <input onBlur={emailChange} type="email" placeholder="Enter User Email" />  <br />
            <Button type="submit" >make admin</Button>
            </form>

        </div>
    );
};

export default MakeAdmin;