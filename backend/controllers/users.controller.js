const usersService = require("../services/users.service");
const UserModel = require("../data/users.model")

const usersController = {
    getUser: async (req, res) => {
        console.log("Reached GET user controller");
        const userId = req.params.id;
        console.log(req.params.id);
        const userObj = await usersService.getUserById(userId);
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
    deleteUser: async (req, res) => {
        console.log(`Deleted user with id: ${userID}`);
        usersService.deleteUser(userID);
    }
}

module.exports = usersController;