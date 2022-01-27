import { TextField , Button} from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './WriteBlogs.css'

const WriteBlogs = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)
     
    const {user} = useAuth();
        const handleSubmit = e => {

            if(!image)
            {
                alert('Please Insert an Image!')
            }


            e.preventDefault()
            const formData = new FormData();
            formData.append('image', image);
            formData.append('title', title);
            formData.append('description', description);
            formData.append('status', 'pending');
            formData.append('email', user.email)
            formData.append('author', user.displayName);

            fetch('https://lit-wildwood-89046.herokuapp.com/blogs', {
            method: 'POST',
            body: formData
            })
            .then(response => response.json())
            .then(data => {
        
             alert('Blog Uploaded Succesfully');
             document.getElementById("form").reset(); 
            })
            .catch(error => {
            console.error('Error:', error);
            });
             }

    return (
        <div className="mt-3 blog-box">
            <h2>Write a New Blog</h2>

            <div className="mt-4">
            <form id='form' onSubmit={handleSubmit}>
                
                <label style={{marginRight:'5px'}} htmlFor="file">Upload Image</label> 
                <input
                 accept='image/*'
                 type="file"
                 name="file" 
                 onChange={e => setImage(e.target.files[0])}
                 /><br /> <br />

                 <TextField className="blog"
                  onChange={e => setTitle(e.target.value)}
                  id="title" 
                  label="Title of the blog"
                  variant="standard" /> <br /> <br /> <br />

                 <TextField
                 onChange={e => setDescription(e.target.value)}
                className="blog"
                id="description"
                label="Write Your Blog Here"
                multiline
                rows={6}
                
          variant="standard"
        />     <br /> <br />

                <Button variant="contained" type='submit'>
                    Upload
                </Button>
            </form>
            </div>
        </div>
    );
};

export default WriteBlogs;