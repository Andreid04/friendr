const express =require('express');
const postsController = require('../controllers/posts.controller');

const router= express.Router()

const posts = [{id: 1,owner: "Andrei",title: "Sushi",tags: "food"},
    {id: 2,owner: "Bogdan",title: "Mountains",tags: "travel"},
    {id: 3,owner: "Mario",title: "Beach",tags: "sea"},
];

router.post('/',(req,res) => {
    postsController.createPost(req.body);
    res.status(201);//custom error code
    res.send("Succsefully created!");
})

router.get('/',(req,res) => {
    const reqpostId  = req.query.id;
    res.status(404).send();
})

router.delete('/:id',(req,res) => {
    const reqpostId  = req.params.id;
    postsController.delete(reqpostId);
    res.status(200).send();
})

module.exports = router;