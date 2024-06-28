const express =require('express');
const usersController = require('../controllers/users.controller');

const router= express.Router()

router.post('/',usersController.createUser);
router.get('/:id',usersController.getUser);
router.put('/:id',usersController.updateUser);
router.delete('/:id',usersController.deleteUser);

module.exports = router;