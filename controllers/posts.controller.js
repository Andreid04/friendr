const postsService = require("../services/posts.service");

const postsController = {
    createPost: (postObj) => {
        console.log("Reached post controller")
        console.log(postObj);
        postsService.createPost(postObj);
    },
    delete: (postID) => {
        console.log(`Deleted post with id: ${postID}`);
        postsService.deletePost(postID);
    }
}

module.exports = postsController;