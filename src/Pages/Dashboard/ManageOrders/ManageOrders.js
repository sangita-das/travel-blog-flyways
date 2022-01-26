import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from '@mui/material';
import axios from 'axios';
import { useHistory } from 'react-router';

const ManageOrders = () => {
    const his = useHistory();
    const [allOrders, setAllOrders] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services/orders')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[])
    
    const handleDeleteOrders = id =>{
        const procced = window.confirm("Are You Sure to Delete Order ?")
        
        if(procced)
        {
            fetch(`http://localhost:5000/services/order/${id}`,{
                method: 'DELETE'
            }).then(res => res.json())
            .then(data => {
               if(data.deletedCount > 0) 
               {
                  alert('Order Deleted')
                  
               } 
               const remainigOrders = allOrders.filter(product => product._id !== id)
                setAllOrders(remainigOrders)
            })
        }
    } 
   

    const updateOrder = id =>{
        axios.put(`http://localhost:5000/services/orders/${id}`)
        .then(res => {
            if(res.data.modifiedCount>0)
            {
                alert('Shipment Status Changed Successfully')
                
            }
            else{
                alert("Already Shipped")
            }
            let url = '/dashboard/manageorders';
            his.go(url)
        })
    }
    return (
        
        <div>
           <h3>Manage All The Orders</h3>  

           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Package Name</TableCell>
            <TableCell align="right">Client Email</TableCell>
            <TableCell align="right">Shipment Status</TableCell>
            <TableCell align="right">Change Status</TableCell>
            <TableCell align="right">Delete Orders</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allOrders.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.package_name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right"><Button onClick={()=>updateOrder(row._id)}><i class="fas fa-shipping-fast"></i></Button></TableCell>
              <TableCell align="right"><Button onClick={()=>handleDeleteOrders(row._id)}><i class="fas fa-trash-alt"></i></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageOrders;