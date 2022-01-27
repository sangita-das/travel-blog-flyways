
import { TextField , Button} from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { useHistory } from 'react-router';



const Review = () => {  
    const {user} = useAuth();
    const [review, setReview ] = useState('');
    const [value, setValue] = useState(4);
    const reviews = event =>{
       const data = event.target.value;
       setReview(data)
    } 

    const history = useHistory();


    const handleReview = event =>{
        event.preventDefault();
        const userReview = {user: user.displayName ,review:review, rating:value}
        axios.post('https://lit-wildwood-89046.herokuapp.com/reviews',userReview)
        .then(res=> {
            if(res.data.insertedId)
            {
                alert('Thanks For Your valuable FeedBack')
                history.replace('/dashboard')
            }
        })
        
    }
    return (
        <div>
            <h2 className="fs-1 fw-bold mb-5">Please Rate Us & Share Your Thoughts!</h2>
             
             <form onSubmit={handleReview}>
             <TextField onBlur={reviews} sx={{width:'50%'}} label="Write Opinion" color="secondary" focused /> <br /> <br /> 
             <Box
       sx={{
        '& > legend': { mt: 2 },
      }}
     >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </Box> <br /> <br />
             <Button type="submit" variant="outlined">Submit</Button>
             </form> 

            
           
        </div> 

    );
};

export default Review;