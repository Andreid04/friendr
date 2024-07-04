const postsService = require("../services/posts.service");

const postsController = {
    getPost: async (req, res) => {
        console.log("Reached GET post controller");
        const postId = req.params.id;
        console.log(req.params.id);
        const postObj = await postsService.getPostById(postId);
        res.status(200).send(postObj);
    },
    getAllPosts: async (req,res) => {
        console.log("Reached GET post controller");

        const postObj = await postsService.getAllPosts();
        res.status(200).send(postObj);
    },
    updatePostLikes: async (req, res) => {
        console.log("Reached PATCH post likes controller");
        const postId = req.params.id;
        const username = req.body.username;

        if(!username) {
            res.status(400).send();
            return;
        }

        console.log(req.params.id);
        console.log(username);

        const postObj = await postsService.getPostById(postId);
        if(!postObj){
            res.status(404).send("User id does not exist!");
            return;
        }

        const likes = postObj.likes;

        if(likes.includes(username)) {
            await postsService.removePostLikes(postId,username);
        }
        else{
            await postsService.addPostLikes(postId,username);
        }

        const updatedPostObj = await postsService.getPostById(postId);


        res.status(200).send(updatedPostObj);
    },
    createPost: async (req, res) => {
        console.log("Reached post controller")
        const postToBeCreated = req.body;
        console.log(postToBeCreated);

        //validate post obj from request
        if (
            !postToBeCreated ||
            !postToBeCreated.author ||
            !postToBeCreated.title ||
            !postToBeCreated.description
        ) {
            res.status(400).send("Invalid post object");
            return;
        }


        postsService.createPost(postToBeCreated);
        res.status(201).send("Post created succesfully")
    },
    updatePost: async (req,res) => {
        console.log("Reached post update controller");
        const postId = req.params.id;
        const update = req.body;
        postsService.updatePost(postId,update);
        res.status(200).send("Updated post");

    },
    deletePost: async (req, res) => {
        console.log("Reached post delete controller");
        const postId = req.params.id;
        postsService.deletePost(postId);
        res.status(200).send("Succesfully deleted post");
    }
}

module.exports = postsController;