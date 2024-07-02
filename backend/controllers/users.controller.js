const usersService = require("../services/users.service");
const UserModel = require("../data/users.model");

const usersController = {
    getUser: async (req, res) => {
        console.log("Reached GET user controller");
        const username = req.params.username;
        console.log(req.params.username);
        const userObj = await usersService.getUserByUsername(username);
        if(!userObj){
            res.status(404).send("Username not found");
            return;
        }
        res.status(200).send(userObj);
    },
    createUser: async (req, res) => {
        console.log("Reached user controller");
        const userToBeCreated = req.body;
        console.log(userToBeCreated);

        //validate user obj from request
        if (
            !userToBeCreated ||
            !userToBeCreated.id ||
            !userToBeCreated.firstName ||
            !userToBeCreated.lastName ||
            !userToBeCreated.username
        ) {
            res.status(400).send("Invalid user object");
            return;
        }

        usersService.createUser(userToBeCreated);
        res.status(201).send("User created succesfully")
    },
    updateUser: async (req,res) => {
        console.log("Reached update controller");
        const userId = req.params.id;
        const update = req.body;
        usersService.updateUser(userId,update);
        res.status(200).send("Updated user");

    },
    deleteUser: async (req, res) => {
        console.log("Reached delete controller");
        const userId = req.params.id;
        usersService.deleteUser(userId);
        res.status(200).send("Succesfully deleted user");
    }
}

module.exports = usersController;