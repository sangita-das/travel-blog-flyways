import React from 'react';
import { Card, Col , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Blog = ({blogs}) => {
  

        const {image, description, title, author } = blogs || {};
        console.log(blogs);
        
     return (
        <div style={{width:'400px', height:'700px'}} className="mx-auto" > 

           


              <Col>
      <Card className="p-2 m-2">
        <Card.Img className='mx-auto' style={{width:'300px', height:'300px'}}  variant="top" src={`data:image/*;base64,${blogs?.image}`} />
        <Card.Body>
          <Card.Title> {blogs?.title.slice(0,50)} </Card.Title>
          <h5 style={{color:'green'}}> {blogs?.author} </h5>
          <Card.Text>
              {blogs?.description.slice(0,300)}
          </Card.Text>
        </Card.Body>
        <Link to={`/blog/${blogs?._id}`}>
                    <Button className='w-50 mx-auto' variant='success'> Read More </Button> </Link>
      </Card> 

       
    </Col>
        </div>
    );
};

export default Blog;