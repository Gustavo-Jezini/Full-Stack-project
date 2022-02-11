import React from "react";
import Post from "./Post/Post";

import useStyle from "./styles"

import { useSelector } from "react-redux";

const Posts = () => {
  const classes = useStyle();
  //temos Acesso ao state ou seja, a database
  const posts = useSelector((state) => state.posts) 
  console.log(posts);
  
  return (
    <>
      <h1 className={classes}>POSTS</h1>
      <Post />
    </>
  );
}

export default Posts