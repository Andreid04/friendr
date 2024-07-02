//const { updatePost } = require('../controllers/posts.controller');
//const { getAllPosts } = require('../controllers/posts.controller');
const PostModel = require('../data/posts.model');
const {v4: uuidv4} = require('uuid');//for creating ids automatically

const postsService = {
    getPostById: async (postId) => {
        console.log("Reached post service");
        const response = await PostModel.findOne({id: postId},{});
        return response;
    },
    getAllPosts: async () => {
        const response = PostModel.find();//returns all entries
        return response;
    },
    createPost: (postObj) => {
        console.log("Reached post service")
        console.log(postObj);
        postObj.date = new Date().toISOString();//to create the date automatically
        postObj.id = uuidv4();
        const postToBeCreated = new PostModel(postObj);
        postToBeCreated.save()
        .then(() => 
            console.log('Post created'));
    },
    updatePost: (postId,update) => {
        console.log("Reached post updating service");
        console.log(postId);

        PostModel.findOneAndUpdate({id: postId},update)
        .then(()  => {
            console.log(`Updated post ${postId} in service`);
            return;
        })
    },
    deletePost: (postID) => {
        console.log("Reached post deleting service");

        PostModel.deleteOne({id:postID})
        .then(() =>{
            console.log(`Deleted post ${postID} in service`);
            return;
        });

    }
}

module.exports = postsService;