const postsService = {
    createPost: (postObj) => {
        console.log("Reached post service")
        console.log(postObj);
    },
    deletePost: (postID) => {
        console.log(`Deleted post ${postID} in service`)
        console.log(postID);
    }
}

module.exports = postsService;