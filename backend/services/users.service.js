
//const { updateUser } = require('../controllers/users.controller');
const UserModel = require('../data/users.model');

const usersService = {
    getUserById: async (userId) => {
        const response = await UserModel.findOne({id: userId},{});
        return response;
    },
    createUser: (userObj) => {
        console.log("Reached user service")
        console.log(userObj);
        const userToBeCreated = new UserModel(userObj);
        userToBeCreated.save()
        .then(() => 
            console.log('User created')); 
    },
    updateUser: (userId,update) => {
        console.log("Reached updating service");
        console.log(userId);

        UserModel.findOneAndUpdate({id: userId}, update)
        .then(() => {
            console.log(`Updated user ${userId} in service`);
            return;
        })
    },
    deleteUser: (userId) => {
        console.log("Reached deleting service");

        UserModel.deleteOne({id: userId}).then(() => 
           { console.log(`Deleted user ${userId} in service`)
            return;
    });
    
    }
}

module.exports = usersService;