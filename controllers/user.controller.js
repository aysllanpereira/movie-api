const userServices = require('../services/user.services');

class UserController {

    async createUser(req, res) {
        try {
            const user = await userServices.createUsers(req.body);
            return res.json(user);
        } catch (error) {
            console.error(error);
            return res.json(error);
        }
    };

    async getAllUsers(req, res) {
        try {
            const users = await userServices.getUsers();
            return res.json(users)
        } catch (error) {
            console.error(error);
            return res.json(error);
        }
    };

    async getUserId(req, res) {
        try {
            const userId = await userServices.getUserById(req.params.id);
            return res.json(userId);
        } catch (error) {
            console.error(error);
            return res.json(error);
        }
    }
}

module.exports = new UserController();