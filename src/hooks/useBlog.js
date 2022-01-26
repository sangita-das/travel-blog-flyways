import { useEffect, useState } from "react";


const useBlog = () =>{

    const [blogs, setBlogs] = useState([]);
    let activeBlogs = [];

    const [isSubscribed, setIsSubscribed] = useState(true)

    
    useEffect(()=>{

            fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => {
            if(isSubscribed)
            {
                setBlogs(data)
            }
        })

        return () => {
            setIsSubscribed(false)
        }
        
           
    },[])
    
   
    for(const blog of blogs)
    {
        if(blog.status === 'active')
        {
            activeBlogs.push(blog)
        }
    }

   

    return {
       blogs,
       activeBlogs
   
    };

}

export default useBlog