import { Row, Spinner } from 'react-bootstrap';
import useBlog from '../../../hooks/useBlog';
import Footer from '../../Shared/Footer/Footer';
import Blog from './Blog';


const Blogs = () => {
    
        const { blogs } = useBlog();
        console.log(blogs)

    return (
        <div> 
           
            <h4 className="my-5" style={{fontWeight:'600', color:'Chocolate', fontSize:'32px'}}>Go Exotic Places <br /> & <br /> EXPLORE A DIFFERENT WAY TO TRAVEL </h4>

            <p>When it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinations or vibrant landscapes, we have offers for you.</p>

            {
                 
                    (blogs.length < 1) && <Spinner animation="border" variant="success"></Spinner> 
                
            }
             <Row xs={1} md={3} className="mx-auto"> 


            {
                blogs.map(blog => <Blog 
                
                   key = {blog._id}
                   blog={blog}
                    ></Blog>).reverse()
                  
            }
  
        </Row> 
         <Footer></Footer>
        </div>
    );
};

export default Blogs;