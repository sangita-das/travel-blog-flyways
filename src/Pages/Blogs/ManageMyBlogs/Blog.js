import React from 'react';
import { Card, Col , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
  
// Destructuring blog object
        const {image, description, title, author, email } = blog;
        
        console.log(blog);
        
     return (
        <div style={{width:'400px', height:'700px'}} className="mx-auto" > 

           


              <Col>
      <Card className="p-2 m-2">
        {/* <Card.Img className='mx-auto' style={{width:'300px', height:'300px'}}  variant="top"   src={`data:image/*;base64,${blog?.image}`} /> */}
        <Card.Img className='mx-auto' style={{width:'300px', height:'300px'}}  variant="top"   src={blog?.image} />
        <Card.Body>
          <Card.Title> {blog.title.slice(0,50)}  </Card.Title>
          <h5 style={{color:'green'}}> {blog?.author} </h5>
          <h6 style={{color:'blue'}}> {blog?.date} </h6>
          <Card.Text>
          {blog.description?.slice(0,250)}
          </Card.Text>
        </Card.Body>
        <Link to={`/blog/${blog?._id}`}>
                    <Button className='w-50 mx-auto' variant='success'> Read More </Button> </Link>
      </Card> 

       
    </Col>

    
        </div>
    );
};

export default Blog;