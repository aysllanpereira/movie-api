
const { User, Review } = require('../models');

class UserServices {

    async createUsers(data) {
        return await User.create(data);
    };
    
    async getUsers() {
        return await User.findAll({
            include: [{
                model: Review,
                as: 'reviews'
            }]
        });
    };

    async getUserById(id) {
        return await User.findByPk(id, {
            include: [{
                model: Review,
                as: 'reviews'
            }]
        });
    };

}

module.exports = new UserServices();