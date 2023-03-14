import React from 'react';
import  { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  //get blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("/api/v1/blog/all-blog");
      console.log(data);
      console.log(blogs);
      console.log(data.blogs.title);
      console.log(data.title);
      console.log("hi");

      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);



  return (
    <>
    { blogs &&
    blogs.map((blog) => (
      <BlogCard
            id= {blog?._id}
            isUser = { localStorage.getItem("userId") === blog?.user?._id }
            title = { blog?.title }
            description = { blog?.description }
            image = { blog?.image }
            username = { blog?.user?.username }
            time = { blog.createdAt }
      />
        ))
}
    </>
  );


  
};

export default Blogs;
