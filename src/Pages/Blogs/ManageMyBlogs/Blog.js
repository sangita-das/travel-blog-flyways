import React from 'react';
import { Card, Col , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Blog = ({blog}) => {



        const {image, description, title } = blog;
     return (
        <div style={{width:'400px', height:'700px'}} className="mx-auto" > 

           


              <Col>
      <Card className="p-2 m-2">
        <Card.Img className='mx-auto' style={{width:'300px', height:'300px'}}  variant="top" src={`data:image/*;base64,${image}`} />
        <Card.Body>
          <Card.Title> {title.slice(0,50)} </Card.Title>
          <h5 style={{color:'green'}}> {blog.author} </h5>
          <Card.Text>
              {description.slice(0,300)}
          </Card.Text>
        </Card.Body>
        <Link to={`/blog/${blog._id}`}>
                    <Button className='w-50 mx-auto' variant='success'> Read More </Button> </Link>
      </Card> 

       
    </Col>
        </div>
    );
};

export default Blog;