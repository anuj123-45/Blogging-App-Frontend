import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
import App from "../App";

function Blogs() {
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("https://blog-rp7q.onrender.com/api/blog")
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);

  console.log("blogs data", blogs);

  


  return (

    





    <div>





      


       {blogs &&
      blogs.map((blog, index) => (
        
          <Blog
          id={blog._id}
          isUser={localStorage.getItem("userId") === blog.user._id}
          title={blog.title}
          content={blog.content}
          image={blog.image}
          userName={blog.userIp}
          position={index}
        />
          
        
      ))}
        {localStorage.setItem("Blogs Details", (JSON.stringify(blogs)))}
  
        
     

  </div>












  );
}

export default Blogs;
