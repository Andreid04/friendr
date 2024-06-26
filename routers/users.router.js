const express =require('express');
const usersController = require('../controllers/users.controller');

const router= express.Router()

const users = [{id: 1, firstName: "Forrest", lastName: "Gump"},
    {id: 2, firstName: "Hari", lastName: "Seldon"},
    {id: 3, firstName: "Tom", lastName: "Cruise"},
];

router.post('/',(req,res) => {
    usersController.createUser(req.body);
    res.status(201);//custom error code
    res.send("Succsefully created!");
})

router.get('/',(req,res) => {
    const requserId  = req.query.id;
    res.status(404).send();
})

router.delete('/:id',(req,res) => {
    const requserId  = req.params.id;
    usersController.delete(requserId);
    res.status(200).send();
})

module.exports = router;