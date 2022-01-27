import { useEffect, useState } from "react";


const useBlog = () =>{

    const [blogs, setBlogs] = useState([]);
    // console.log(blogs)
    let activeBlogs = [];

    const [isSubscribed, setIsSubscribed] = useState(true)

    
    useEffect(()=>{

            fetch('https://lit-wildwood-89046.herokuapp.com/blogs')
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
            blogs.push(blog)
        }
    }

   

    return {
       blogs,
       activeBlogs
   
    };

}

export default useBlog