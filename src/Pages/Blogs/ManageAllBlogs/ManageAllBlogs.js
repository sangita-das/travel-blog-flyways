import { useEffect, useState } from 'react';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ManageAllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('https://lit-wildwood-89046.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data.blog))
    } , [])
        const handleDeleteBlogs = id =>{
        const procced = window.confirm("Are You Sure to Delete This Blogs ?")
        if(procced)
        {
            fetch(`https://lit-wildwood-89046.herokuapp.com/blogs/${id}`,{
                method: 'DELETE'
            }).then(res => res.json())
            .then(data => {
             
               if(data.deletedCount > 0) 
               {
                  alert('Blog Deleted Succesfully')

                  
               } 
               const remainigBlogs = blogs.filter(service => service._id !== id)
                setBlogs(remainigBlogs)
            })
        }
    } 

     const handleUpdateBlogs = id =>{

      fetch(`https://lit-wildwood-89046.herokuapp.com/blogs/${id}`,{
        method: 'PUT'
    }).then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0)
      {
        alert('Status Changed Successfully')
      }
    })

     }


    return (
       <div style={{width:'90%', height:'100%'}} className='mx-auto' >
           <h2 className="my-3">Manage All The Blogs</h2>
           <div>
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blogs.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell align="right">{row.title.slice(0,30)}</TableCell>
              <TableCell align="right">{row.author}</TableCell>
              <TableCell align="right">{row.status} <button onClick={()=>handleUpdateBlogs(row._id)}><i className="fas fa-edit"></i></button> </TableCell>
              <TableCell align="right"><button onClick={()=>handleDeleteBlogs(row._id)}><i className="fas fa-trash-alt"></i></button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
       </div>
    );
};

export default ManageAllBlogs;