import React, {useState, useEffect} from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Button} from '@mui/material/';
import Paper from '@mui/material/Paper';

const UserOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/orders/${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])

    const deleteOrder = id =>{
        const procced = window.confirm('Are You Sure to Cancel Your Order?');
        if(procced)
        {
            fetch(`http://localhost:5000/order/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json() )
            .then(data=>{
                if(data.deletedCount > 0) 
                {
                   alert('Order Cancelled')
                   
                }

                const remainigOrders = orders.filter(order => order._id !== id)
                setOrders(remainigOrders)
            })
        }
        
    }

    return (
        <div> 
            <h2 className="my-3 fw-bold">My Orders</h2>
            <TableContainer component={Paper}>
      <Table className="table" sx={{width:'80%', margin:'auto'}}  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Booking Id</TableCell>
            <TableCell>Resort Name</TableCell>
            <TableCell align="right">User Address</TableCell>
            <TableCell align="right">Contact Number</TableCell>
            <TableCell align="right">Order Status</TableCell>
            <TableCell align="right">Cancel Orders</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {row.bookingId}
              </TableCell>
              <TableCell component="th" scope="row">
               {row.brand} {row.package_name}
              </TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.contact}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell  align="right"><Button onClick={()=>deleteOrder(row._id)} sx={{color:'red',width: '80px'}}><i class="fas fa-window-close"></i></Button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default UserOrders;