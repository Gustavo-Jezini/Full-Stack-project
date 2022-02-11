import React from "react";
import Post from "./Post/Post";
import { Grid, CircularProgress } from "@material-ui/core"

import useStyle from "./styles"

import { useSelector } from "react-redux";

const Posts = () => {
  const classes = useStyle();
  //temos Acesso ao state ou seja, a database
  const posts = useSelector((state) => state.posts) 
  console.log(posts);
  
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post.id} xs={12} sm={6} item>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    )
  );
}

export default Posts