
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import {Button} from '@mui/material/';
import Typography from '@mui/material/Typography';
import {
    
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServices/ManageServices';
import ManageOrders from '../ManageOrders/ManageOrders';
import Review from '../Review/Review';
import AddService from '../AddService/AddService';
import UserOrders from '../UserOrders/UserOrders';
import MyProfile from '../MyProfile/MyProfile';
import ManageAllBlogs from '../../Blogs/ManageAllBlogs/ManageAllBlogs';
import ManageMyBlogs from '../../Blogs/ManageMyBlogs/ManageMyBlogs';
import { Nav } from 'react-bootstrap';
import WriteBlogs from '../WriteBlogs/WriteBlogs';

 


const drawerWidth = 250;


function Dashboard(props) {
    let { path, url } = useRouteMatch();
    const {logOut, user, admin} = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    
  }; 
 
   console.log(admin)


  const drawer = (
     
    <div>
      <Toolbar />
      <Divider />
      <List sx={{paddingTop: '30%'}}>
      <Link to={`${url}`}> <Button variant="contained" color="success" sx={{marginBottom:'10px', width:'140px'}} >DashBoard</Button></Link> <br />
         {
           (admin) ?
           <Box> 

<Nav.Link as={Link} to={`${url}/myprofile`}>My Profile</Nav.Link>

               <Link to={`${url}/manageorders`}> <Button variant="contained" color="success" sx={{marginBottom:'10px', width:'140px'}} >Manage All Order</Button></Link> <br />

               <Link to={`${url}/addservice`}> <Button variant="contained" color="success" sx={{marginBottom:'10px', width:'140px'}} >Add a Package</Button></Link> <br />

              <Link to={`${url}/makeadmin`}> <Button variant="contained" color="success" sx={{marginBottom:'10px', width:'140px'}} >Make A Admin</Button></Link> <br />

              <Link to={`${url}/manageservices`}> <Button variant="contained" color="success" sx={{marginBottom:'10px', width:'140px'}} >Manage Orders</Button></Link> <br />

              <Nav.Link as={Link} to={`${url}/writeblogs`}>Write New Blog</Nav.Link>
                  <Nav.Link as={Link} to={`${url}/managemyblogs`}>Manage My Blogs</Nav.Link>

              

           </Box> :
           <Box>
             

        
<Link to={`${url}/pay`}> <Button sx={{marginBottom:'10px', width:'140px'}} variant="contained" color="success">Pay</Button></Link> <br />

<Link to={`${url}/myorders`}> <Button sx={{marginBottom:'10px', width:'140px'}} variant="contained" color="success">My Orders</Button></Link> <br />

<Link to={`${url}/reviews`}> <Button sx={{marginBottom:'10px', width:'140px'}}variant="contained" color="success">Review</Button></Link> <br />
           </Box>
         }
        
  
        
        
        
        <Link to="/home">  <Button  variant="contained" color="success" sx={{marginBottom:'10px', width:'140px'}} >Home</Button></Link> <br />

        <Button sx={{marginBottom:'10px', width:'140px'}} onClick={logOut} variant="contained" color="success">LogOut</Button>

       
        
        
      </List> 
       
       

      <Divider />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const [roles, setRoles] = useState(null);

  useEffect(()=>{
    fetch(`http://localhost:5000/users/${user.email}`)
    .then(res => res.json())
    .then(data => setRoles(data.role))
  },[user.email])

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        <Switch>
        <Route exact path={path}>
          <h3>Welcome to DashBoard, {user.displayName} </h3>
        </Route>
        <Route path={`${path}/myprofile`}>
            <MyProfile></MyProfile>
         </Route>
        <Route  path={`${path}/pay`}>
          <h3>Payment System Comming Soon</h3>
        </Route>
        <Route  path={`${path}/makeadmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route  path={`${path}/addservice`}>
          <AddService></AddService>
        </Route>
        <Route  path={`${path}/manageservices`}>
          <ManageServices></ManageServices>
        </Route>
        <Route  path={`${path}/manageorders`}>
          <ManageOrders></ManageOrders>
        </Route>
        <Route  path={`${path}/reviews`}>
          <Review></Review>
        </Route>
        <Route path={`${path}/myorders`}>
        <UserOrders></UserOrders>
        </Route>
        <Route path={`${path}/writeblogs`}>
           <WriteBlogs></WriteBlogs>
         </Route>
         <Route path={`${path}/managemyblogs`}>
            <ManageMyBlogs></ManageMyBlogs>
         </Route>
         <Route path={`${path}/manageallblogs`}>
            <ManageAllBlogs></ManageAllBlogs>
         </Route>
      </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
