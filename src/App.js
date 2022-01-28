import './App.css';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Purchase from './Pages/Purchase/Purchase';
import Explore from './Pages/Explore/Explore';
import Blogs from './Pages/Blogs/ManageMyBlogs/Blogs';
import BlogsDetails from './Pages/Blogs/ManageMyBlogs/BlogsDetails';
import Notfound from './Pages/Home/NotFound/NotFound';




function App() {
  return (
    <div className="App">
       <AuthProvider>
       <BrowserRouter> 
       
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route  path="/home">
                <Home></Home>
              </Route>
              <Route  path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute  path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>
              <PrivateRoute path = '/blogs'>
             <Blogs></Blogs>
          </PrivateRoute>
          <Route path = '/blog/:id'>
             <BlogsDetails></BlogsDetails>
          </Route>
              <PrivateRoute  path="/purchase/:id">
                <Purchase></Purchase>
              </PrivateRoute>
              <Route  path="/explore">
                <Explore></Explore>
              </Route>
              
              <Route path="/register">
                 <Registration></Registration>
              </Route>
              <Route path='*'>
             <Notfound></Notfound>
          </Route>
            </Switch>
       </BrowserRouter>
       </AuthProvider>
    </div>
  );
}

export default App;
