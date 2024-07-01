const express =require('express');
const postsController = require('../controllers/posts.controller');

const router= express.Router()

router.post('/',postsController.createPost);
router.get('/:id',postsController.getPost);
router.get('/',postsController.getAllPosts);
router.put('/:id',postsController.updatePost);
router.delete('/:id',postsController.deletePost);

module.exports = router;