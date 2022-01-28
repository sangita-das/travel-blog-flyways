import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Button} from '@mui/material/';
import Paper from '@mui/material/Paper';


const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch( `https://lit-wildwood-89046.herokuapp.com/services`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[]) 

    const handleServiceDelete = id =>{
        const procced = window.confirm("Are You Sure to Delete Service ?")
        
        if(procced)
        {
            fetch(`https://lit-wildwood-89046.herokuapp.com/services/${id}`,{
                method: 'DELETE'
            }).then(res => res.json())
            .then(data => {
               if(data.deletedCount > 0) 
               {
                  alert('Service Deleted')
                  
               } 
               const remainigOrders = services.filter(service => service._id !== id)
               setServices(remainigOrders)
            })
        }
    }
    return (
        <div>
           <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Service Id</TableCell>
            <TableCell align="right">Resort Name</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.BDT}</TableCell>
              <TableCell align="right"><Button onClick={()=>handleServiceDelete(row._id)}><i class="fas fa-trash-alt"></i></Button> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageServices;