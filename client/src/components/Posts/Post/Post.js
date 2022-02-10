import React from "react";
import useStyle from "./styles"

const Post = () => {
  const classes = useStyle();
  return (
    <h1 className={classes}>POST</h1>
  );
}

export default Post