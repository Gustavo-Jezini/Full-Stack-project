const { Mongoose } = require('mongoose');
const PostMessage = require('../models/postsModels');

const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();

    console.log(postMessage);

    res.status(200).json(postMessage)
  } catch (error) {
    res.status(404).json({ message: error.message})
  }
};

const createPost = async (req, res) => {
  const post = req.body;
  
  const newPost = new PostMessage(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

const updatePost = async (req, res) => {
  const { id: _id } = req.params;

  // verificar se o id é valido no mongo
  if(!Mongoose.Types.ObjectiId.isValid(_id)) return res.status(404).send('No ')

  // True no final é para receber a nova versao do post
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });

  res.json(updatedPost)
}

module.exports = {
  getPosts,
  createPost,
  updatePost
}