const axios = require('axios');

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
  // Primeiro a url , depois a informçao que esta passsando, ou seja o novo post
export const createPost = (newPost) => axios.post(url, newPost)